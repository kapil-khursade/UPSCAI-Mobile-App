import { registerRootComponent } from "expo";
import App from "./App";
import { store } from "./Helpers/Redux/store";
import { Provider } from "react-redux";


const Index = () => {
  return <Provider store={store}><App/></Provider>
}

export default registerRootComponent(Index)