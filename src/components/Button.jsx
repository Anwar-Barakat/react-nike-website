export const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
      rounded-full flex items-center gap-3 justify-center px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? backgroundColor + textColor + borderColor
            : "bg-coral-red text-white"
        } ${fullWidth && "w-full"}
          
        `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt={label} className="rounded-full w-5 h-5" />
      )}
    </button>
  );
};
