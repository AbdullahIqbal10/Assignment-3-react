import React from 'react'

function Card(props)
{
    return(
        <>
           <div className="card" >
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Pant</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="btn btn-primary">click here</a>
            </div>
        </div>
       
        </>
    );
}
export default  Card;
