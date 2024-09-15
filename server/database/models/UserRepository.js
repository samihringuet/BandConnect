const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_type, mail, password, first_name, last_name, country, postal_code) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.user_type,
        user.mail,
        user.password,
        user.first_name,
        user.last_name,
        user.country,
        user.postal_code,
      ]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set user_type = ?, mail = ?, password = ?, first_name = ?, last_name = ?, country = ?, postal_code = ? where id = ?`,
      [
        user.user_type,
        user.mail,
        user.password,
        user.first_name,
        user.last_name,
        user.country,
        user.postal_code,
        user.id,
      ]
    );
    return result.affectedRows;
  }
}
module.exports = UserRepository;
