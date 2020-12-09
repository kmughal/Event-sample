import coordinatorValidators from "../validators/coordinatorValidators";

export default function Coordinator({ responsibles, addValidator, addValues }) {
  let responsiblesOpts = null;
  const [selectedResponsible, setSelectedResponsible] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const { emailRef, responsibleRef, isEmailProvided } = coordinatorValidators({
    addValidator,
    addValues,
  });

  responsibles &&
    (responsiblesOpts = [{ id: -1, name: "select responsible" }]
      .concat(responsibles)
      .map((v) => (
        <option key={v.id} value={v.id}>
          {v.name} {v.lastname}
        </option>
      )));

  const responsibleChangeHandler = (e) => {
    const selectedItem = +e.target.value;
    const lookup = responsibles.find((f) => f.id === selectedItem);
    setSelectedResponsible(lookup);
    setEmail(lookup.email);
  };
  return (
    <section>
      <h2>Coordinator</h2>

      <div className="field-container">
        <label htmlFor="responsible">Responsible</label>
        <select
          id="responsible"
          name="responsible"
          onChange={responsibleChangeHandler}
          ref={responsibleRef}
          required
        >
          {responsiblesOpts}
        </select>
        {!isEmailProvided && (
          <div className="field-container error-content">
            Please select a coordinator!
          </div>
        )}
      </div>

      <div className="field-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          ref={emailRef}
          onChange={(e) => {}}
        />
      </div>
    </section>
  );
}
