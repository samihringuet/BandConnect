export default function FormAnnounce() {
  return (
    <div className="FormAnnounces">
      <h2 className="createannounce">Créer une Annonce</h2>
      <label htmlFor="search_title">Titre de la recherche </label>
      <input name="search_title" type="text" required />
      <label htmlFor="user_type">Type d'utilisateur </label>
      <select name="user_type" required>
        <option value="musicien">Musicien</option>
        <option value="groupe">Groupe</option>
      </select>
      <label htmlFor="instrument">Instrument </label>
      <input name="instrument" type="text" required />
      <label htmlFor="location">Localisation </label>
      <input name="location" type="text" required />
      <label htmlFor="description">Description </label>
      <textarea name="description" required />
      <label htmlFor="name">Nom </label>
      <input name="name" type="text" required />
    </div>
  );
}
