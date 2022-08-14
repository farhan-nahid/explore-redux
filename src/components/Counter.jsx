import Button from "./Button";

export default function Counter({ item, handelIncrement, handelDecrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
        {item.count}
      </div>

      <div className="flex space-x-3">
        <Button handler={() => handelIncrement(item.id)} title="Increment" />
        <Button handler={() => handelDecrement(item.id)} title="Decrement" />
      </div>
    </div>
  );
}
