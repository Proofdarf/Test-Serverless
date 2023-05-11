/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/

const fetch = require('cross-fetch');


async function fnTest(id) {
    const methods = {method : "PUT", headers: {"Content-type" : "application/json"}}
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id, methods);
  return response;
}

module.exports = fnTest;
