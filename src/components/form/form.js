import { useState, memo } from "react";
import MessageList from "../ComponentMessage/MessageList/MessageList";




const Form = ({onChange}) => {
    
    const [nameInput, setNameInput] = useState("author:");
    const [textInput, setTextInput] = useState("message:");

    const submit =(e)=>{
        e.preventDefault();
       console.log(nameInput, textInput) 
       onChange({message:textInput, author:nameInput,});
       //onChange(prev =>[...prev, {text:nameInput, status:false}]);
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
        
        </div>
    );

};
export default memo(Form);

// const useEffect = (submit)=>{

// }




















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