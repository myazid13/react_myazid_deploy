import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://6430ebc93adb1596516265d4.mockapi.io",
});
export const uploaderAPI = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1",
});
