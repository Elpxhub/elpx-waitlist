
const variantStyles = {
  primary: 'bg-green-600 hover:bg-green-700 text-white border border-transparent',
  secondary: 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300',
  outline: 'bg-transparent hover:bg-green-50 text-green-600 border border-green-600',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-transparent',
};

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
}) {
  const variantClass = variantStyles[variant] || variantStyles['primary'];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium py-[11px] px-[22px] rounded-md shadow-md transition-all duration-200 ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}
