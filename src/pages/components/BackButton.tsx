

// interface Props {
//   onClick: () => void;
// }

// export default function BackButton({
//   onClick,
// }: Props) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//       w-10
//       h-10
//       rounded-full
//       border
//       flex
//       items-center
//       justify-center
//       "
//     >
//       <h1>--</h1>
//     </button>
//   );
// }





interface Props {
  onClick: () => void;
}

export default function BackButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center"
    >
      <span className="text-2xl text-black">
        ←
      </span>
    </button>
  );
}