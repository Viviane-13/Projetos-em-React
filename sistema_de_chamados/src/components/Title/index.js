import "./title.css";
export default function Title({ children, name }) {
  return (
    <div className="title">
      {children}
      <span>{name}</span>
    </div>
  );
}
