import axios from 'axios';

export default axios.create({
  // instance of client with a couple of default propertis.
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 62dc16e377d42105833aedadba103e7f69dcd7c15179be377ecfb200de4a1e6c'
  } 
})