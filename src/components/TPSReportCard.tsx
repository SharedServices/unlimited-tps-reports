import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { format } from 'date-fns';

import { TpsReport } from '../apis/tps-reports/types';
import { Link } from 'react-router-dom';

const LabelValueRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 0.2rem;
  justify-items: start;
  font-size: 1.15rem;
`;

const DateRange = styled.span`
  display: grid;
  grid-template-columns: 1fr 20px 1fr;
  grid-gap: 0.3rem;
  justify-items: start;
  font-size: 1.15rem;
`;

interface TPSReportCardProps {
  report: TpsReport;
}

export const TPSReportCard: React.FC<TPSReportCardProps> = ({ report }) => {
  return (
    <div
      css={css`
        width: 50rem;
        padding: 1rem;
        margin-bottom: 1rem;
        color: black;
        background: #f5f5f5;
        border: 1px solid black;
        border-radius: 0.5rem;
      `}
    >
      <h1
        css={css`
          margin: 4px 0;
          font-size: 1.4rem;
        `}
      >
        <Link
          to={`${report.id}`}
          css={css`
            color: black;
          `}
        >
          {report.title}
        </Link>
      </h1>
      <section>
        <LabelValueRow>
          <span
            css={css`
              justify-self: end;
            `}
          >
            Period:
          </span>
          <DateRange>
            <span>{format(report.periodStart, 'MM/dd/yyyy')}</span>
            <span>to</span>
            <span>
              {report.periodEnd
                ? format(report.periodEnd, 'MM/dd/yyyy')
                : 'Present'}
            </span>
          </DateRange>
        </LabelValueRow>
        <LabelValueRow>
          <span
            css={css`
              justify-self: end;
            `}
          >
            User:
          </span>
          <span>{report.user}</span>
        </LabelValueRow>
        <LabelValueRow>
          <span
            css={css`
              justify-self: end;
            `}
          >
            Tickets:
          </span>
          <span>{report.workItems.length}</span>
        </LabelValueRow>
        <LabelValueRow>
          <span
            css={css`
              justify-self: end;
            `}
          >
            Hours:
          </span>
          <span>
            {report.workItems.reduce((p, n) => {
              return p + n.hours;
            }, 0)}
          </span>
        </LabelValueRow>
      </section>
    </div>
  );
};
