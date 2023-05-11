const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  const methods = {method : "POST", headers: {"Content-type" : "application/json"}};
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", methods);
  const posts = await response.json();
  return posts;
}

module.exports = fnTest;