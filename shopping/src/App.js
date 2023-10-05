import {useState} from 'react';
import './App.css';

function App() {
  const [items,setItems] = useState(['vijay please ']);

  function onRemoveItem(itemToRemove){
      const newItems = items.filter((item) => {
        return item !== itemToRemove;
      });

      setItems(newItems);

  }
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  
  return (
    <>
        <h1>
          Shopping List
        </h1>
        <main className ="shopping-list">
              <h2>Item to Buy</h2>
              <form onSubmit={onSubmit}>
                    <input type='text' name='item' placeholder="Add New Item" required></input>
                    <button>Add</button>
              </form>
              <ul>
                    {items.map((item, index) => (
                      <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
                    ))}
              </ul>
        </main>
    </>
  );
}

function Item({item,onRemoveItem}){
  return (
     <li>
      {item}
      <button className='delete' onClick={() => onRemoveItem(item)}>X</button>
     </li>
  )

}
export default App;
