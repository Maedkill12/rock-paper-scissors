import Points from "./Points";
import TitleContainer from "./TitleContainer";

const Header = () => {
  return (
    <header className="w-[250px] sm:w-[500px] border-2 border-gray-600 rounded-lg px-5 py-4 flex flex-row justify-between items-center">
      <TitleContainer />
      <Points points={0} />
    </header>
  );
};

export default Header;
