import api from "../api";

export const getAllUsers = async () => {
  const res = await api.get(`/users`);
  return res.data;
};

export const PostUser = async (body) => {
  const res = await api.post("/users", body);
  return res.data;
};
