import CryptoJS from 'crypto-js';

export const encryptToken = (token) => {
    const encryptedToken = CryptoJS.AES.encrypt(token, 'secret-key').toString();
    return encryptedToken;
};

export const decryptToken = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
        const decryptedToken = CryptoJS.AES.decrypt(token, 'secret-key').toString(CryptoJS.enc.Utf8);
        return decryptedToken;
    } 
    return null;
};