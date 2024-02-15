export default function Button({ url, children }) {
  return (
    <button className="btn bg-blue-950" href={url}>
      {children}
    </button>
  );
}
