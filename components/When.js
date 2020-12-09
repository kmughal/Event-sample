export default function When({ addValidator, addValues }) {
  const dateRef = React.useRef(null);
  const timeRef = React.useRef(null);
  const startTimeRef = React.useRef(null);
  const durationRef = React.useRef(null);

  React.useEffect(() => {
    addValues([
      () => ({
        date:
          dateRef.current && timeRef.current
            ? new Date(`${dateRef.current?.value} ${timeRef.current?.value}`).toISOString()
            : null,
        startTimeR: startTimeRef.current.value,
        duration: durationRef.current.value,
      }),
    ]);
  }, []);

  return (
    <section>
      <h2>When</h2>

      <div className="field-container">
        <label htmlFor="start-on-date">Start On</label>
        <input
          type="date"
          id="start-on-date"
          name="start-on-date"
          required
          ref={dateRef}
        />
        <input
          type="time"
          id="start-on-time"
          name="start-on-date"
          ref={timeRef}
        />
        <div>
          <input
            type="radio"
            name="start-on-time__am-pm"
            value="AM"
            ref={startTimeRef}
          />{" "}
          AM
          <input
            type="radio"
            name="start-on-time__am-pm"
            value="PM"
            ref={startTimeRef}
          />{" "}
          PM
        </div>
      </div>

      <div className="field-container">
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" name="duration" ref={durationRef} />
      </div>
    </section>
  );
}
