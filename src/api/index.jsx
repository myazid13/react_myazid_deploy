import { baseAPI, uploaderAPI } from "../config/apiService";
export const api = {
  // API Auth

  // API User
  getUsers: () => {
    return baseAPI.get(`/users`);
  },
  getUserById: (id) => {
    return baseAPI.get(`/users/${id}`);
  },

  //   API Biodata
  getBiodata: () => {
    return baseAPI.get(`/biodata`);
  },
  getBiodataById: (id) => {
    return baseAPI.get(`/biodata/${id}`);
  },
  createBiodata: (body) => {
    return baseAPI.post(`/biodata`, body);
  },
  updateBiodata: (id, body) => {
    return baseAPI.put(`/biodata/${id}`, body);
  },
  deleteBiodata: (id) => {
    return baseAPI.delete(`/biodata/${id}`);
  },
  // Image Uploader
  uploader: (body) => {
    return uploaderAPI.post("/u4vujhej/image/upload", body);
  },
};
