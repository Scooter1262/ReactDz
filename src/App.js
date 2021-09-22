import MessageList from './components/ComponentMessage/MessageList/MessageList';

import  Message  from './components/ComponentMessage/Message';
import Form from './components/form/form';
import List from './components/List/list';
import { useState } from 'react';
//import ArrRender from './components/ArrRender/ArrRender';






const messageComponentText = "переданный текст";
//const messageUp = MessageList;
function App() {
  const handlerChargeArr = (newObj)=>{
    setListArr(prev=>[...prev,newObj])
  }
 const [listArr, setListArr]= useState([]);
  return (
    <>
    <div className="App">
     <Message text={messageComponentText}/> 
   
    <MessageList enterMessage={listArr}/>
    <List tasksList={listArr}/>
    <Form onChange={handlerChargeArr}/>
    
   </div>
    </>

    
   
  
  
  );
  
}

export default App;

//2. Создать компонент Message, отображающий переданный ему пропсом текст.
//3. Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст (константу).
