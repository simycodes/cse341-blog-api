const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'cse341 Blog API',
    description: 'This is a documentation for the Blog API'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

// localhost:3000
// schemes: ['http']

// host: 'cse341-assignment-services.onrender.com',
// schemes: ['https']

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
