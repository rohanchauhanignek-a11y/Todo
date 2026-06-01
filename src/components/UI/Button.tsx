type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${className} cursor-pointer`}
    >
      {title}
    </button>
  );
}

export default Button;