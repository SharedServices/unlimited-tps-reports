import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

import { SiteNav } from '../components/SiteNav';

export const Root: React.FC<unknown> = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <SiteNav />
      <div
        css={css`
          width: 100%;
          height: 100%;
          padding: 1rem;
        `}
      >
        <Outlet />
      </div>
    </div>
  );
};
