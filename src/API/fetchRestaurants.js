import axios from "axios";
export const FetchRestaurants = axios.create({
  baseURL: "https://smarty.kerzz.com:4004/api/mock",
  headers: {
    "Content-Type": "application/json",
    apiKey: "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2",
  },
});
