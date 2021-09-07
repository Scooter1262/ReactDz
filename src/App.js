
import  Message  from './components/ComponentMessage/Message';

const messageComponentText = "переданный текст";

function App() {
  return (
    <div className="App">
     <Message text={messageComponentText}/> 
    </div>
  );
}

export default App;
