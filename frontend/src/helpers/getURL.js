const getBackendURL = () => {
  let BACKEND_URL = "";
  switch (process.env.NODE_ENV) {
    case "development":
      BACKEND_URL = "http://localhost:8080";
      break;
    case "production":
      BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      break;
    default:
      BACKEND_URL = "http://localhost:8080";
      break;
  }
  return BACKEND_URL;
};

export default getBackendURL;
