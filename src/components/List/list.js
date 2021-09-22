const List=({tasksList})=>{
return(
     <ul>
{tasksList.length ? tasksList.map((el)=>
             <li key={el.author}>{el.author}<br />
             {el.message}</li>
             ):null}
         </ul>
)
}

export default List;