import { useState } from "react";
import MessageList from "../ComponentMessage/MessageList/MessageList";




const Form = () => {
    const[taskArr, setTaskArr]= useState([]);
    const [nameInput, setNameInput] = useState("author:");
    const [textInput, setTextInput] = useState("message:");

    const submit =(e)=>{
        e.preventDefault();
       console.log(nameInput, textInput) 
        setTaskArr((prevValue)=>[...prevValue,nameInput ,textInput ]);
         setTextInput('message:');
         setNameInput('author:');
    }
    return(
        <div>
        <form onSubmit={MessageList}>
           author: <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
           message: <input value={textInput} onChange={(e) => setTextInput(e.target.value)} />
            <button onClick={submit}>Submit</button>
        </form>
         <ul>
             {taskArr.length ? taskArr.map((el)=>
             <li key={el}>{el}</li>
             ):null}
         </ul>
        </div>
    );

};
export default Form;






















// import React from 'react';  

// import { Component } from "react";
// import MessageList from '../ComponentMessage/MessageList/MessageList';


// class Form extends Component{
//     constructor(props){
//         super(props);
//         this.autor = props.autor;
//         this.text = props.text;
//     }

//     render(){
//         return(
//             <>
//             <form onSubmit={MessageList}>
//         <label>
//           Имя:
//           <input type="text" value={this.state.value} onChange={this.autor} />
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//             </>
//         )
//     }
// }
// export default Form;
// // export default function ControlledFormWithHook() {  
// //   const [name, setName] = useState('');  
  
// //   return (  
// //     <div>  
// //       <form>  
// //         <label>Name:</label>  
// //         <input type="text" onChange={(e) => setName(e.target.value)} />  
// //       </form>  
// //       <br />  
// //       Name is: {name}  
// //     </div>  
// //   );  
// // }  