function SideBar({ sideBarState, sideBarStateHandler }) {
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
            <li
              className="nav-item"
              onClick={() => {
                sideBarStateHandler("Home");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  sideBarState == "Home" ? "active" : null
                }`}
                aria-current="page"
                style={{ color: "white" }}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Home
              </a>
            </li>
            <li
              onClick={() => {
                sideBarStateHandler("CreatePost");
              }}
            >
              <a
                href="#"
                className={`nav-link text-white ${
                  sideBarState == "CreatePost" ? "active" : null
                }`}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create Post
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default SideBar;
