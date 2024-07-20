// This function runs during the card transaction authorization flow.
// It has a limited execution time, so keep any code short-running.
const beforeTransaction = async (authorization) => {
  console.log(authorization);

  const apiEndpoint = 'http://localhost:8080/card/auth';

  const response = await fetch(apiEndpoint, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response)
  const json = await response.json();
  if (json.args.foo) {
    return true;
  } else {
    return false;
  }
};
