import { Container } from "reactstrap";
import Navbar from "./ADSidebar";
import Header from "./ADHeader";
import { useState } from "react";
import SideBar from "./Sidebar/SideBar";
import Topbar from "./Topbar";
const FullLayout = ({children}) => {

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  
  return (
    <main>
    <div className="pageWrapper Admin Wrapper d-lg-flex overflow-hidden">
      {/********Sidebar**********/}

      
          <SideBar  toggle={toggleSidebar} isOpen={sidebarIsOpen}/>
        
      

      {/********Content Area**********/}

      <div style={{ backgroundColor: '#cfdde3' }} className="contentArea">
        {/********header**********/}
       
          <Topbar toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}/>
        
        {/********Middle Content**********/}
        <Container className="p-4 wrapper" fluid>
        { children }
        </Container>
      </div>
    </div>
  </main>
  );
};

export default FullLayout;
