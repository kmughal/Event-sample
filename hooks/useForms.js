import React from "react";
const useForms = () => {
  const [validators, setValidators] = React.useState([]);
  const [values, setValues] = React.useState([]);
  const [formValid, setFormValid] = React.useState(true);

  let temp1 = [];
  function addValidator(arr) {
    temp1 = temp1.concat(arr);
    setValidators(temp1);
  }

  let temp2 = [];
  function addValues(arr) {
    temp2 = temp2.concat(arr);
    setValues(temp2);
  }

  const validateForm = (event) => {
    let isFormValid = true;

    validators.forEach((validator) => {
      const fieldStateNotValid = !validator();
      if (fieldStateNotValid) isFormValid = false;
    });
    setFormValid(isFormValid);
    if (!isFormValid) return { isFormValid, formData: null };

    let formData = {};
    values.forEach((valueFn) => {
      const value = valueFn();
      formData = Object.assign({}, { ...value }, { ...formData });
    });
    return { isFormValid, formData };
  };

  return {
    addValues,
    addValidator,
    validateForm,
    isFormValid: formValid,
  };
};

export default useForms;
