

function CoreConcept(Props){
    return(
       <li>
         <img src={Props.image} alt={Props.title}></img>
         <h1>{Props.title}</h1>
         <p>{Props.description}</p>
       </li>
    );
  }

  export default CoreConcept;