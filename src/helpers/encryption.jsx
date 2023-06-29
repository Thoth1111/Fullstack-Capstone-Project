import CryptoJS from 'crypto-js';

export const encryptToken = (token) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, 'secret-key').toString();
  return encryptedToken;
};
