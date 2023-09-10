export const prePath = "/model_downloader_cn";

export class WebuiAPI {
  apiBase: string;

  constructor(apiBase: string) {
    this.apiBase = apiBase;
  }

  async ping() {
    const res = await fetch(`${this.apiBase}/ping`);

    return await res.json();
  }
}
