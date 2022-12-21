import { useQuery } from 'react-query';
import { css } from '@emotion/react';

import { fetchTpsReports } from '../apis/tps-reports';
import { TPSReportCard } from '../components/TPSReportCard';

export const TPSReportList = () => {
  const reportsQuery = useQuery('reports', fetchTpsReports);

  return (
    <div>
      <h1>TPS Reports</h1>
      {reportsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul
          css={css`
            list-style: none;
          `}
        >
          {reportsQuery.data?.map(report => (
            <li key={report.id}>
              <TPSReportCard report={report} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
