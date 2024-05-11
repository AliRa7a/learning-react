import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  return (
    <div className="App">
      <h1 className=" text-3xl text-green-800">Currency Converter</h1>
      <CurrencyConverter apiKey={""} />
    </div>
  );
}

export default App;
