import { useState } from "react";


export function MessageList(){
   
     const[strings, setStrings] = useState([]);
     console.log("добавление в массив",strings);

     const enterMessage = (el) =>{ 
        //  el.push(setStrings);
         setStrings(prevState =>[...prevState, el])
        
         
     }
    return strings.map((string)=> 
         <>
       
        <span onClick={() => enterMessage(string)}>{enterMessage}</span>
       </>
    )
    }

export default MessageList;


// const Form=()=>{
//     const[textInput,setTextInput] = useState("");
//     return(
//         <form>
//             <input value={textInput} onChange={(e)=>setTextInput(e.target.value)} />
//             <button onClick={submith}>Submit</button>
//         </form>
//     );

// };
// export default Form;


