let appHeader = `
    <div id="header" class="hidden">

        <div class="border"></div>

        <a href="https://www.brynelle.com">
            <h1>Brynelle Photo</h1>
        </a>

        <div id="burger">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav id="links">
            <ul>
                <li>
                    <a href="https://www.brynelle.com/pricing">Pricing</a>
                </li>
                <li>
                    <a href="https://www.brynelle.com/travel">Travel</a>
                </li>
                <li class="gallery">
                    <a href="https://www.brynelle.com/gallery">Gallery</a>
                    <ul>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore?filterType="type"&filterSpecifier="weddings"'>Weddings</a>
                        </li>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore?filterType="type"&filterSpecifier="engagements"'>Engagements</a>
                        </li>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore?filterType="type"&filterSpecifier="bridals"'>Bridals</a>
                        </li>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore?filterType="type"&filterSpecifier="couples"'>Couples</a>
                        </li>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore?filterType="type"&filterSpecifier="couples"'>Families</a>
                        </li>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore?filterType="type"&filterSpecifier="portraits"'>Portraits</a>
                        </li>
                        <li>
                            <a href='https://www.brynelle.com/gallery/explore'>All</a>
                        </li>
                    </ul>
                </li>
                <!--<li class="events">
                    <a href="https://www.brynelle.com/events">Events</a>
                    <ul>
                        <li>
                            <a href="https://www.brynelle.com/events/mini_sessions">Mini Sessions</a>
                        </li>
                        <li>
                            <a href="https://www.brynelle.com/events/content_days">Content Days</a>
                        </li>
                        <li>
                            <a href="https://www.brynelle.com/events/content_retreats">Content Retreats</a>
                        </li>
                    </ul>
                </li>-->
                <!--<li>
                    <a href="https://www.brynelle.com/clients">Clients</a>
                </li>-->
                <li>
                    <a href="https://www.brynelle.com/about_me">About Me</a>
                </li>
                <li>
                    <a href="https://www.brynelle.com/info">Info</a>
                </li>
                <li>
                    <a href="https://www.brynelle.com/contact">Contact</a>
                </li>
            </ul>
        </nav>

    </div>
`;
document.getElementById("app-header").innerHTML = appHeader;
