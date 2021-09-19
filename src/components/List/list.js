const List=({tasksList})=>{
return(
     <ul>
{tasksList.length ? tasksList.map((el)=>
             <li key={el.text}>{el.text}</li>
             ):null}
         </ul>
)
}

export default List;