import React from "react";
import "./Profile.css";
import PropTypes from "prop-types";
function Content(props) {
  return (
    <main>
      {props.children}
      <h1>{props.fullName}</h1>
      <p className="skills"> {props.profession}</p>
      <p className="skills">{props.bio}</p>
      <hr />
      <div className="social">
        <p>Facebook</p>
        <p>{props.facebook}</p>
      </div>
      <div className="social">
        <p>Twitter</p>
        <p>{props.twitter}</p>
      </div>
      <div className="social">
        <p>LinkedIn</p>
        <p>{props.linkedIn}</p>
      </div>

      <div className="a">A+</div>
    </main>
  );
}

Content.propTypes = {
  imgSrc: PropTypes.string,
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
};

Content.defaultProps = {
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0S_gVNq29H_aZIVLIhEXS46GtDRSYIhodQwgWCJw&s",
};

export default Content;
