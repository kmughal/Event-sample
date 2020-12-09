import aboutValidators from "../validators/aboutValidators";
import Category from "./Category";

export default function About({ categories, addValidator, addValues }) {
  const {
    titleRef,
    descriptionRef,
    rewardRef,
    isTitleValid,
    isDescriptionValid,
   
    eventType,
    setEventType,
    feeValid,
    setFeeValid,
    feeRef
  } = aboutValidators({ addValidator, addValues });

  const paymentTypeHandler = (e) => {};
  const [descriptionText, setDescriptionText] = React.useState(null);
  const [showFee, setShowFee] = React.useState(false);
  const handlePaidEvent = (e) => {
    setShowFee(e.target.value === "paid event");
    setEventType(e.target.value);
  };

  return (
    <section>
      <h2>About</h2>

      <div className="field-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          ref={titleRef}
          placeholder="Make it short and clean"
        />
        {!isTitleValid && (
          <div className="field-container error-content">
            Plese select title!
          </div>
        )}
      </div>

      <div className="field-container">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          ref={descriptionRef}
          required
          maxLength="140"
          placeholder="Write about your event be creative."
          onChange={(e) => {
            setDescriptionText(e.target.value);
          }}
        ></textarea>
        {!isDescriptionValid && (
          <div className="field-container error-content">
            Please type description!
          </div>
        )}
      </div>

      {descriptionText && (
        <div className="description-text">
          {140 - descriptionText?.length}{" "}
          {descriptionText?.length > 0 && "characters remaining"}
        </div>
      )}

      <Category
        categories={categories}
        addValidator={addValidator}
        addValues={addValues}
      />

      <div className="field-container">
        <label htmlFor="payment">Payment</label>
        <div className="flex-3">
          <input
            type="radio"
            name="payment"
            value="free event"
            onClick={handlePaidEvent}
          />
          Free event
          <input
            type="radio"
            name="payment"
            value="paid event"
            onClick={handlePaidEvent}
          />
          Paid event
          {showFee && (
            <input
              type="number"
              ref={feeRef}
              id="fee"
              name="fee"
              placeholder="Fee"
              onChange={(e) => {
                setFeeValid(+e.target.value > 0);
              }}
            />
          )}
          {showFee && !feeValid && (
            <div className="field-container error-content">
              Please enter fee!
            </div>
          )}
        </div>
      </div>

      <div className="field-container">
        <label htmlFor="reward">Reward</label>
        <input
          type="number"
          name="reward"
          id="reward"
          ref={rewardRef}
          placeholder="Number"
        />
      </div>
    </section>
  );
}
