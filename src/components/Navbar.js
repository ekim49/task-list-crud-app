import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Navbar = () => {

  return (
    <NavContainer>
      <Link to="/"><h1>오늘 하루 📝</h1></Link>
    </NavContainer >
  );
}

export default Navbar;
