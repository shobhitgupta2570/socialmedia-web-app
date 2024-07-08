import { Link, Navigate } from "react-router-dom";
import { Home } from '../features/home/Home'
import User from "../features/auth/components/User";

export default function HomePage() {
  return (
    <div>
      
      <Home></Home>
      <Link to="/userprofile">
        <button>Profile</button>
      </Link>

      <User></User>

    </div>
  )
}
