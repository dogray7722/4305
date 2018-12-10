import React from 'react';
import { Parallax } from 'react-materialize';
import prague from '../images/3621_prague.jpg'

const FeaturedPhoto = (props) => {

    return (
       
    <div>
        <Parallax imageSrc={prague}/>
            <div className="section white">
                <div className="row container">
                    <h2 className="header center">"Hands down, the best language learning software of 2018" --CNET</h2>
                </div>
            </div>
            <hr></hr>
    </div>

    );
}

export default FeaturedPhoto;