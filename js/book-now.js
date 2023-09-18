let bookNow = `
            <div>
                <span></span>
                <div>
                    <h1>I can't wait to get to know you!</h1>
                    <p>lets talk more about your vision</p>
                </div>
                <a href="https://brynelle.com/contact">
                    <div>
                        <h2>Book Now</h2>
                    </div>
                </a>
            </div>
            
            <picture>
                <source type="image/avif" srcset="./images/goblin_valley_transition.avif">
                <source type="image/webp" srcset="./images/goblin_valley_transition.webp">
                <source type="image/jpg" srcset="./images/goblin_valley_transition.jpg">
                <img src="./images/goblin_valley_transition.webp" alt="Couple kissing in goblin valley" loading="lazy">
            </picture>
`;
document.getElementById("book-now").innerHTML = bookNow;
