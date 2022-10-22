import { fetch } from '../Fetch';

const firefoxVersionsURL = 'https://product-details.mozilla.org/1.0/firefox_versions.json';

let version:any = null;

export async function fetchVersion ():Promise<Buffer> {
	if (!version || (version instanceof Error)) {
		version = await fetch(firefoxVersionsURL);
	}
	return version;
};
