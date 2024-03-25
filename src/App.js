import Header from "./components/header/Header";
import "./App.scss";
import Input from "./components/imput/imput";
import PlayerNba from "./components/main/Main";
import Main from "./components/main/Main";
import { ClickImage } from "./components/main/player";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ClickImage />
    </div>
  );
}

export default App;
