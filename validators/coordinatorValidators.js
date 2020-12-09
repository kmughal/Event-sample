import React from "react";

const coordinatorValidators = ({ addValidator, addValues }) => {
  const [isEmailProvided, setIsEmailProvided] = React.useState(true);
  const responsibleRef = React.useRef(null);
  const emailRef = React.useRef(null);

  React.useEffect(() => {
    addValidator([
      () => {
        const isValid =
          emailRef.current &&
          emailRef.current.value &&
          emailRef.current.value.length > 0;

        setIsEmailProvided(isValid);
        return isValid;
      },
    ]);

    addValues([
      () => ({
        coordinator: {
          id: responsibleRef.current.value,
          email: emailRef.current.value,
        },
      }),
    ]);
  }, []);

  return {
    responsibleRef,
    emailRef,
    isEmailProvided,
  };
};

export default coordinatorValidators;
