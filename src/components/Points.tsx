interface PointsProps {
  points: number;
}

const Points = ({ points }: PointsProps) => {
  return (
    <div className="bg-white rounded-md w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] flex flex-col items-center justify-center">
      <p className="text-blue-600 font-semibold text-xs sm:text-base">SCORE</p>
      <p className="text-violet-900 font-bold text-3xl sm:text-5xl">{points}</p>
    </div>
  );
};

export default Points;
