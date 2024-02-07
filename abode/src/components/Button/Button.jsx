import "./Button.css";

export default function Button({ url, children }) {
  return (
    <button className="btn" href={url}>
      {children}
    </button>
  );
}
