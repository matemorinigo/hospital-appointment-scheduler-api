const crypto = require('crypto');


function base64url(input) {
    //First I convert the input string into a Buffer,
    //then convert the buffer into a base64 codified string
    //And I replace all the non-safe for url characters

    return Buffer.from(input)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}


function sign(payload, secret, options = {}) {
    const header = {
        alg: options.algorithm || 'HS256',
        typ: 'JWT'
    };

    //In options I use only the options.algorithm but it could
    //be implemented with a expiresIn property also

    //Codify the header and the payload into base64 url-safe
    const headerBase64 = base64url(Buffer.from(JSON.stringify(header)));
    const payloadBase64 = base64url(Buffer.from(JSON.stringify(payload)));

    //then I create the signature using crypto and HMAC using
    //the secret key
    //and I update the HMAC with the header and the payload
    const signatureBase64 = base64url(
        crypto
            .createHmac('sha256', secret)
            .update(`${headerBase64}.${payloadBase64}`)
            .digest()
    );

    return `${headerBase64}.${payloadBase64}.${signatureBase64}`;
}


function verify(token, secret) {
    const [headerBase64, payloadBase64, signatureBase64] = token.split('.');

    //To verify if the token is valid I create another signature with the header and the payload given
    //on the token
    const signatureCheck = base64url(
        crypto
            .createHmac('sha256', secret)
            .update(`${headerBase64}.${payloadBase64}`)
            .digest()
    );

    //If are the same signature, I return the payload
    if (signatureBase64 === signatureCheck) {
        return JSON.parse(Buffer.from(payloadBase64, 'base64').toString());
    } else {
        throw new Error('Invalid token signature');
    }
}

const token = sign({username: "hola"}, "ClaveSuperSecreta")

console.log(verify(token, "SuperSecretKey"))
console.log(verify("hello", "SuperSecretKey"))

module.exports = { sign, verify };
