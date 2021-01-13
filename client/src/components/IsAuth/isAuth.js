// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res) {
  // If the user is logged in, continue with the request to the restricted route
  console.log("IsAuth req", req);

  if (req.user) {
    return true
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
