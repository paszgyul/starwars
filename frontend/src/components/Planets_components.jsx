import React from 'react';

function Planets(props){
    return(
        <div className="container-flex planetsbox">
            <div className="row p-0 m-0">
                <div className="col-2"></div>
                <div className="col-8">
                    <img src="coruscant.png" alt="Coruscant" className='w-100' />
                </div>
                <div className="col-2"></div>
            </div>
            {/* <div className="row p-0 m-0">
                <div className="col-12 gradient_white"></div>
            </div> */}
            <div className="row p-0 m-0">
                <div className="col-12 col-md-6">
                    <h2>
                        Coruscant
                    </h2>
                    <div className="quote">
                        The entire planet is one big city
                    </div>
                    <div className="quoteauthor">
                        Ric Olié
                    </div>
                    <h3>
                        Skyscrapper sprawls(p166)
                    </h3>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam, quidem cumque temporibus obcaecati quae, maxime, odio consequatur saepe ex iste asperiores? Atque nam ut maxime explicabo, voluptatem qui pariatur!
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="coruscant2.jpg" alt="" />
                </div>
            </div>
            <div className="row p-0 m-0">
                <div className="col-12 col-md-6">
                    <img src="coruscant3.jpeg" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h3>
                        Air traffic
                    </h3>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam, quidem cumque temporibus obcaecati quae, maxime, odio consequatur saepe ex iste asperiores? Atque nam ut maxime explicabo, voluptatem qui pariatur!
                    </div>
                </div>
            </div>
            <div className="row p-0 m-0">
                <div className="col-12 col-md-6">
                    <h3>
                        Monster rampage
                    </h3>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam, quidem cumque temporibus obcaecati quae, maxime, odio consequatur saepe ex iste asperiores? Atque nam ut maxime explicabo, voluptatem qui pariatur!
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="coruscant4.jpg" alt="" class="w-100" />
                </div>
            </div>
            <div className="row p-0 m-0">
                <div className="col-12 m-0 p-0">
                    <img src="coruscant1.png" alt="Coruscant" className='w-100' />
                </div>
            </div>
        </div>
    )

}

export default Planets;