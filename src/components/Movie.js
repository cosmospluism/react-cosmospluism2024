import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, coverImg }) {
  return (
    <div>
      <h4>
        <Link to="/movie">{title}</Link>
      </h4>
      <img src={coverImg} alt="title" />
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default Movie;
