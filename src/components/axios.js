import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/my-app-323be/us-central1/api", //cloud function API https://us-central1-challenge-4b2b2.cloudfunctions.net/api

  
});

export default instance;