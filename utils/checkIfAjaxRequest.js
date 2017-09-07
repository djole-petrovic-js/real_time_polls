const checkIfAjaxRequest = (req) => {
  return req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') > -1);
}

module.exports = checkIfAjaxRequest;