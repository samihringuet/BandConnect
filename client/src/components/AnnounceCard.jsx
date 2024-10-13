import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function AnnounceCard({ announce }) {
  return (
    <div className="cardannounce">
      <div className="cardannounce2" key={announce.id}>
        <h4 className="announcetitle">
          <Link className="titleannounce" to={`/announce/${announce.id}`}>
            {announce.search_title}
          </Link>
        </h4>
        <li>
          Tu es un AS en {announce.instrument} dans le secteur de{" "}
          {announce.location} !
        </li>
        <li>{announce.description}</li>
        <li>{announce.name} t 'attendent !</li>
        <img
          className="imageband"
          src={`${import.meta.env.VITE_API_URL}/uploads/${announce.image}`}
          alt={announce.name}
        />
      </div>
    </div>
  );
}

AnnounceCard.propTypes = {
  announce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    search_title: PropTypes.string.isRequired,
    instrument: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
