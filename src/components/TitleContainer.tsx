import Title from "./Title";

const TitleContainer = () => {
  return (
    <div className="flex flex-col">
      <Title title="Rock" />
      <Title title="Paper" />
      <Title title="Scissors" />
    </div>
  );
};

export default TitleContainer;
