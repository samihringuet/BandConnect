import { Form } from "react-router-dom";

export default function EditAnnounce() {
  return (
    <div className="AddAnnounceBackground">
      <div className="EditAnnounce">
        <h1 className="thetitle">
          <span>Band</span>⚡Connect
        </h1>
        <div className="EditAnnounce_Form">
          <Form className="EditAnnounce_Form2" method="put">
            <div className="blocmodify">
              <h2 className="modifyannounce">Modifie ton Annonce</h2>
              <label htmlFor="search_title">Titre de la recherche </label>
              <input
                id="EditAnnounce_search_title"
                name="search_title"
                type="text"
              />
              <label htmlFor="instrument">Instrument</label>
              <input
                id="EditAnnounce_instrument"
                name="instrument"
                type="text"
              />
              <label htmlFor="location">Localisation </label>
              <input id="EditAnnounce_location" name="location" />
              <label htmlFor="description">Description </label>
              <textarea id="EditAnnounce_description" name="description" />
              <label htmlFor="name">Nom </label>
              <input id="EditAnnounce_name" name="name" type="text" />
              <label htmlFor="image">The band</label>
              <input
                id="image"
                name="image"
                type="file"
                accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
              />
            </div>

            <button className="validerlannonce2" type="submit">
              Mettre à jour
            </button>
          </Form>
          <Form method="delete">
            <button className="supprannounce" type="submit">
              {" "}
              Supprimer l'annonce
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
