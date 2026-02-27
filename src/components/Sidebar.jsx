import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">WHMS</h2>

      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/animals">
          Animals
        </NavLink>

        <NavLink to="/breeding">
          Breeding
        </NavLink>

        <NavLink to="/feed">
          Feed
        </NavLink>

        <NavLink to="/vaccinations">
          Vaccinations
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
// This is the main navigation
// Activates route highlighting
// Scales when you add more modules later
