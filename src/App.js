import './App.css';
import { useState } from 'react';
import Item from './components/index.jsx'

function App() {

  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    //hace referencia al elemento creado (el elemento seria el form)
    const form = event.target;
    //me agarra el valor del input
    const input = form.item;
    //el input lo guarda en un array
    const newItems = [...items, input.value];
    //lo guarda en el estado del componente
    setItems(newItems);
    //resetea el input del form
    form.reset();
  }

  return (
    <>
      <h1>Shopping list !</h1>
      <div className="shopping-list">
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='item'
            placeholder='Add a new item'
          />
          <button>Add</button>
        </form>
        <ul>
          {
            items.map((item, index) => (
              <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
