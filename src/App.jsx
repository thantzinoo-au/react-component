import "./App.css";
import Greeting from "./components/Greeting";
import User from "./components/User";

function App() {
  return (
    <>
      <div className="card">
        <Greeting message="Hello React!" />
        <User name="Thant Zin Oo" />
      </div>
    </>
  );
}

export default App;
