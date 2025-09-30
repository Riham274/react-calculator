type ButtonProps = {
  onClick: () => void;
  color: string;
  name: string;
};

function Button({ onClick, color, name }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 ${color} text-white rounded-xl transition font-semibold`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
