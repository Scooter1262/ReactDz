

const ArrRender = ({messageUp})=>{
return(
  <ul>
     {messageUp.map((str)=>(
       <li>{str}</li>
     ))}
  </ul>
)
}




export default ArrRender;