const db = require("../data/dbConfig");
module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("accounts");
}

function findById(id) {
  return db("accounts").where({ id }).first();
}

function insert(account) {
  return db("accounts")
    .insert(account, "id")
    .then((ids) => ({ id: ids[0] }));
}

function update(account, id) {
  return db("accounts").where("id", Number(id)).update(account);
}

function remove(id) {
  return db("accounts").where("id", Number(id)).del();
}
