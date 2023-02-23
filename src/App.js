import { Provider } from "react-redux";
// import Home from './Component/Home';
import Login from "./Component/Login";
import Test from "./Component/Test";
import { PersistGate } from "redux-persist/integration/react";
import { persister, store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./routes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <Router>
            <RouterComponent />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
