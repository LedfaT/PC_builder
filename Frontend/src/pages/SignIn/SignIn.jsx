import { signInPageStyles } from "./SignIn.styles";
import MainSection from "../../components/ui/SignInElements/SignInMainSection/MainSection";
import { ToastContainer } from "react-toastify";

const SignIn = () => {
  return (
    <div className={signInPageStyles.signInPage}>
      <ToastContainer
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
      />
      ;
      <MainSection />
    </div>
  );
};

export default SignIn;
