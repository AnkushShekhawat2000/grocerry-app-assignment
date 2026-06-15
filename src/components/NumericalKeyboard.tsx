
interface Props {
  onKeyPress: (value: string) => void;
}

export default function NumericalKeyboard({
  onKeyPress,
}: Props) {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "0",
    "backspace",
  ];

  return (
    <div className="bg-white border-t">
      <div className="grid grid-cols-3">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() =>
              onKeyPress(key)
            }
            className="h-16 border flex items-center justify-center text-xl"
          >
            {key === "backspace"
              ? "⌫"
              : key}
          </button>
        ))}
      </div>
    </div>
  );
}