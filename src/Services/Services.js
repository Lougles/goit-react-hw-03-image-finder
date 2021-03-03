import axios from 'axios';
import BaseHttpService from './base-hhtp.service';

export default class ProductService extends BaseHttpService { 
  client; 

  constructor() {
    this.client = axios.create({
      baseURL: "https://pixabay.com/api/",
    });
  }

  searchPicture = (query) => {
    return this.client.get(`products${query}`)
  }

}