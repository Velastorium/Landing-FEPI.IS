import { Outlet } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";
import Footer from '../../Footer/Footer';

// Componente MainLayout
function MainLayout() {
  return (
    <>
      <Navbar />
      
      <main >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
