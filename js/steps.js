let steps = `
            <div class="image">
                <picture>
                    <source type="image/avif" srcset="./images/pricing/sun.avif">
                    <source type="image/webp" srcset="./images/pricing/sun.webp">
                    <source type="image/jpg" srcset="./images/pricing/sun.jpg">
                    <img src="./images/pricing/sun.webp" alt="Sun line art">
                </picture>
            </div>
            
            <div class="title">
                <h2>How it works</h2>
            </div>
            
            <div class="bar">
            
                <h2><i>1</i></h2>
                
                <h3><i>Fill out the booking inquiry below</i></h3>
                <p>i'll get back to you within 48 hours</p>
            
            </div>
            
            <div class="bar">
            
                <h2><i>2</i></h2>
                
                <h3><i>we'll talk more about your wedding / photoshoot</i></h3>
                <p>hour coverage, location, travel fees, outfits, etc.</p>
            
            </div>
            
            <div class="bar">
            
                <h2><i>3</i></h2>
                
                <h3><i>book your date</i></h3>
                <p>pay the 30% deposit, answer an optional questionnaire, and sign the contract</p>
            
            </div>
            
            <div class="bar">
            
                <h2><i>4</i></h2>
                
                <h3><i>wedding / photoshoot day</i></h3>
                <p>YAY! the most exciting day! don't stress, i'm here to hype you up and capture these priceless memories for you</p>
            
            </div>
            
            <div class="bar">
            
                <h2><i>5</i></h2>
                
                <h3><i>gallery delivered</i></h3>
                <p>wedding galleries will be delivered within 6 weeks. other sessions will be delivered in 2 weeks</p>
            
            </div>
            
            <div class="faq">
                <h2>questions?</h2>
                <a href="https://brynelle.com/info"><p>click for more info</p></a>
            </div>
`;
document.getElementById("steps").innerHTML = steps;
