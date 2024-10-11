import { useState } from 'react';
import TabButton from '../Button/TabButton'
import {EXAMPLES} from '../../data'
import Section from '../Section/Section';




export default function Example(){
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
        <Section title="Example" id="examples">
      
        <menu>
          <TabButton isSelected={selectedTopic ==='components'} onSelect={() => handlerClick('components')}>component</TabButton>
          <TabButton isSelected={selectedTopic ==='jsx'}  onSelect={() => handlerClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic ==='props'}  onSelect={() => handlerClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic ==='state'}  onSelect={() => handlerClick('state')}>State</TabButton>
        </menu>
        {topicDisplay}
        </Section>)
}