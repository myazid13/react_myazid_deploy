import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/form">Form</Link>,
    key: "/form",
  },
  {
    label: <Link to="/portfolio">Portfolio</Link>,
    key: "/portfolio",
  },
  {
    label: <Link to="/about-me">About Me</Link>,
    key: "/about-me",
  },
  {
    label: <Link to="/crud">CRUD</Link>,
    key: "/crud",
  },
  {
    label: <Link to="/formhasura">FormHasura</Link>,
    key: "/formhasura",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];
