import { profilePageStyles } from "./Profile.styles";
import { useNavigate } from "react-router-dom";

import ProfileFirstSection from "@/components/ui/ProfileElements/ProfileFirstSection/FirstSection";
import ProfileSecondSection from "@/components/ui/ProfileElements/ProfileSecondSection/SecondSection";
import { useContext, useEffect } from "react";
import { Context } from "@/contextProvider";
const Profile = () => {
  const { store } = useContext(Context);
  const auth = store.getData().isAuth;
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/signin");
      return;
    }
  }, []);
  return (
    <div className={profilePageStyles.profilePage}>
      <ProfileFirstSection />
      <ProfileSecondSection />
    </div>
  );
};

export default Profile;
