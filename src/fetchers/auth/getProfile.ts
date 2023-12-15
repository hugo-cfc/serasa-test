import { fetchWrapper } from "@/services/fetchWrapper";

type User = {
  id: string;
  name: string;
  email: string;
};

const getProfile = async (id: string) => {
  const res = await fetchWrapper<User>(`/auth/profile/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export default getProfile;
