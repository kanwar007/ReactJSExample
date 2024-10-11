// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import {Fragment} from 'react';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Example from './components/Example/Example';





function App() {
 
  
  return (
   
// we also use <></> in place of Fragment
    <Fragment>
      <Header/>

      <main>
        <CoreConcepts></CoreConcepts>
        <Example></Example>
       
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
