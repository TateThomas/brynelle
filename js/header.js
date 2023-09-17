let appHeader = `
    <div class="border"></div>

    <div class="title">
        <a href="https://brynelle.com">
            <h1>Brynelle Photo</h1>
        </a>
    </div>

    <nav id="links">

        <div id="burger">
            <span></span>
            <span></span>
        </div>

        <ul>
            <li class="pricing">
                <a href="https://brynelle.com/pricing"><h2>Pricing</h2></a>
            </li>
            <li class="travel">
                <a href="https://brynelle.com/travel"><h2>Travel</h2></a>
            </li>
            <li class="gallery">
                <a href="https://brynelle.com/gallery"><h2>Gallery</h2></a>
                <div class="container">
                    <ul>
                        <li>
                            <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="weddings"'><h3>Weddings</h3></a>
                        </li>
                        <li>
                            <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="engagements"'><h3>Engagements</h3></a>
                        </li>
                        <li>
                            <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="bridals"'><h3>Bridals</h3></a>
                        </li>
                        <li>
                            <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="couples"'><h3>Couples</h3></a>
                        </li>
                        <li>
                            <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="families"'><h3>Families</h3></a>
                        </li>
                        <li>
                            <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="portraits"'><h3>Portraits</h3></a>
                        </li>
                        <li>
                            <a href='https://brynelle.com/gallery/explore'><h3>All</h3></a>
                        </li>
                    </ul>
                </div>
            </li>
            <!--<li class="events">
                <a href="https://brynelle.com/events"><h2>Events</h2></a>
                <ul>
                    <li>
                        <a href="https://brynelle.com/events/mini_sessions">Mini Sessions</a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/events/content_days">Content Days</a>
                    </li>
                    <li>
                        <a href="https://brynelle.com/events/content_retreats">Content Retreats</a>
                    </li>
                </ul>
            </li>-->
            <!--<li>
                <a href="https://brynelle.com/clients"><h2>Clients</h2></a>
            </li>-->
            <li class="about-me">
                <a href="https://brynelle.com/about"><h2>About</h2></a>
            </li>
            <li class="info">
                <a href="https://brynelle.com/info"><h2>Info</h2></a>
            </li>
            <li class="contact">
                <a href="https://brynelle.com/contact"><h2>Contact</h2></a>
            </li>
        </ul>
    </nav>
`;
document.getElementById("header").innerHTML = appHeader;

function burgerClick() {

    let burger = document.getElementById("burger");
    let links = document.getElementById("links");
    if (burger.className == "show") {
        burger.className = "";
        links.className = "";
    }
    else {
        burger.className = "show";
        links.className = "show";
    }

}

document.getElementById("burger").addEventListener('click', function () {
    burgerClick();
});
