import styles from "../styles/globals.css";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Loader show />
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
}
