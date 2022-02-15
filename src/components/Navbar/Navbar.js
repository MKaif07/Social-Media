import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Kattsocial</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friends, post or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <div className="navbarLink">Homepage</div>
          <div className="navbarLink">Timeline</div>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="pp" className="navbarImg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
