import http from 'http';
import https from 'https';

export async function fetch (urlString:string):Promise<Buffer|Error> {
	return new Promise((resolve, reject) => {
		const req = https.request(urlString, (res:http.IncomingMessage) => {
			const bufArr:Array<number> = [];
			res.on('data', (chunk:Buffer) => {
				chunk?.forEach((x:number) => {
					bufArr.push(x);
				});
			});
			res.on('end', () => {
				resolve(Buffer.from(bufArr));
			});
		});
		req.on('error', (err:Error) => {
			reject(err);
		});
		req.end();
	});
}
