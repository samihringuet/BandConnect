import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function AnnounceCard({ announce }) {
  return (
    <div className="cardannounce">
      <div className="cardannounce2" key={announce.id}>
        <h2 className="announcetitle">
          <Link to={`/announce/${announce.id}`}>{announce.search_title}</Link>
        </h2>
        <li>{announce.user_type}</li>
        <li>{announce.instrument}</li>
        <li>{announce.location}</li>
        <li>{announce.description}</li>
        <li>signé {announce.name}</li>
      </div>
    </div>
  );
}

AnnounceCard.propTypes = {
  announce: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      search_title: PropTypes.string.isRequired,
      user_type: PropTypes.string.isRequired,
      instrument: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
