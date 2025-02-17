import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <a class="navbar-brand"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               {/* <li class="nav-item"> */}
                {/* <Link to="/" class="nav-link active">
                  Nalanda Book Store
                </Link>  */}
                <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Nalanda Book
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/home" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/addBook" class="nav-link active" aria-current="page">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
