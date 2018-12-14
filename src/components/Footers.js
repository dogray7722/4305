import React from 'react';
const Footers = (props) => {

    return (

<footer className="page-footer grey lighten-1">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About Us</h5>
          <p className="grey-text text-lighten-4">At Blabberly our objective is to make language learning fun, relevant, and easy in order to help bring people closer together.  We are always adding new content, and refining our curriculum for an unparralleled experience.  Join now, and open a new doorway to your world!</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li><a className="white-text" href="#!">Support</a></li>
            <li><a className="white-text" href="#!">Investor Relations</a></li>
            <li><a className="white-text" href="#!">Contact</a></li>
            <li><a className="white-text" href="#!">Blog</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Follow Us</h5>
          <ul className="follow">
            <li className="left"><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li className="left"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li className="left"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            <li className="left"><a href="https://www.snapchat.com/"><i className="fab fa-snapchat-ghost"></i></a></li>
            <li className="left"><a href="https://www.linkedin.com/in/david-gray-5313a433/"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <br /><br />
        <div className="col l3 s12">
          <h6><a className="white-text" href="#!">Start your 30-day free trial now!</a></h6>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Powered by <a className="yellow-text text-lighten-3" href="#">DG Enterprise Applications</a>
      </div>
    </div>
  </footer>

      );
}

export default Footers;

