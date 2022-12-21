import ky from 'ky';
import { toTpsReport } from './mappers';
import { TpsReport, TpsReportResponse } from './types';

export const fetchTpsReports = async (): Promise<Array<TpsReport>> => {
  const response = await ky
    .get('http://localhost:3001/tpsreports')
    .json<Array<TpsReportResponse>>();

  return response.map(toTpsReport);
};

export const fetchTpsReportById = async (id: number): Promise<TpsReport> => {
  const response = await ky
    .get(`http://localhost:3001/tpsreports/${id}`)
    .json<TpsReportResponse>();

  return toTpsReport(response);
};
