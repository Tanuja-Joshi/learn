import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Traffic from "./Components/Traffic";
import Home from "./Components/Home";
import Tests from "./Components/Tests";
import CurrencyConverter from "./Components/CurrencyConverter";
import StopWatch from "./Components/StopWatch";
import Basic from "./Components/Basic";
import Loader from "./Components/Loader";

function App() {
  return (
    <> 
    <Router>
     <Home/>
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/traffic" element={<Traffic/>}></Route>
      <Route path="/tests" element={<Tests/>}></Route>
      <Route path="/currencyconverter" element={<CurrencyConverter/>}></Route>
      <Route path="/stopwatch" element={<StopWatch/>}></Route>
      <Route path="/basic" element={<Basic/>}></Route>
      <Route path="/loader" element={<Loader/>}></Route>
    </Routes>
    </Router>
</>
  );
}
export default App;
