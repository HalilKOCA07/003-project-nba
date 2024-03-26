import Header from "./components/header/Header";
import "./App.scss";
import PlayerNba from "./components/main/Main";
import Main from "./components/main/Main";
import { UseClickImage } from "./components/main/player";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <UseClickImage />
    </div>
  );
}

export default App;
