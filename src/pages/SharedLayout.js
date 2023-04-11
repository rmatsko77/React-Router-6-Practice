import {Link, Outlet} from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
  <>
    <StyledNavbar />
    <Outlet />
    <footer>Made by Bobby</footer>
  </>
  );
};
export default SharedLayout;
