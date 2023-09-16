export const prePath = "/model_downloader_cn";

export class WebuiAPI {
  apiBase: string;

  constructor(apiBase: string) {
    this.apiBase = apiBase;
  }


  async getTasks() {
    const res = await fetch(`${this.apiBase}/download_tasks`);

    return await res.json();
  }

  async createTask() {
    //TODO
  }

  async getTask() {
    //TODO
  }
}
