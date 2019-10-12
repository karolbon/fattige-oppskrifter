import React from "react";

function RecipesView(props) {
  const data = Array.from(props.recipesData);
  return (
    <div>
      {" "}
      {data.map(a => (
        <div key={a.id}>
          <h2>{a.title}</h2>
          <img src={a.picture} style={{ maxWidth: "400px" }} />
          <p style={{ fontSize: "14px" }}>{a.text}</p>
        </div>
      ))}{" "}
    </div>
  );
}

export default RecipesView;
