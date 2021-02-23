import {Router} from 'react-router-dom';
import {Routes} from "./navigation";
import {history} from "./navigation/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>

    </div>
  );
}

export default App;
