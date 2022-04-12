import React, { useState } from 'react';
import './style.css'


let nextId = 0;
const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);


  const listHandler = () => {
    setValue('');
    if (value.length > 0) {
      setList([
        ...list,
        {
          id: nextId++,
          data: value,
        },
      ]);
    } else {
      alert('data is not found');
    }
  };
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const deleteHandler = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div>
    <div className="todo">
      <h1 className="h1">Todo List</h1>
      <input className="yes" type="text" value={value} onChange={valueHandler} />
      <button className="btn" onClick={listHandler}>Add</button>
      
    </div>
     <div className="ui" >
   
        {list.map((item) => (
         <div className='li'>
            <li  key={item.id}>
            {item.data}
            <button className="dlt" onClick={() => deleteHandler(item.id)}>X</button>
          </li>
         </div>
        ))}
      
     </div>
    </div>
  );
};
export default App;
