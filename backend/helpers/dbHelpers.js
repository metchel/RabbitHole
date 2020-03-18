module.exports = knex => {
  const getUsers = () => {
    return knex.select("*").from("users");
  };

  const getQuotesForUser = id => {
    return knex
      .select("*")
      .from("users")
      .innerJoin("quotes", "users.id", "quotes.user_id")
      .where("users.id", "=", id);
  };

  const registerUser = function (email, username, password) {
    return knex("users")
    .insert({email: email, user_name: username, password: password})
    .returning("*")
    .then(res => res[0])
    // will return the id for login / cookie session 
  }

  return {
    getUsers,
    getQuotesForUser,
    registerUser
  };
};