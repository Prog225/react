//import { render } from "react-dom";
import { useState } from "react";

import "./styles.css";
function App() {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Pomme" },
    {
      id: 2,
      nom: "Orange"
    },
    { id: 3, nom: "Banane" }
  ]);

  const [newFruit, setNewFruit] = useState("");
  // const inputRef = useRef();

  //state
  /* const [compteur, setCompteur] = useState(1);

  // Component
  const handlerClick = () => {
    // alert("salia");
    setCompteur(compteur + 1);
  };
  //affichage
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handlerClick}>Incrementation</button>
    </div>
  );*/

  //Suppression d'element dans le tableau
  const handlerDelete = (id) => {
    // alert(id);

    const fruitsCopie = fruits.slice();
    const fruitFiltrer = fruitsCopie.filter((fruit) => fruit.id !== id);
    setFruits(fruitFiltrer);
  };

  //Ajouter d'un nouveau element dans un tableau
  const handlerSubmit = (event) => {
    event.preventDefault();
    const fruitsCopie = fruits.slice();
    const id = new Date().getTime();
    const nom = newFruit;

    fruitsCopie.push({ id, nom });
    setFruits(fruitsCopie);
    setNewFruit("");

    // console.log(inputRef.current.value);
  };
  //recupereation des elements dans le textbox avec onChange
  const handlerChange = (event) => {
    //console.log(event.nativeEvent.data);
    const new_val = event.target.value;
    //setNewFruit(event.target.value);
    setNewFruit(new_val);
    console.log(new_val);
  };

  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruits) => (
          <li key={fruits.id}>
            {fruits.nom}
            <button onClick={() => handlerDelete(fruits.id)}>x</button>
          </li>
        ))}
        ;
      </ul>
      <div>
        <form action="submit" onSubmit={handlerSubmit}>
          <input type="text" value={newFruit} onChange={handlerChange} />
          <button>Ajouter +</button>
        </form>
      </div>
    </div>
  );
}

export default App;
