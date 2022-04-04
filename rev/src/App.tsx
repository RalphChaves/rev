import React, { useState } from "react";


function App() {
  const [cont, setCont] = useState<number>(0);

  const nomes:string[] = ["Leo", "Rafa", "Jezimiel", "Juno", "Ralph"]

  function addContador(){
    setCont(cont+1)
    console.log(cont);
  }


  return (
    <>
    <div>
      <h1>{cont}</h1>
      <button onClick={addContador}>Adicionar</button>
    </div>
    <div>
      {nomes.map((nome) =>{
        return (
          <h2>{nome}</h2>
        )
      })}
    </div>
    </>
  );
}

export default App;
