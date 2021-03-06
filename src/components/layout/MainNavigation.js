import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
          <li>
            <Link to="/deletemeetup">Delete Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
