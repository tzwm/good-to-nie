import { WebuiAPI } from "$lib/webuiApi";

export const prerender = true;

export function load({ url }) {
  const path = url.href;
  const basePath = path.substring(0, path.lastIndexOf('/'));
  //const basePath = `${url.origin}${prePath}`;
  const inWebui = url.searchParams.get('inwebui') === 'true';

  return {
    basePath: basePath,
    inWebui: inWebui,
    webuiAPIClient: inWebui ? new WebuiAPI(basePath) : null,
  }
}
