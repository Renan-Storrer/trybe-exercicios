"use strict";
const emailInput = 'storrerrenan@gmail.com';
const validateEmailFormat = (param) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
