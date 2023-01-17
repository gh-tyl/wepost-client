import cryptoJs from "crypto-js";

export function enc(str) {
	return cryptoJs.AES.encrypt(str, process.env.REACT_APP_CRYPTOJS_SECRET_KEY).toString();
}

export function dec(str) {
	return cryptoJs.AES.decrypt(str, process.env.REACT_APP_CRYPTOJS_SECRET_KEY).toString(cryptoJs.enc.Utf8);
}
