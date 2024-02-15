export default function Filter({ name, options, handleSelect }) {
  var camalize = function camalize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  };

  return (
    <>
      <div className="ms-1">
        <label className="px-1 bg-secondary" htmlFor={name}>
          {name}{" "}
        </label>
        <select
          name={camalize(name)}
          id={name}
          key={name}
          onChange={handleSelect}
        >
          <option selected key={0} value="">
            --
          </option>
          {options.map((opt) => (
            <option key={opt.id} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
