const generateError = (message,status = 500) => {
  const error = new Error();

  error.message = message;
  error.status = status;

  return error;
}

module.exports = generateError;