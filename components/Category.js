export default function Category({ categories, addValues, addValidators }) {
  const categoryRef = React.useRef(null);
  let categoriesOpts = null;
  
  categories &&
    (categoriesOpts = [{ id: -1, name: "select cateogory" }]
      .concat(categories)
      .map((v) => (
        <option key={v.id} value={v.id}>
          {v.name}
        </option>
      )));

  React.useEffect(() => {
    addValues([
      () => ({
        category_id: categoryRef.current.value,
      }),
    ]);
  }, []);

  return (
    <div className="field-container">
      <label htmlFor="category">Category</label>
      <select name="category" id="category" ref={categoryRef}>
        {categoriesOpts}
      </select>
    </div>
  );
}
