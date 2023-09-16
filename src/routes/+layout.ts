import { WebuiAPI } from "$lib/webuiApi";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  const path = url.href;
  const basePath = path.substring(0, path.lastIndexOf('/'));
  //const basePath = `${url.origin}${prePath}`;
  const inWebui = url.searchParams.get('inwebui') === 'true';
  const debug = url.searchParams.get('debug') === 'true';

  let webuiAPIClient: WebuiAPI | null = null;
  if (inWebui) {
    webuiAPIClient = new WebuiAPI(basePath);
  } else {
    if (debug) {
      webuiAPIClient = new WebuiAPI('http://127.0.0.1:7860/model_downloader_cn/');
    }
  }

  return {
    basePath: basePath,
    debug: debug,
    inWebui: inWebui,
    webuiAPIClient: webuiAPIClient,
    searchParams: url.searchParams,
  }
}
