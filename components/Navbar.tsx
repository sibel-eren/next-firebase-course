import Link from "next/link";
import styles from "../styles/globals.css";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";

const Navbar: FC<> = () => {
  const { user, username } = useContext(UserContext);

  // Sign out
  const signOutUser = async () => {
    await signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("There was an error signing out");
      });
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "/hacker.png"} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <button onClick={signOutUser}>Log Out</button>
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
