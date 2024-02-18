
from PIL import Image, ExifTags, Image
import pillow_avif
import os 

# path= r"C:\Users\tatet\Pictures\Brynelles Website\gallery_raw"
path= r"C:\Users\tatet\Pictures\Brynelles Website\uncompressed"
export_path = r'C:\Users\tatet\Pictures\Brynelles Website\compressed'

double_wide = [1, 4, 9, 11, 17, 26, 29, 35, 56, 61, 62, 80, 85, 86, 94, 102, 116, 117, 120, 135, 157, 177, 179, 191, 210, 211, 240, 261, 312, 318, 323, 332, 236, 335, 337]
triple_wide = [15, 24, 31, 59, 69, 76, 83, 118, 126, 154, 187, 198, 212, 221, 233, 234, 253, 255, 282, 300, 313]

images = os.listdir(path)

def shrink(img, width):
    width_percent = (width / float(img.size[0]))
    height_size = int( float(img.size[1]) * float(width_percent) )
    return img.resize((width, height_size), Image.Resampling.LANCZOS)

def resize():
    for image in images:
        image_name = image.split('.', 1)[0]
        print(image_name)
        img = Image.open(path+"\\"+image)
        # exifstuff = img.getexif()
        # date = exifstuff[ExifTags.Base.DateTime]
        # print(date.replace(":", ",").replace(" ", ","))

        if int(image_name) in double_wide:
            print("double")
            img_versions = [("full", img), ("icon-reg", shrink(img, 720)), ("icon-sml", shrink(img, 520)), ("icon-xsml", shrink(img, 380))]
        elif int(image_name) in triple_wide:
            print("triple")
            img_versions = [("full", img), ("icon-reg", shrink(img, 1040)), ("icon-sml", shrink(img, 520)), ("icon-xsml", shrink(img, 380))]
        else:
            img_versions = [("full", img), ("icon-reg", shrink(img, 400)), ("icon-sml", shrink(img, 300)), ("icon-xsml", shrink(img, 220))]

        new_path = export_path+"\\"+image_name

        try:
            os.mkdir(new_path)
        except:
            pass

        for img_ver in img_versions:

            new_name = new_path+"\\"+image_name+"-"+img_ver[0]
            img_ver[1].save(new_name + '.avif', 'avif', optimize=True, quality=45, exif=False)
            img_ver[1].save(new_name + '.webp', 'webp', optimize=True, quality=40)
            img_ver[1].save(new_name + '.jpg', 'jpeg', optimize=True, quality=35)

resize() 