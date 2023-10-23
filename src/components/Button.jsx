export const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center gap-3 justify-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <img src={iconURL} alt={label} className="rounded-full w-5 h-5" />
    </button>
  );
};
