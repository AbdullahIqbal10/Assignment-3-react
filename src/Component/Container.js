import React from 'react'
import pic from '../asset/bg image.jpg'

function Container()
{
    return(
        <>
        <br/>
        <div className="container">
        <div className="row">
            <div className="col">
                <div className="content-left">
                    <h1>A Few Clicks</h1>
                    <h1>Is All It Takes!</h1>
                    <p>Transforming shopping into an experience.
                        The quality service you expect.. Happy shopping!</p>
                    <button className="explore-btn">Explore now</button>
                </div>
            </div>
            <div className="col">
                <div className="content-right">
                    <img className="img-fluid" src={pic} alt="bg-image"/>
                </div>
            </div>

        </div>
    </div>       
        </>
    );
}
export default Container;