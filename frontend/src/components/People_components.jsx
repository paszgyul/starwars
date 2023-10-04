import React from 'react';

function People(props){

    return(
        <div className="container peoplebox">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="owenlars.png" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h2>
                        People
                    </h2>
                    <h3>
                        Owen Lars
                    </h3>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam, quidem cumque temporibus obcaecati quae, maxime, odio consequatur saepe ex iste asperiores? Atque nam ut maxime explicabo, voluptatem qui pariatur!
                    </div>
                </div>
            </div>
        </div>
    )

}

export default People;