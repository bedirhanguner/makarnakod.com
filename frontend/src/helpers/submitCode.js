import getBackendURL from './getURL';
/**
 * @param  {int} problemId Problem Id of the given code.
 * @param  {string} lang Selected language for the problem.
 * @param  {string} code User submitted code block.
 */
const submitCode = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      problemId: data.problemId,
      language: data.language,
      code: data.code,
    }),
    //include credentials for authentication
    credentials: "include",
  };
  return fetch(`${getBackendURL()}/submitCode`, requestOptions)
};

export default submitCode;
