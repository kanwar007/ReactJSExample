// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import {useState} from 'react';
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/Button/TabButton';
import {EXAMPLES} from './data.js'





function App() {
 
  const [selectedTopic, setSelectedTopic]  =useState();

  function handlerClick(selectedButton){
    
    console.log("heloow world"+selectedTopic);
    setSelectedTopic(selectedButton);
    
    }
    let topicDisplay= 'Please select a topic.';
    if(selectedTopic){
  topicDisplay = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>);
    }
  return (
   

    <div>
      <Header/>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((coreConcept) => <CoreConcept key={coreConcept.title} {...coreConcept}></CoreConcept>)}
          

          {/* <CoreConcept
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
          </CoreConcept> */}
          </ul>

        </section>
        <section id="examples">
        <h2> Example</h2>
        <menu>
          <TabButton isSelected={selectedTopic ==='components'} onSelect={() => handlerClick('components')}>component</TabButton>
          <TabButton isSelected={selectedTopic ==='jsx'}  onSelect={() => handlerClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic ==='props'}  onSelect={() => handlerClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic ==='state'}  onSelect={() => handlerClick('state')}>State</TabButton>
        </menu>
        {topicDisplay}
        
        
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
