const db = require("../data/dbConfig");
module.exports = {
  find,
  //   findById,
  //   findSteps,
  //   add,
  //   addStep,
  //   update,
  //   remove
};

function find() {
  return db("accounts");
}
