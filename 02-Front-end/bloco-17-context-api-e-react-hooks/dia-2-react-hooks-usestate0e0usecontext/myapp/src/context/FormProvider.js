// ./context/FormProvider.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';

function FormProvider({ children }) {
  const [data, setData] = useState([]);

  const addData = (personalInfo) => {
    setData(data.concat(personalInfo));
  };

  const contextValue = {
    data,
    setData,
    addData,
  };

  return (
    <FormContext.Provider value={ contextValue }>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormProvider;
