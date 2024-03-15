  import Navbar from '../../components/dashboard/navbar/Navbar'
  import Menu from '../../components/dashboard/menu/Menu'
  import Footer from '../../components/dashboard/footer/Footer'
import { Outlet } from 'react-router-dom';
import "../../styles/global.scss";
  const DashboardLayout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
             <div className="contentContainer">
              <Outlet />
          </div> 
        </div>
        <Footer />
      </div>
    );
  };
  export default DashboardLayout