import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "next/link";
// import styles from './styles.module.css';
import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebarAD", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Commerce Baba</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Admin Dashboard</p>
        <SubMenu title="Products"  items={submenus[0]} />
        {/* <NavItem>
          <NavLink tag={Link} to={"/about"}> 
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem> */}
        {/* <SubMenu title="Pages" items={submenus[1]} /> */}
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Add product",
      target: "productfeaturedtable",
    },

  ],
  // [
    // {
    //   title: "Page 1",
    //   target: "Page-1",
    // },
    // {
    //   title: "Page 2",
    //   target: "Page-2",
    // },
  // ],
];

export default SideBar;
