import { fetchWrapper } from "@/services/fetchWrapper";

interface PostLoginData {
  email: string;
  password: string;
}

const postLogin = async (data: PostLoginData) => {
  const res = await fetchWrapper<{ token: string }>("/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  });

  return res;
};

export default postLogin;
