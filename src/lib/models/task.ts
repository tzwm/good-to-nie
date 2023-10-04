export interface TaskModel {
  id: string;
  modelType: string;
  filename: string;
  downloadUrl: string;
  md5: string;
  ref: string;
  status: string;
  statusText: string;
  output: string;
}

export enum TASK_STATUS {
  Downloading = 'downloading',
  Success = 'success',
  Failure = 'failure',
}
