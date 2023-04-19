const emailInput: string = 'storrerrenan@gmail.com';

const validateEmailFormat = (param: string) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput));
