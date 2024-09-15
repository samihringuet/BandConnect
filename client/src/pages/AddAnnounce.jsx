import { Form } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

function AddAnnounce() {
  return (
    <div className="AddAnnounce">
      <Form className="FormAnnounce" method="post">
        <FormAnnounce />
        <h3>Votre annonce est terminé ?</h3>
        <button type="submit">Valider l'annonce</button>
      </Form>
    </div>
  );
}
export default AddAnnounce;
