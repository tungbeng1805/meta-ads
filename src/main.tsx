import { createRoot } from "react-dom/client";
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <div>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </div>
);
