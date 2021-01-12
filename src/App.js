import Nav from "./components/Nav";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  useDarkMode();
  return (<div className="flex items-center justify-center min-h-screen dark:bg-black transition duration-500">
    <Nav/>
    <h1 className="text-blue-600 dark:text-white text-5xl">Tailwind DarkMode</h1>
  </div>
  );
}

export default App;
