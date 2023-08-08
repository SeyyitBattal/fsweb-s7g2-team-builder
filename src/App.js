import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [duzenlenecekUye, setDuzenlenecekUye] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Form duzenlenecekUye={duzenlenecekUye} />
      </header>
    </div>
  );
}

export default App;
