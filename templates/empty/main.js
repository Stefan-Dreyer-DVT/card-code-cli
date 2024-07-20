// This function runs before a transaction.
const beforeTransaction = async (authorization) => {
  // console.log(authorization);
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';

  const response = await fetch(apiEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();
  console.log(json)
  if (json.UserId === 1) {
    return true;
  } else {
    return false;
  }
};
// This function runs after a transaction was successful.
const afterTransaction = async (transaction) => {
  console.log(transaction);
};
// This function runs after a transaction was declined.
const afterDecline = async (transaction) => {
  console.log(transaction);
};
