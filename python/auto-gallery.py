
import torch
from PIL import Image, ExifTags, Image
import pillow_avif
import os 
from lavis.models import load_model_and_preprocess


def shrink(img, height):
    height_percent = (height / float(img.size[1]))
    width_size = int( float(img.size[0]) * float(height_percent) )
    return img.resize((width_size, height), Image.Resampling.LANCZOS)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model, vis_processors, _ = load_model_and_preprocess(
    name="blip_caption", model_type="base_coco", is_eval=True, device=device
)

print("Starting")

starting_path = r"C:\Users\tatet\Pictures\Brynelles Website\uncompressed"
export_path = r'C:\Users\tatet\Pictures\Brynelles Website\compressed'

image_name_list = os.listdir(starting_path)
starting_num = 339

photoshoot_name = input("What is the name for this photoshoot: ")
photoshoot_locations = []
location = input("What is the main location: ")
while location != "x":
    photoshoot_locations.append(location)
    location = input("Add another photoshoot location: ")
photoshoot_lighting = input("What is the photoshoot lighting: ")
photoshoot_type = input("What is the photoshoot type: ")

database_list = []

for i in range(len(image_name_list)):
    # img_path = r"C:\Users\tatet\Documents\coding-projects\Brynelle's Website\images\gallery\{}.jpg".format(i)

    image_name = image_name_list[i].split('.', 1)[0]
    img = Image.open(starting_path+"\\"+image_name_list[i])

    # raw_image = Image.open(img_path)
    image = vis_processors["eval"](img).unsqueeze(0).to(device)
    chosen_index = "r"
    while chosen_index == "r":
        desc_options = model.generate({"image": image, "prompt": "Write a romantic description of this image."}, use_nucleus_sampling = True, num_captions = 5)
        print(desc_options)
        chosen_index = input("Choose a description: ")

    if chosen_index == "x":
        img_desc = input("Write a description: ")
    else:
        while int(chosen_index) > len(desc_options):
            print("Index out of range")
            chosen_index = input("Choose a description: ")
        img_desc = desc_options[int(chosen_index)-1]

    
    exifstuff = img.getexif()
    date = exifstuff[ExifTags.Base.DateTime].replace(" ", ",").replace(":", ",")

    if int(image_name) in double_wide:
        print("double")
        img_versions = [("full", img), ("icon-reg", shrink(img, 720)), ("icon-sml", shrink(img, 520)), ("icon-xsml", shrink(img, 380))]
    elif int(image_name) in triple_wide:
        print("triple")
        img_versions = [("full", img), ("icon-reg", shrink(img, 1040)), ("icon-sml", shrink(img, 520)), ("icon-xsml", shrink(img, 380))]
    else:
        img_versions = [("full", img), ("icon-reg", shrink(img, 400)), ("icon-sml", shrink(img, 300)), ("icon-xsml", shrink(img, 220))]

    new_path = export_path+"\\"+str(starting_num+i)

    try:
        os.mkdir(new_path)
    except:
        pass

    for img_ver in img_versions:

        new_name = new_path+"\\"+str(starting_num+i)+"-"+img_ver[0]
        img_ver[1].save(new_name + '.avif', 'avif', optimize=True, quality=47, exif=False)
        img_ver[1].save(new_name + '.webp', 'webp', optimize=True, quality=50)
        img_ver[1].save(new_name + '.jpg', 'jpeg', optimize=True, quality=27)

    priority = input("What is the priority level: ")

    database_list_entry = ["/images/gallery/"+str(starting_num+i), date, photoshoot_name, img_desc, priority, photoshoot_type, photoshoot_locations, photoshoot_lighting]
    print(database_list_entry)
    database_list.append(database_list_entry)

print(database_list)
