import { fetchVersion as fetchFirefoxVersion } from './Version';
import { appCodeName as AppCodeName } from './AppCodeName';
import { appVersion as AppVersion } from './AppVersion';
import { oscpu as OSCpu } from './OSCpu';
import { productSub as ProductSub } from './ProductSub';

import process from 'process';

process.env.FIREFOX_USER_AGENT = '';

export async function userAgent ():Promise<string|Error> {
	let firefoxVersionsResponse:any = null;
	let firefoxVersions:any = null;
	if (!firefoxVersionsResponse.length) {
		firefoxVersionsResponse = await fetchFirefoxVersion();
		firefoxVersions = JSON.parse(`${firefoxVersionsResponse}`);
	}
	const {
		LATEST_FIREFOX_RELEASED_DEVEL_VERSION
	}:any = firefoxVersions;
	return (process.env.FIREFOX_USER_AGENT = `${AppCodeName()}/${AppVersion()} (${OSCpu()}; rv:${LATEST_FIREFOX_RELEASED_DEVEL_VERSION}) Gecko/${ProductSub()} Firefox/${LATEST_FIREFOX_RELEASED_DEVEL_VERSION}`);
}
