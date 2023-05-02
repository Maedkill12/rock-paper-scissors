import Container from "./components/Container";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen bg-blue-950 overflow-hidden">
      <div className="blue__gradient h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full absolute left-[50%] translate-x-[-50%] -top-[100px] sm:-top-[250px]" />
      <div className="h-[50px] w-[125px] absolute bottom-8 right-6 text-white">
        <button className="border-2 border-gray-400 px-8 w-full h-full rounded-lg">
          Rules
        </button>
      </div>
      <Container>
        <Header />
        <Game />
      </Container>
    </main>
  );
}

export default App;
