import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '../assets/initech-logo.png';

const Masthead = styled.div`
  width: 100%;
  height: 75px;
  padding: 0 0.8rem;

  background-color: rgb(109, 175, 175);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CompanyInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const Logo = styled.img`
  display: inline;
  height: 100%;
  margin-right: 1rem;
`;

const Nav = styled.nav`
  width: 100%;
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const SiteNav: React.FC<unknown> = () => {
  return (
    <Masthead>
      <CompanyInfo>
        <Logo src={logo} alt="Initech" />
        <h1>INITECH</h1>
      </CompanyInfo>
      {/* prettier-ignore */}
      <Nav>
        <Link to="/instructions">Instructions</Link> |
        <Link to="/tps-reports">TPS Report Builder</Link>
      </Nav>
    </Masthead>
  );
};
