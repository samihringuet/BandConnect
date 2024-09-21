import { Form } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

function AddAnnounce() {
  return (
    <div className="AddAnnounce">
      <h1 className="thetitle">
        <span>Band</span>⚡Connect
      </h1>
      <Form className="FormAnnounce" method="post">
        <FormAnnounce />
        <h3 className="announcefinished">Votre annonce est terminé ?</h3>
        <button className="validerlannonce" type="submit">
          Valider l'annonce
        </button>
      </Form>
    </div>
  );
}
export default AddAnnounce;
