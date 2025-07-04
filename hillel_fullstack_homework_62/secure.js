import jwt from 'jsonwebtoken';

console.log("secure. jwt");

const secretKey = 'theBiggestSecret';

const payloadPerson = {
  name: 'Robin Good',
  email: 'robingood@gmail.com',
  age: 33,
  pets: [
    {
      name: 'Bobin',
      type: 'Dog'
    },
    {
      name: 'Grim',
      type: 'Cat'
    }
  ]
}

const options = {
  // algorithm: 'RS256',
  expiresIn: '5s',
  // audience: 'localhost:3000',
  audience: 'myself'
}

const token = jwt.sign(payloadPerson, secretKey, options);
// const token = jwt.sign(payloadPerson, secretKey);
console.log('JWT:', token);

const timeFunction = {

}
const verifyOptions = {
  audience: 'myself'
}

try {
  const decodedToken = jwt.decode(token, secretKey, verifyOptions);
  console.log('Decoded JWT:', decodedToken);
} catch (error) {
  console.log('Error of decoding JWT:', error.name, error.message)
}


const justDecodedToken = jwt.decode(token);
console.log('Decoded despite signature:', justDecodedToken);

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  // .eyJuYW1lIjoiUm9iaW4gR29vZCIsImVtYWlsIjoicm9iaW5nb29kQGdtYWlsLmNvbSIsImFnZSI6MzMsInBldHMiOlt7Im5hbWUiOiJCb2JpbiIsInR5cGUiOiJEb2cifSx7Im5hbWUiOiJHcmltIiwidHlwZSI6IkNhdCJ9XSwiaWF0IjoxNzUxNTM4MDY0fQ
  // .AZTgbkB9eSMt8OFshUSWo1YXQqCyZgLKd4yd5MhwcKE