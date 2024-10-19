import Crypto from "crypto-js";

// // Encrypt
// var ciphertext = Crypto.DES.encrypt('vmymm messagemy messagemymm messagemy messagemymm messagemy message', '123').toString();

// console.log(ciphertext);
// // Decrypt
// var bytes  = Crypto.DES.decrypt(ciphertext, '123');
// var originalText = bytes.toString(Crypto.enc.Utf8);

// // console.log(originalText);


const covert = (mode, cryptoMode, plainText="", key="") => {
    let output="";
    if(cryptoMode==="aes"){
        if(mode==="enc")
            output = Crypto.AES.encrypt('my message', 'secret key 123').toString();
        else
            output = CryptoJS.AES.decrypt(cipherText, key).toString();

    }


    return output;
}

export default output;