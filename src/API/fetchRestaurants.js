import axios from "axios";
export const FetchRestaurants = axios.create({
  // baseURL
  baseURL: "https://smarty.kerzz.com:4004/api/mock",
  // headers
  headers: {
    "Content-Type": "application/json",
    apiKey: "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2",
  },
});
export const fetchRes = async (
  skip,
  limit,
  latitude,
  longitude,
  setRestaurants
) => {
  // POST request
  const { data } = await FetchRestaurants.post("/getFeed", {
    // POST request body
    skip: skip,
    limit: limit,
    latitude: latitude,
    longitude: longitude,
  }).catch((err) => {
    console.log("Fetch API Error:", err.response.data);
  });
  // populate restaurants and set restaurants array
  setRestaurants(data.response);
};
