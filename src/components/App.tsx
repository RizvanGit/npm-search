import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Packege</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
