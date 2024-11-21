import { useContext } from "react";
import "./App.css";
import CurrentStatus from "./components/CurrentStatus";
import DaysDetails from "./components/daysDetails/DaysDetails";
import Search from "./components/Search";
import { DataContext } from "./context/DataContext";
const App = () => {
  const { loading, error, data } = useContext(DataContext);
  return (
    <div className="app">
      <Search />
      <div className="content">
        {loading ? (
          <span className="loader"></span>
        ) : error ? (
          <h3>{error}</h3>
        ) : !data || Object.keys(data).length === 0 ? (
          <h3>Procure uma cidade...</h3>
        ) : (
          <>
            <CurrentStatus />
            <DaysDetails />
          </>
        )}
      </div>
      <footer>
        Desenvolvido por{" "}
        <a target="_blank" href="https://www.linkedin.com/in/eudesdgsouza/">
          Eudes Gomes
        </a>
      </footer>
    </div>
  );
};

export default App;
