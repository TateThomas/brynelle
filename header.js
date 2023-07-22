let appHeader = `
    <div class="border"></div>

    <a href="https://brynelle.com">
        <h1>Brynelle Photo</h1>
    </a>

    <nav id="links">

        <div id="burger">
            <span></span>
            <span></span>
        </div>

        <ul>
            <li class="pricing">
                <a href="https://brynelle.com/pricing">Pricing</a>
            </li>
            <li class="travel">
                <a href="https://brynelle.com/travel">Travel</a>
            </li>
            <li class="gallery">
                <a href="https://brynelle.com/gallery">Gallery</a>
                <ul>
                    <li>
                        <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="weddings"'>Weddings</a>
                    </li>
                    <li>
                        <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="engagements"'>Engagements</a>
                    </li>
                    <li>
                        <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="bridals"'>Bridals</a>
                    </li>
                    <li>
                        <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="couples"'>Couples</a>
                    </li>
                    <li>
                        <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="families"'>Families</a>
                    </li>
                    <li>
                        <a href='https://brynelle.com/gallery/explore?filterType="type"&filterSpecifier="portraits"'>Portraits</a>
                    </li>
                    <li>
                        <a href='https://brynelle.com/gallery/explore'>All</a>
                    </li>
                </ul>
            </li>
            <!--<li class="events">
                <a href="https://brynelle.com/events">Events</a>
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
                <a href="https://brynelle.com/clients">Clients</a>
            </li>-->
            <li class="about-me">
                <a href="https://brynelle.com/about_me">About Me</a>
            </li>
            <li class="info">
                <a href="https://brynelle.com/info">Info</a>
            </li>
            <li class="contact">
                <a href="https://brynelle.com/contact">Contact</a>
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

document.getElementById("burger").addEventListener('click', function() {
   burgerClick(); 
});
