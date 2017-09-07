const saveSessionAndRedirect = (req,res,url) => {
  req.session.save((err) => {
    res.redirect(url);
  });
}

module.exports = saveSessionAndRedirect;