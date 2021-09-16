import React from 'react';  
import { Component } from "react";


class Form extends Component{
    constructor(props){
        super(props);
        this.autor = props.autor;
        this.text = props.text;
    }

    render(){
        return(
            <>
            <form onSubmit={this.text}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.autor} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
            </>
        )
    }
}
export default Form;
// export default function ControlledFormWithHook() {  
//   const [name, setName] = useState('');  
  
//   return (  
//     <div>  
//       <form>  
//         <label>Name:</label>  
//         <input type="text" onChange={(e) => setName(e.target.value)} />  
//       </form>  
//       <br />  
//       Name is: {name}  
//     </div>  
//   );  
// }  