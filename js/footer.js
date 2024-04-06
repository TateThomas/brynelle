let appFooter = `
    <div id="footer">
            <div id="style-guide">
                <div class="container">
                    <div class="booklet">
                        <a href="https://brynelle.com/style-guide.pdf"><div class="guide">
                            <div class="image">
                                <picture>
                                    <source type="image/avif" srcset="/images/gallery/124/124-full.avif">
                                    <source type="image/webp" srcset="/images/gallery/124/124-full.webp">
                                    <source type="image/jpg" srcset="/images/gallery/124/124-full.jpg">
                                    <img src="/images/gallery/124/124-full.webp" alt="Boy picking girl up bridal style and swinging her" loading="lazy">
                                </picture>
                            </div>
                            <div class="text">
                                <h4>The</h4>
                                <div class="line">
                                    <span></span>
                                    <h3>Style</h3>
                                </div>
                                <h4>Guide</h4>
                            </div>
                        </div></a>
                    </div>
                    <div class="link">
                        <a href="https://brynelle.com/style-guide.pdf"><p>Link</p></a>
                    </div>
                </div>
                <div class="copyright">
                    <p>© Brynelle Photo 2024</p>
                </div>
            </div>
            <div id="logo">
                <div class="container">
                    <a href="https://brynelle.com/"><div class="image">
                        <picture>
                            <source type="image/avif" srcset="/images/brynelle-photo-logo.avif">
                            <source type="image/webp" srcset="/images/brynelle-photo-logo.webp">
                            <source type="image/jpg" srcset="/images/brynelle-photo-logo.jpg">
                            <img src="/images/brynelle-photo-logo.webp" alt="Line art sun above the words Brynelle Photo">
                        </picture>
                    </div></a>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/brynelle.smith.7"><img src="/images/socials/facebook.png" alt="Brown Facebook logo"></a>
                        </li>
                        <li><a href="https://www.instagram.com/brynellephoto/"><img src="/images/socials/insta.png" alt="Brown Instagram logo"></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/brynellephoto/"><img src="/images/socials/pinterest.png" alt="Brown Pinterest Logo"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="nav">
                <ul>
                    <li>
                        <a href="https://brynelle.com/">
                            <h2>Home</h2>
                        </a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/pricing">
                            <h2>Pricing</h2>
                        </a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/travel">
                            <h2>Travel</h2>
                        </a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/gallery">
                            <h2>Gallery</h2>
                        </a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/about">
                            <h2>About</h2>
                        </a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/info">
                            <h2>Info</h2>
                        </a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/contact">
                            <h2>Contact</h2>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
`;


function footerFollow() {

    let myFooter = document.getElementsByTagName("footer")[0];
    let y = myFooter.getBoundingClientRect().y - window.innerHeight;

    if (y > 25) {
        myFooter.children[0].style.position = 'absolute';
        myFooter.children[0].style.bottom = 'var(--footer-height)';
    }
    else {
        myFooter.children[0].style.position = 'fixed';
        myFooter.children[0].style.bottom = '0';
    }

}


document.getElementsByTagName("footer")[0].innerHTML = appFooter;

window.addEventListener('scroll', function () {
    footerFollow();
});
