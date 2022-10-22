import { fetchVersion as fetchFirefoxVersion } from './Version';
import { appCodeName as AppCodeName } from './AppCodeName';
import { appVersion as AppVersion } from './AppVersion';
import { oscpu as OSCpu } from './OSCpu';
import { productSub as ProductSub } from './ProductSub';

export async function userAgent ():Promise<string|Error> {
	const firefoxVersionsResponse = await fetchFirefoxVersion();
	const firefoxVersions = JSON.parse(`${firefoxVersionsResponse}`);
	const {
		LATEST_FIREFOX_RELEASED_DEVEL_VERSION
	}:any = firefoxVersions;
	return `${AppCodeName()}/${AppVersion()} (${OSCpu()}; rv:${LATEST_FIREFOX_RELEASED_DEVEL_VERSION}) Gecko/${ProductSub()} Firefox/${LATEST_FIREFOX_RELEASED_DEVEL_VERSION}`;
}
