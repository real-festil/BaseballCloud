import axios from "axios";

export default axios.create({
  baseURL: "https://baseballcloud-back.herokuapp.com/api/v1",
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "*" }
});
