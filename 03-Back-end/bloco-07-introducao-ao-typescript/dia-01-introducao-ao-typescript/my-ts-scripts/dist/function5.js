"use strict";
const ageInput = 15;
const isOfLegalAge = (param) => {
    return !!param;
};
ageInput >= 18
    ? console.log(isOfLegalAge('true'))
    : console.log(isOfLegalAge(false));
