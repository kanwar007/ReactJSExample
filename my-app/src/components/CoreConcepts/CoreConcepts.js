import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS } from "../../data";
export default function CoreConcepts() {
    return (<section id="core-concepts">
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

      </section>)
}