import MessageList from './components/ComponentMessage/MessageList/MessageList';
// import { useState } from 'react';
import  Message  from './components/ComponentMessage/Message';
import Form from './components/form/form';
//import { useState } from 'react';




const messageComponentText = "переданный текст";
const messageUp = MessageList;
function App() {
  
  return (
    <>
    <div className="App">
     <Message text={messageComponentText}/> 
    
    <MessageList enterMessage={messageUp}/>
    <Form />
   </div>
    </>

    
   
  
  
  );
  
}

export default App;

//2. Создать компонент Message, отображающий переданный ему пропсом текст.
//3. Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст (константу).
