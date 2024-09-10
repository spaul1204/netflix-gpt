import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Carousel from "./components/practice/Carousel";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      {/* <Carousel /> */}
    </Provider>
  );
}

export default App;
