import { parse } from 'date-fns';
import {
  TpsReport,
  TpsReportResponse,
  WorkItem,
  WorkItemResponse,
} from './types';

export const toWorkItem = (response: WorkItemResponse): WorkItem => {
  return {
    ...response,
    startDate: parse(response.startDate, 'yyyy-MM-dd', new Date()),
    endDate: parse(response.endDate, 'yyyy-MM-dd', new Date()),
  };
};

export const toTpsReport = (response: TpsReportResponse): TpsReport => {
  return {
    ...response,
    periodStart: parse(response.periodStart, 'yyyy-MM-dd', new Date()),
    periodEnd: parse(response.periodEnd, 'yyyy-MM-dd', new Date()),
    workItems: response.workItems.map(toWorkItem),
  };
};
