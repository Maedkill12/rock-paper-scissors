interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={`min-h-screen w-[75%] sm:w-[600px] md:w-[720px] lg:w-[960px] text-white mx-auto flex flex-col items-center justify-center relative z-10`}
    >
      {children}
    </div>
  );
};

export default Container;
