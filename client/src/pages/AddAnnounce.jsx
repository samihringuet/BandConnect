import { Form } from "react-router-dom";
import FormAnnounce from "../components/FormAnnounce";

function AddAnnounce() {
  return (
    <div className="AddAnnounceBackground">
      <div className="AddAnnounce">
        <h1 className="thetitle">
          <span>Band</span>⚡Connect
        </h1>
        <Form
          className="FormAnnounce"
          method="post"
          encType="multipart/form-data"
        >
          <FormAnnounce />
          <button className="validerlannonce" type="submit">
            Valider l'annonce
          </button>
        </Form>
      </div>
    </div>
  );
}
export default AddAnnounce;
