import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "next/link"
// import './Sidebar/style.css'

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button style={{minWidth:'10px' }}  color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
        {/* Toggle */}
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button style={{minWidth:'25px'}} color="info">

            <NavLink  style={{color:'white'}} tag={Link} to={"/page-1"}>
              <strong> Loguot </strong>   
            </NavLink>

            </Button>
          </NavItem>
    
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
