import axios from 'axios';

export default class BaseHttpService {
  client;

  constructor() {
    this.client = axios.create({
      baseURL: "https://pixabay.com/api/",
    });
  }
  get = async (url, config = {}) => {
    
  }
  post = async (url, data, config) => {
    
  }
}