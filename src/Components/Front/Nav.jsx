import { NavLink } from "react-router-dom";

function FrontNav() {
  return (
    <>
      <div className="container header">
        <div className="row">
          <div className="col-12">
            <nav className="nav">
              {/* <NavLink
                to="/story/"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#10984d",
                      }
                    : null
                }
              >
                Add New Story
              </NavLink> */}
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#10984d",
                      }
                    : null
                }
              >
                Pagrindinis
              </NavLink>

              <NavLink
                to="/login"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#10984d",
                      }
                    : null
                }
              >
                log out
              </NavLink>
              <NavLink
                to="/admin"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#10984d",
                      }
                    : null
                }
              >
                Admin
              </NavLink>
              {/* <NavLink
                to="/admin/"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#10984d",
                      }
                    : null
                }
              >
                Admin
              </NavLink> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontNav;
