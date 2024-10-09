// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import {CORE_CONCEPTS} from './data.js'

const reactDescription = ['fundamental','curial','core' ];
function genRandomInd(max)
{
  return Math.floor(Math.random()* (max+1));
}
function Header(){
  const description=reactDescription[genRandomInd(2)];
 return (<header>
 <img src={reactImg} alt="Stylized atom" />
 <h1>React Essentials</h1>
 <p>
   {description} React concepts you will need for almost any app you are
   going to build!
 </p>
</header>);
}

function CoreConcept(Props){
  return(
     <li>
       <img src={Props.image} alt={Props.title}></img>
       <h1>{Props.title}</h1>
       <p>{Props.description}</p>
     </li>
  );
}

function App() {
  return (
    <div>
      <Header/>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}>
          </CoreConcept>
          <CoreConcept
            image={CORE_CONCEPTS[1].image}
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}>
          </CoreConcept>
          <CoreConcept{...CORE_CONCEPTS[2]}>
          </CoreConcept>
          <CoreConcept{...CORE_CONCEPTS[3]}>
          </CoreConcept>
          </ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
