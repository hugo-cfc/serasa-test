import { useRouter } from "next/navigation";

const useProfile = () => {
  const router = useRouter();

  const handleLogout = () => {
    // destroyCookie(null, "serasa-test.token");

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return { handleLogout };
};

export default useProfile;
