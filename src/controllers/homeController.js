const getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

const getAboutMe = (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = { getHomePage, getAboutMe };
