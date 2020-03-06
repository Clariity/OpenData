import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
  window.scrollTo(0, 0);
  return (
    <div className="text-area" style={{textAlign: "left"}}>
      <Button variant="contained" style={{backgroundColor: "rgb(114, 114, 114)", color: "#fff"}} onClick={() => props.history.push('/')}>
        Back to Main Page
      </Button>
      <pre>prefix : &lt;https://example-schema.org/UKHigherEducationStatistics/&gt; .</pre>
      <pre>prefix rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt; .</pre>
      <pre>prefix rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt; .</pre>
      <pre>prefix sc: &lt;https://schema.org/&gt; .</pre>
      <pre>prefix hsprn: &lt;https://www.hesa.ac.uk/collection/c19051/schemahtml/ &gt; .</pre>
      <pre>prefix hsiid: &lt;https://www.hesa.ac.uk/collection/c08019/schemahtml/&gt; .</pre>
      <br/>
      <pre>StudentStatistics rdf:type rdfs:Class .</pre>
      <pre>  sc:description rdf:type rdf:Property .</pre>
      <pre>  :total rdf:type rdf:Property .</pre>
      <pre>  sc:country rdf:type rdf:Property .</pre>
      <br/>
      <pre>  :total rdf:type sc:ItemList: .</pre>
      <pre>  sc:country rdf:type sc:ItemList: .</pre>
      <br/>
      <pre>TotalValue rdf:type rdfs:Class .</pre>
      <pre>  :totalStudents rdf:type rdf:Property .</pre>
      <pre>  :totalUKDomiciledStudents rdf:type rdf:Property .</pre>
      <pre>  :studyMode rdf:type rdf:Property .</pre>
      <pre>  :sex rdf:type rdf:Property .</pre>
      <pre>  :ageGroup rdf:type rdf:Property .</pre>
      <pre>  :disability rdf:type rdf:Property .</pre>
      <pre>  :ethnicity rdf:type rdf:Property .</pre>
      <br/>
      <pre>  studyMode rdf:type sc:ItemList .</pre>
      <pre>  :sex rdf:type sc:ItemList .</pre>
      <pre>  :ageGroup rdf:type sc:ItemList .</pre>
      <pre>  :disability rdf:type sc:ItemList .</pre>
      <pre>  :ethnicity rdf:type sc:ItemList .</pre>
      <pre>  :totalStudents rdf:type sc:Number .</pre>
      <pre>  :totalUKDomiciledStudents rdf:type sc:Number .</pre>
      <pre>  :StudyMode rdf:type rdfs:Class .</pre>
      <pre>  sc:courseMode rdf:type rdf:Property .</pre>
      <pre>  :domicileLocation rdf:type rdf:Property .</pre>
      <pre>  :domicileLocation rdf:type sc:ItemList .</pre>
      <br/>
      <pre>Sex rdf:type rdfs:Class .</pre>
      <pre>  :sex rdf:type rdf:Property .</pre>
      <pre>  :value rdf:type rdf:Property .</pre>
      <pre>  :sex rdf:type sc:Text .</pre>
      <pre>  :value rdf:type sc:Number .</pre>
      <br/>
      <pre>AgeGroup rdf:type rdfs:Class .</pre>
      <pre>  :group rdf:type rdf:Property .</pre>
      <pre>  :value rdfs:domain :AgeGroup .</pre>
      <pre>  :group rdf:type sc:Text .</pre>
      <br/>
      <pre>Disability rdf:type rdfs:Class .</pre>
      <pre>  :status rdf:type rdf:Property .</pre>
      <pre>  :value rdfs:domain :Disability .</pre>
      <pre>  :status rdf:type sc:Text .</pre>
      <br/>
      <pre>Ethnicity rdf:type rdfs:Class .</pre>
      <pre>  :ethnicity rdf:type rdf:Property .</pre>
      <pre>  :value rdfs:domain :Ethnicity .</pre>
      <pre>  :ethnicity rdf:type sc:Text .</pre>
      <br/>
      <pre>DomicileLocation rdf:type rdfs:Class .</pre>
      <pre>  :domicile rdf:type rdf:Property .</pre>
      <pre>  :totalDomiciles rdf:type rdf:Property .</pre>
      <pre>  :studyLevel rdf:type rdf:Property .</pre>
      <br/>
      <pre>  domicile rdf:type sc:Text .</pre>
      <pre>  :totalDomiciles rdf:type sc:Number .</pre>
      <pre>  :studyLevel rdf:type sc:ItemList .</pre>
      <br/>
      <pre>StudyLevel rdf:type rdfs:Class .</pre>
      <pre>  :level rdf:type rdf:Property .</pre>
      <pre>  :value rdfs:domain :StudyLevel .</pre>
      <pre>  :level rdf:type sc:Text .</pre>
      <br/>
      <pre>:Country rdf:type rdfs:Class .</pre>
      <pre>  sc:name rdf:type rdf:Property .</pre>
      <pre>  :total rdf:type rdf:Property .</pre>
      <pre>  :higherEducationProvider rdf:type rdf:Property .</pre>
      <br/>
      <pre>HigherEducationProvider rdf:type rdfs:Class .</pre>
      <pre>HigherEducationProvider rdfs:subClassOf sc:CollegeOrUniversity .</pre>
      <pre>  sc:name rdf:type rdf:Property .</pre>
      <pre>  hsprn:instid rdf:type rdf:Property .</pre>
      <pre>  hsprn:ukprn rdf:type rdf:Property .</pre>
      <pre>  hsprn:ukprn rdf:type hsprn:ukprntype .</pre>
      <pre>  :region rdf:type rdf:Property .</pre>
      <pre>  :totalStudents rdf:type rdf:Property .</pre>
      <pre>  :totalUKDomiciledStudents rdf:type rdf:Property .</pre>
      <pre>  :studyMode rdf:type rdf:Property .</pre>
      <pre>  :region rdf:type sc:Text .</pre>
      <Button variant="contained" style={{backgroundColor: "rgb(114, 114, 114)", color: "#fff"}} onClick={() => props.history.push('/')}>
        Back to Main Page
      </Button>
    </div>
  );
})