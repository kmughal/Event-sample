import React from "react";

const aboutValidators = ({ addValidator, addValues }) => {
  const titleRef = React.useRef(null);
  const [isTitleValid, setTitleValid] = React.useState(true);

  const descriptionRef = React.useRef(null);
  const [isDescriptionValid, setDescriptionValid] = React.useState(true);

  const rewardRef = React.useRef(null);
  const paidEventRef = React.useRef(null);

  const [eventType, setEventType] = React.useState(null);
  const [feeValid, setFeeValid] = React.useState(true);
  const feeRef = React.useRef(null);

  React.useEffect(() => {
    addValidator([
      () => {
        if (!feeRef.current) return true;

        const isValid =
          feeRef.current && feeRef.current.value && +feeRef.current.value > 0;
        setFeeValid(isValid);
        return isValid;
      },
      () => {
        const isValid =
          titleRef.current &&
          titleRef.current.value &&
          titleRef.current.value.length > 0;

        setTitleValid(isValid);
        return isValid;
      },
      () => {
        const isValid =
          descriptionRef.current &&
          descriptionRef.current.value &&
          descriptionRef.current.value.length > 0;

        setDescriptionValid(isValid);
        return isValid;
      },
    ]);

    addValues([
      () => ({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        reward: rewardRef.current.value,
        paid_event: !!feeRef.current,
        event_fee: feeRef.current ? feeRef.current.value : null,
      }),
    ]);
  }, []);

  return {
    isTitleValid,
    isDescriptionValid,
    descriptionRef,
    titleRef,
    rewardRef,
    paidEventRef,
    feeValid,
    setFeeValid,
    eventType,
    setEventType,
    feeRef,
  };
};

export default aboutValidators;
