import { WebuiAPI, prePath } from "$lib/webuiApi";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
  const path = url.href;
  const lastSlashIndex = path.lastIndexOf('/');
  const basePath = path.substring(0, lastSlashIndex);
  const currentPath = path.substring(lastSlashIndex, path.indexOf('?'));
  let webuiAPIClient: WebuiAPI | null = null;
  let searchParams = '';

  if (typeof process === 'undefined') {
    if (url.searchParams.get('inwebui') === 'true') {
      webuiAPIClient = new WebuiAPI(basePath);
    }

    const debug = url.searchParams.get('debug');
    if (debug) {
      webuiAPIClient = new WebuiAPI('https://' + debug + prePath);
    }

    searchParams = url.searchParams.toString();
  }

  return {
    basePath,
    currentPath,
    searchParams,
    webuiAPIClient,
  }
}
