import express, { request, response } from 'express';
import UsersController from '@controllers/UsersController';

const app = express();

app.get('/', (request, response) =>{
  return response.json({message: "Hello World!"});
})

app.listen(3333);