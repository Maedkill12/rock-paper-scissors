interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-2xl sm:text-5xl font-semibold uppercase leading-5 sm:leading-9">
      {title}
    </h2>
  );
};

export default Title;
