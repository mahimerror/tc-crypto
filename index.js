import Crypto from "crypto-js";

// // Encrypt
// var ciphertext = Crypto.DES.encrypt('vmymm messagemy messagemymm messagemy messagemymm messagemy message', '123').toString();

// console.log(ciphertext);
// // Decrypt
// var bytes  = Crypto.DES.decrypt(ciphertext, '123');
// var originalText = bytes.toString(Crypto.enc.Utf8);

// // console.log(originalText);


const encrypt = (mode, plainText="", key="") => {
    if(mode==="aes"){
        var ciphertext = Crypto.AES.encrypt('my message', 'secret key 123').toString();
    }


    return ciphertext;
}

export default encrypt;