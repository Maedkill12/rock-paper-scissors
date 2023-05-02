interface CardProps {
  extraStyle: string;
  icon: string;
}

const Card = ({ extraStyle, icon }: CardProps) => {
  return (
    <div
      className={`w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] rounded-full relative z-10 cursor-pointer  p-6 ${extraStyle}`}
    >
      <div className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-inner shadow-gray-400">
        <img src={icon} className="object-cover" />
      </div>
    </div>
  );
};

export default Card;
