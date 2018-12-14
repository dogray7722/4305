import React from 'react';

const Products = (props) => {

    return (
       
        <div className="section">
        <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">business</i></h2>
            <h5 className="center">Language for Business</h5>

            <p className="light">If you are learning a new language for work, Blabberly has you covered.  Learn the most relevant language phrases for negotiations, facilitating meetings, marketing, and many other common business conversational situations.  With a wide variety of industry-specific topics, Blabberly for Business will have you reaching that promotion in no time.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">school</i></h2>
            <h5 className="center">Language for School</h5>

            <p className="light">Rapidly improve your vocubulary, grammar, listening and pronunciation skills with Blabblerly for School.  With our patented AssureSmart technology we will find your current level with precision accuracy, and ease, and custom create a set of lessons based on the areas of your choice.  Ace the tests, and amaze your classNamemates and instructors!</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">flight_takeoff</i></h2>
            <h5 className="center">Language for Travel</h5>

            <p className="light">Are you traveling to a place where people speak a different language?  With Blabberly for Travel, you will be chatting with the locals in no time.  Blabberly uses the most relevant, up-to-date, and culturally specific conversational scenarios so you don't have to worry about learning vocabulary and phrases for a bygone era.  A little practice with our app will go a long, long way.  Bon voyage! </p>
          </div>
        </div>
      </div>
    </div>

    );
}

export default Products;