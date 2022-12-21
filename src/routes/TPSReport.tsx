import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { format, isValid } from 'date-fns';
import { css } from '@emotion/react';

import { fetchTpsReportById } from '../apis/tps-reports';
import { WorkItemStatus } from '../apis/tps-reports/types';

const pickStatusColor = (status: WorkItemStatus) => {
  switch (status) {
    case 'Complete':
      return 'green';
    case 'In Progress':
      return 'blue';
    case 'Not Started':
      return 'black';
    case 'Blocked':
      return 'red';
    default:
      return 'black';
  }
};

export const TPSReport = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery(['report', id], () =>
    fetchTpsReportById(Number(id))
  );

  if (!data) {
    return null;
  }

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{`${data?.title} (${format(
            data.periodStart,
            'MM/dd/yyyy'
          )} - ${format(data.periodEnd, 'MM/dd/yyyy')})`}</h1>
          <h2>Work Items</h2>
          <ul
            css={css`
              list-style: none;
              margin-left: 1rem;
              padding-left: 0;
            `}
          >
            {data.workItems.map(workItem => (
              <li key={workItem.id}>
                <div
                  css={css`
                    width: 800px;
                    padding: 1rem;
                    margin-bottom: 1rem;

                    background: #fff;
                    color: #000;
                    border: 1px solid #000;
                    border-radius: 0.5rem;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.3rem;
                      font-weight: bold;
                    `}
                  >
                    {workItem.title}
                  </span>
                  <div
                    css={css`
                      font-size: 1.1rem;
                    `}
                  >
                    {`(${format(workItem.startDate, 'MM/dd/yyyy')} - ${
                      isValid(workItem.endDate)
                        ? format(workItem.endDate, 'MM/dd/yyyy')
                        : 'Present'
                    })`}
                  </div>
                  <section
                    css={css`
                      padding-left: 1rem;
                    `}
                  >
                    <p
                      css={css`
                        font-size: 1.2rem;
                        font-style: italic;
                      `}
                    >
                      {workItem.description}
                    </p>
                    <p>
                      <span
                        css={css`
                          font-style: italic;
                          margin-right: 1rem;
                        `}
                      >
                        Status:
                      </span>
                      <span
                        css={css`
                          font-weight: bold;
                          color: ${pickStatusColor(workItem.status)};
                        `}
                      >
                        {workItem.status}
                      </span>
                    </p>
                    <p>
                      <span
                        css={css`
                          font-style: italic;
                          margin-right: 1rem;
                        `}
                      >
                        Hours:
                      </span>
                      <span
                        css={css`
                          font-weight: bold;
                        `}
                      >
                        {workItem.hours}
                      </span>
                    </p>
                  </section>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};
