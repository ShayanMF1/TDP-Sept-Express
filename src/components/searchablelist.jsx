/* eslint-disable no-debugger */
import { useState } from 'react';
import { v4 } from 'uuid';
import Item from '../../Item';
import SearchBar from './SearchBar';

function SearchableList() {
  const [items, setItems] = useState([{
    name: 'milk',
    quantity: 1,
  }, {
    name: 'eggs',
    quantity: 1,
  }, {
    name: 'bread',
    quantity: 1,
  }]);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const removeItem = (index) => {
    const cloneItems = [...items];
    cloneItems.splice(index, 1);
    setItems(cloneItems);
  };

  const changeQuantity = (index, changeInQuantity) => {
    const cloneItems = [...items];
    cloneItems[index].quantity += changeInQuantity;
    if (cloneItems[index].quantity === 0) return removeItem(index);
    return setItems(cloneItems);
  };

  const addNewItem = (event) => {
    event.preventDefault();
    const cloneItems = [...items]; // ?
    for (let i = 0; i < cloneItems.length; i += 1) {
      if (cloneItems[i].name === newItem) {
        cloneItems[i].quantity += 1;
        return setItems(cloneItems);
      }
    }

    setItems((currentItems) => [...currentItems, { name: newItem, quantity: 1 }]);
    return setNewItem('');
  };

  return (
    <div>
      <form onSubmit={addNewItem}>
        <label htmlFor="newItem">
          New Item:
          <input type="text" id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        </label>
        <button type="submit">Add New</button>
      </form>
      <br />
      <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} />
      {
            items
              .filter(({ name }) => name.toLowerCase().startsWith(search.toLowerCase()))
              .map(({ name, quantity }, index) => (
                <Item
                  key={v4()}
                  name={name}
                  quantity={quantity}
                  handleClick={() => removeItem(index)}
                  changeQuantity={(change) => changeQuantity(index, change)}
                />
              ))
        }
    </div>
  );
}

export default SearchableList;