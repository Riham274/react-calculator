type ButtonProps = {
  onClick: () => void;
  color: string;
  name: string;
  extraClass?: string;
};

function Button({ onClick, color, name, extraClass }: ButtonProps) {
  return (
    <button
      className={`px-4 py-3 ${color} text-white rounded-xl font-semibold transition transform active:scale-95 ${extraClass}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
