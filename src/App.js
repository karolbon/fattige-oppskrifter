import React from "react";
import "./App.css";
import { dataSerializer } from "./services/ReadFile";
import RecipesView from "./components/RecipesView";

function App() {
  const data = dataSerializer();

  return (
    <div className="App">
      <h1>Fattige oppskrifter</h1>
      <p>
        Disse oppskriftene er hentet fra Instagram-kontoen til fattig.student.
      </p>
      <RecipesView recipesData={data} />
    </div>
  );
}

export default App;
