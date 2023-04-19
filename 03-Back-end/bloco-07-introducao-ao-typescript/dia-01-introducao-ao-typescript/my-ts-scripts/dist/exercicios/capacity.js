"use strict";
const units2 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert2(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
