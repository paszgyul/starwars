import React from 'react';

function Species(props){
    return(
        <div className="container speciesbox">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2>
                        Species
                    </h2>
                    <h3>
                        Hoth
                    </h3>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam, quidem cumque temporibus obcaecati quae, maxime, odio consequatur saepe ex iste asperiores? Atque nam ut maxime explicabo, voluptatem qui pariatur!
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="hoth.png" alt="" />
                </div>
            </div>
        </div>
    )

}

export default Species;