import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg }) {
  return (
    <div>
      <h4>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h4>
      <img src={coverImg} alt="title" />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default Movie;
