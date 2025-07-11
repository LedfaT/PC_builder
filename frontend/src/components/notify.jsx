import { toast } from "react-toastify";

const notify = function (message, type = "success") {
  return toast(message, {
    position: "top-right",
    autoClose: 3000,
    type,
    hideProgressBar: true,
    closeOnClick: false,
    theme: "colored",
  });
};

export default notify;
