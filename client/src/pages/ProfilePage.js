import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext.js";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage.js";
import AccountNav from "../components/AccountNav.js";

export default function ProfilePage() {
  const { ready, setReady, user, setUser } = useContext(UserContext);
  const [toHomepage, setToHomepage] = useState(null);
  console.log(ready, user);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setReady(false);
    setToHomepage("/");
  }
  if (toHomepage) {
    return <Navigate to={toHomepage} />;
  }

  // if (!ready && !user) {
  // return <Navigate to={"/login"} />;
  // }
  // if (!ready) {
  // return "Loading...";
  // }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
