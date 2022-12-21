import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { css } from '@emotion/react';

import { SiteNav } from '../components/SiteNav';

const queryClient = new QueryClient();

export const Root: React.FC<unknown> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        css={css`
          width: 100vw;
          width: 100vh;
          display: grid;
          grid-template-rows: auto 1fr;
        `}
      >
        <SiteNav />
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            padding: 0 1rem;
          `}
        >
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};
