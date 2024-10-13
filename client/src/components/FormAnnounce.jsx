export default function FormAnnounce() {
  return (
    <div className="FormAnnounces">
      <h2 className="createannounce">Créer une Annonce</h2>
      <label htmlFor="search_title">Titre de la recherche </label>
      <input name="search_title" type="text" required />
      <label htmlFor="instrument">Instrument </label>
      <input name="instrument" type="text" required />
      <label htmlFor="location">Localisation </label>
      <input name="location" type="text" required />
      <label htmlFor="description">Description </label>
      <textarea name="description" required />
      <label htmlFor="name">Nom </label>
      <input name="name" type="text" required />
      <label htmlFor="image">the band</label>
      <input
        id="image"
        name="image"
        type="file"
        accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
      />
    </div>
  );
}
