import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function AnnounceCard({ announce }) {
  return (
    <ul key={announce.id}>
      <h2>
        <Link to={`/announce/${announce.id}`}>{announce.search_title}</Link>
      </h2>
      <li>Vous êtes quoi au juste ? : {announce.user_type}</li>
      <li>Instrument joués: {announce.instrument}</li>
      <li>tu crêches ou ?: {announce.location}</li>
      <li>Racontes en plus hermano: {announce.description}</li>
      <li>Donne quand meme ton blase: {announce.name}</li>
    </ul>
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
