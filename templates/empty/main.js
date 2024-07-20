// This function runs before a transaction.
const beforeTransaction = async (authorization) => {
  console.log(authorization)
  try {
    const apiEndpoint = 'http://localhost:8080/auth';

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorization)
    });

    const json = await response.json();
    console.log("JSON:" + json)
  } catch (error) {
    console.log("ERROR:" + error)
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
