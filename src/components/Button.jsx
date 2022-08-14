export default function Button({ className, handler, title }) {
  return (
    <button className={className} onClick={handler}>
      {title}
    </button>
  );
}
