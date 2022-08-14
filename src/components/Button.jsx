export default function Button({ handler, title }) {
  return (
    <button
      className={`${
        title === "Increment" ? "bg-indigo-400" : "bg-red-400"
      } text-white px-3 py-2 rounded shadow`}
      onClick={handler}
    >
      {title}
    </button>
  );
}
