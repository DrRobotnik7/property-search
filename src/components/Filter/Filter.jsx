export default function Filter({ name, options, handleSelect }) {
  var camalize = function camalize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  };

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <select
        name={camalize(name)}
        id={name}
        key={name}
        onChange={handleSelect}
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
}
