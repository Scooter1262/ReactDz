import MessageList from './components/ComponentMessage/MessageList/MessageList';
// import { useState } from 'react';
import  Message  from './components/ComponentMessage/Message';
//import { useState } from 'react';




const messageComponentText = "переданный текст";

function App() {
  
  return (
    <>
    <div class="App">
     <Message text={messageComponentText}/> 
    
    <MessageList />
   </div>
    </>

    
   
  
  
  );
  
}

export default App;

//2. Создать компонент Message, отображающий переданный ему пропсом текст.
//3. Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст (константу).
