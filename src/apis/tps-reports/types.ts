export type WorkItemStatus =
  | 'Complete'
  | 'In Progress'
  | 'Not Started'
  | 'Blocked';

export type WorkItemResponse = {
  id: number;
  title: string;
  description: string;
  status: WorkItemStatus;
  startDate: string;
  endDate: string;
  hours: number;
};

export type TpsReportResponse = {
  id: number;
  title: string;
  user: string;
  periodStart: string;
  periodEnd: string;
  workItems: Array<WorkItemResponse>;
};

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  status: WorkItemStatus;
  startDate: Date;
  endDate: Date;
  hours: number;
};

export type TpsReport = {
  id: number;
  title: string;
  user: string;
  periodStart: Date;
  periodEnd: Date;
  workItems: Array<WorkItem>;
};
