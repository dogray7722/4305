import React from 'react';
import { Parallax } from 'react-materialize';
import businessman1 from '../images/businessman1.png'
import student1 from '../images/student1.png'
import traveller1 from '../images/traveller1.png'

const Testimonials = (props) => {

    return (
       
    <div>
        <div className="section testimonials">
            <div className="row">
                <div className="col s2 offset-s2">
                    <div className="card-panel yellow lighten-2">
                        <div className="col s8 card-image">
                            <img src={businessman1} className="responsive-img circle"></img>
                        </div>
                        <div className="card-content">
                            <p>Blabberly for Business is one of the main reasons I was chosen to lead our overseas office.</p>
                            <h6>--Daan Rotterdam, Holland</h6>
                        </div>
                    </div>
                </div>

                <div className="col s2 offset-s1 push">
            <div class="card-panel light-blue darken-4">
              <div className="col s8 card-image">
                <img src={student1} className="responsive-img circle"></img>
              </div>
              <div className="card-content white-text">
                  <p>My test scores used to be very low, but after Blabberly for School, now I'm head of the class!</p>
                  <h6>--Anna Cartagena, Colombia</h6>
              </div>
            </div>
          </div>
            <div className="col s2 offset-s1">
                <div className="card-panel yellow lighten-2">
                  <div className="col s8 card-image">
                    <img src={traveller1} className="responsive-img circle"></img>
                  </div>
                  <div className="card-content">
                    <p>Now that I can chat with the locals, my vacation experiences are so much richer!  Thanks Blabberly!</p>  
                    <h6>--Heather Chicago, USA</h6>
                  </div>
                </div>
              </div>
        </div>
        </div>
    </div>

    );
}

export default Testimonials;