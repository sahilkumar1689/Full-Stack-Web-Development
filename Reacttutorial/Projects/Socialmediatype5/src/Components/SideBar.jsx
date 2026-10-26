import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="SideBarContainer">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
          style={{ width: "280px", height: "100%" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi pe-none me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              {/* We use link tag with the "to" attributes instead of anchor tag with the "href" attributes.In order to navigate according to the router link without rerendring.*/}
              <Link
                to="/"
                className="nav-link"
                aria-current="page"
                style={{ color: "white" }}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create-Post" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create Post
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default SideBar;
