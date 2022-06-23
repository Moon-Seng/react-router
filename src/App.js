import { BrowserRouter  } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import NavComponent from "./Components/NavComponent";
import View from "./Pages/View";

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <HeaderComponent></HeaderComponent>
      <BrowserRouter>
        <View></View>
      </BrowserRouter>
    </div>
  );
}

export default App;
