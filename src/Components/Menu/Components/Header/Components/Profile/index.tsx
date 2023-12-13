"use client";

import { LucideLogOut } from "lucide-react";

import useProfile from "./useProfile";
// import { useAuthContext } from "@/app/Context/AuthContext";

const Profile = () => {
  // const { user } = useAuthContext();
  const { handleLogout } = useProfile();

  return (
    <div className="flex items-center gap-x-4 text-white">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 uppercase">
        {/* {user?.name.substring(0, 1)} */}A
      </div>

      <LucideLogOut
        className="cursor-pointer transition-all hover:brightness-50"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Profile;
