import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import logo from '../assets/initech-logo.png';

const Masthead = styled.div`
  width: 100vw;
  height: 75px;
  padding: 0;

  background-color: rgb(109, 175, 175);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CompanyInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  align-items: center;
`;

const Logo = styled.img`
  display: inline;
  height: 100%;
  padding-right: 1rem;
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
        <div
          css={css`
            font-size: 2em;
            font-weight: bold;
          `}
        >
          INITECH
        </div>
      </CompanyInfo>
      {/* prettier-ignore */}
      <Nav>
        <Link to="/instructions">Instructions</Link> |
        <Link to="/tps-reports">TPS Reports</Link>
      </Nav>
    </Masthead>
  );
};
