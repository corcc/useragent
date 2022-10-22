import os from 'os';
export function oscpu () {
	return `${os.type()} ${os.machine()}`;
}
