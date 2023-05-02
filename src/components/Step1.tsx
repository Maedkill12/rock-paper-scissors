import bg from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import Card from "./Card";

const Step1 = () => {
  return (
    <div className="w-[500px] h-[500px] relative flex flex-row flex-wrap justify-around items-center">
      <img
        src={bg}
        className="w-[313] h-[278] object-cover absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
      />
      <Card icon={paper} extraStyle="bg-blue-400" />
      <Card icon={scissors} extraStyle="bg-yellow-400" />
      <Card icon={rock} extraStyle="bg-red-400" />
    </div>
  );
};
export default Step1;
