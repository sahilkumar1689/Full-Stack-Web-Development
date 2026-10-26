import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="py-4 my-4 footerdiv">
          <p style={{ color: "white" }}>
            © 2024 Company, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex footerlist">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaTwitter className="footerIcons" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaInstagram className="footerIcons"></FaInstagram>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaFacebook className="footerIcons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
