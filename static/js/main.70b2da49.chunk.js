(this["webpackJsonpopen-data-app"]=this["webpackJsonpopen-data-app"]||[]).push([[0],{53:function(e,t,a){},67:function(e,t,a){e.exports=a(80)},72:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),i=a.n(l),s=(a(72),a(53),a(34)),o=a(24),u=a(15),c=a(57),d=a.n(c),p=a(61),m=a(60),h=a.n(m),g=a(121),f=a(59),E=a.n(f),y=a(123),w=a(119),v=a(125),b=a(120),D=a(124),O=a(126),k=a(122),I=a(118),F=Object(o.f)((function(e){var t=Object(r.useState)("Age Group"),a=Object(u.a)(t,2),l=a[0],i=a[1],s=Object(r.useState)(0),o=Object(u.a)(s,2),c=o[0],m=o[1],f=Object(r.useState)([]),F=Object(u.a)(f,2),U=F[0],P=F[1],N=Object(r.useState)(!1),T=Object(u.a)(N,2),C=T[0],H=T[1],S=Object(r.useState)([]),x=Object(u.a)(S,2),A=x[0],K=x[1],j=Object(r.useState)([]),L=Object(u.a)(j,2),M=L[0],B=L[1],R={labels:A,plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!0},value:{show:!0,formatter:function(e){return G(e)}},total:{show:!0,color:"#ffffff",formatter:function(e){return G(e.config.series.reduce((function(e,t){return e+t}),0))}}}}}},legend:{position:"bottom",offsetY:0}},G=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};Object(r.useEffect)((function(){C||Object(p.a)("./data/dataset.csv",(function(e){P(e),H(!0)}))}),[H,C]),Object(r.useEffect)((function(){if(C)switch(l){case"Age Group":K(["20 and under","21-24","25-29","30 and over","Unknown"]),B([parseInt(U[c]["20 and under"],10),parseInt(U[c]["21-24"],10),parseInt(U[c]["25-29"],10),parseInt(U[c]["30 and over"],10),parseInt(U[c].Unknown,10)]);break;case"Disability Status":K(["Known to have a disability","No known disability"]),B([parseInt(U[c]["Known to have a disability"],10),parseInt(U[c]["No known disability"],10)]);break;case"Ethnicity":K(["White","Black","Asian","Other (including mixed)","Not known"]),B([parseInt(U[c].White,10),parseInt(U[c].Black,10),parseInt(U[c].Asian,10),parseInt(U[c]["Other (including mixed)"],10),parseInt(U[c]["Not known"],10)]);break;case"Domiciles: Full-time postgraduate (United Kingdom)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ftpuk Higher degree (research)"],10),parseInt(U[c]["ftpuk Higher degree (taught)"],10),parseInt(U[c]["ftpuk Other postgraduate"],10)]);break;case"Domiciles: Full-time postgraduate (Other EU)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ftpeu Higher degree (research)"],10),parseInt(U[c]["ftpeu Higher degree (taught)"],10),parseInt(U[c]["ftpeu Other postgraduate"],10)]);break;case"Domiciles: Full-time postgraduate (Non EU)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ftpneu Higher degree (research)"],10),parseInt(U[c]["ftpneu Higher degree (taught)"],10),parseInt(U[c]["ftpneu Other postgraduate"],10)]);break;case"Domiciles: Full-time postgraduate (Not Known)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ftpnk Higher degree (research)"],10),parseInt(U[c]["ftpnk Higher degree (taught)"],10),parseInt(U[c]["ftpnk Other postgraduate"],10)]);break;case"Domiciles: Full-time postgraduate (All)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ftpt Higher degree (research)"],10),parseInt(U[c]["ftpt Higher degree (taught)"],10),parseInt(U[c]["ftpt Other postgraduate"],10)]);break;case"Domiciles: Part-time postgraduate (United Kingdom)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ptpuk Higher degree (research)"],10),parseInt(U[c]["ptpuk Higher degree (taught)"],10),parseInt(U[c]["ptpuk Other postgraduate"],10)]);break;case"Domiciles: Part-time postgraduate (Other EU)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ptpeu Higher degree (research)"],10),parseInt(U[c]["ptpeu Higher degree (taught)"],10),parseInt(U[c]["ptpeu Other postgraduate"],10)]);break;case"Domiciles: Part-time postgraduate (Non EU)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ptpneu Higher degree (research)"],10),parseInt(U[c]["ptpneu Higher degree (taught)"],10),parseInt(U[c]["ptpneu Other postgraduate"],10)]);break;case"Domiciles: Part-time postgraduate (Not Known)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ptpnk Higher degree (research)"],10),parseInt(U[c]["ptpnk Higher degree (taught)"],10),parseInt(U[c]["ptpnk Other postgraduate"],10)]);break;case"Domiciles: Part-time postgraduate (All)":K(["Higher degree (research)","Higher degree (taught)","Other postgraduate"]),B([parseInt(U[c]["ptpt Higher degree (research)"],10),parseInt(U[c]["ptpt Higher degree (taught)"],10),parseInt(U[c]["ptpt Other postgraduate"],10)]);break;case"Domiciles: Full-time undergraduate (United Kingdom)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ftuuk First degree"],10),parseInt(U[c]["ftuuk Other undergraduate"],10)]);break;case"Domiciles: Full-time undergraduate (Other EU)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ftueu First degree"],10),parseInt(U[c]["ftueu Other undergraduate"],10)]);break;case"Domiciles: Full-time undergraduate (Non EU)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ftuneu First degree"],10),parseInt(U[c]["ftuneu Other undergraduate"],10)]);break;case"Domiciles: Full-time undergraduate (Not Known)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ftunk First degree"],10),parseInt(U[c]["ftunk Other undergraduate"],10)]);break;case"Domiciles: Full-time undergraduate (All)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ftut First degree"],10),parseInt(U[c]["ftut Other undergraduate"],10)]);break;case"Domiciles: Part-time undergraduate (United Kingdom)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ptuuk First degree"],10),parseInt(U[c]["ptuuk Other undergraduate"],10)]);break;case"Domiciles: Part-time undergraduate (Other EU)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ptueu First degree"],10),parseInt(U[c]["ptueu Other undergraduate"],10)]);break;case"Domiciles: Part-time undergraduate (Non EU)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ptuneu First degree"],10),parseInt(U[c]["ptuneu Other undergraduate"],10)]);break;case"Domiciles: Part-time undergraduate (Not Known)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ptunk First degree"],10),parseInt(U[c]["ptunk Other undergraduate"],10)]);break;case"Domiciles: Part-time undergraduate (All)":K(["First degree","Other undergraduate"]),B([parseInt(U[c]["ptut First degree"],10),parseInt(U[c]["ptut Other undergraduate"],10)]);break;default:K(["Female","Male","Other"]),B([parseInt(U[c].Female,10),parseInt(U[c].Male,10),parseInt(U[c].Other,10)])}}),[c,l,C,U]);var W=Object(r.useRef)(),q=Object(r.useRef)();return n.a.createElement("div",null,n.a.createElement("div",{className:"height-90 middle-text",ref:W},n.a.createElement("h5",{className:"chart-title"},"Distribution of UK University Students 2015/16"),n.a.createElement("h6",{className:"chart-title"},"Category - ",l),n.a.createElement(d.a,{options:R,series:M,type:"donut",className:"donut-chart"}),U!==[]&&n.a.createElement(y.a,{defaultExpanded:!0,className:"dropdown-panel"},n.a.createElement(v.a,{expandIcon:n.a.createElement(E.a,null)},n.a.createElement(I.a,null,"Filter Selection")),n.a.createElement(w.a,null,n.a.createElement(b.a,{className:"dropdown"},n.a.createElement(D.a,null,"University"),n.a.createElement(k.a,{value:c,onChange:function(e){return m(e.target.value)}},U.map((function(e,t){return n.a.createElement(O.a,{key:t,value:t},e["HE provider"])})))),n.a.createElement(b.a,{className:"dropdown"},n.a.createElement(D.a,null,"Category"),n.a.createElement(k.a,{value:l,onChange:function(e){return i(e.target.value)}},n.a.createElement(O.a,{value:"Sex"},"Sex"),n.a.createElement(O.a,{value:"Age Group"},"Age group"),n.a.createElement(O.a,{value:"Disability Status"},"Disability status"),n.a.createElement(O.a,{value:"Ethnicity"},"Ethnicity"),n.a.createElement(O.a,{value:"Domiciles: Full-time postgraduate (United Kingdom)"},"Domiciles: Full-time postgraduate (United Kingdom)"),n.a.createElement(O.a,{value:"Domiciles: Full-time postgraduate (Other EU)"},"Domiciles: Full-time postgraduate (Other EU)"),n.a.createElement(O.a,{value:"Domiciles: Full-time postgraduate (Non EU)"},"Domiciles: Full-time postgraduate (Non EU)"),n.a.createElement(O.a,{value:"Domiciles: Full-time postgraduate (Not Known)"},"Domiciles: Full-time postgraduate (Not Known)"),n.a.createElement(O.a,{value:"Domiciles: Full-time postgraduate (All)"},"Domiciles: Full-time postgraduate (All)"),n.a.createElement(O.a,{value:"Domiciles: Part-time postgraduate (United Kingdom)"},"Domiciles: Part-time postgraduate (United Kingdom)"),n.a.createElement(O.a,{value:"Domiciles: Part-time postgraduate (Other EU)"},"Domiciles: Part-time postgraduate (Other EU)"),n.a.createElement(O.a,{value:"Domiciles: Part-time postgraduate (Non EU)"},"Domiciles: Part-time postgraduate (Non EU)"),n.a.createElement(O.a,{value:"Domiciles: Part-time postgraduate (Not Known)"},"Domiciles: Part-time postgraduate (Not Known)"),n.a.createElement(O.a,{value:"Domiciles: Part-time postgraduate (All)"},"Domiciles: Part-time postgraduate (All)"),n.a.createElement(O.a,{value:"Domiciles: Full-time undergraduate (United Kingdom)"},"Domiciles: Full-time undergraduate (United Kingdom)"),n.a.createElement(O.a,{value:"Domiciles: Full-time undergraduate (Other EU)"},"Domiciles: Full-time undergraduate (Other EU)"),n.a.createElement(O.a,{value:"Domiciles: Full-time undergraduate (Non EU)"},"Domiciles: Full-time undergraduate (Non EU)"),n.a.createElement(O.a,{value:"Domiciles: Full-time undergraduate (Not Known)"},"Domiciles: Full-time undergraduate (Not Known)"),n.a.createElement(O.a,{value:"Domiciles: Full-time undergraduate (All)"},"Domiciles: Full-time undergraduate (All)"),n.a.createElement(O.a,{value:"Domiciles: Part-time undergraduate (United Kingdom)"},"Domiciles: Part-time undergraduate (United Kingdom)"),n.a.createElement(O.a,{value:"Domiciles: Part-time undergraduate (Other EU)"},"Domiciles: Part-time undergraduate (Other EU)"),n.a.createElement(O.a,{value:"Domiciles: Part-time undergraduate (Non EU)"},"Domiciles: Part-time undergraduate (Non EU)"),n.a.createElement(O.a,{value:"Domiciles: Part-time undergraduate (Not Known)"},"Domiciles: Part-time undergraduate (Not Known)"),n.a.createElement(O.a,{value:"Domiciles: Part-time undergraduate (All)"},"Domiciles: Part-time undergraduate (All)")))))),n.a.createElement("div",{className:"arrow bounce"},n.a.createElement(h.a,{className:"arrow-icon",onClick:function(){return e=q,window.scrollTo(0,e.current.offsetTop);var e}})),n.a.createElement("div",{ref:q,className:"text-area"},n.a.createElement("h2",null,n.a.createElement("b",null,"Data Cleaning")),n.a.createElement("h3",null,n.a.createElement("b",null,"Methodology")),n.a.createElement("p",null,"The tool used for finding errors within the dataset and fixing them was ",n.a.createElement("a",{href:"https://openrefine.org/"},"OpenRefine"),". This provided the ability to perform facets on text, word and numerical values to identify any erroneous data to be corrected. By performing these facets on each column, all the unique values could be shown and erroneous values easily identifiable."),n.a.createElement("h3",null,n.a.createElement("b",null,"Errors and Solutions")),n.a.createElement("h4",null,"Errors Found in Sheet 1"),n.a.createElement("p",null,'Cell B182 gave value "ABCDEFGHTY" for UKPRN. This was corrected to "10008026" when comparing with the value for St Mary\'s University College in Sheet 2 (Text Facet).'),n.a.createElement("p",null,'Cell D172 gave value "The University of St Andrews Upon Hull" for HE provider. This University does not exist and was corrected to "The University of St Andrews" as also shown in Sheet 2 (Word Facet).'),n.a.createElement("p",null,'Cell AK11 gave value "Total other EEC domicile" as a column header for part-time undergraduate\'s in other European Union domiciles. This was corrected to be "Total other EU domicile" to be consistent with the other "Other European Union domicile" column headers (Word Facet).'),n.a.createElement("p",null,"Cell BX145 gave value 157575575775 for total England students in other European domiciles taking their first degree. This was corrected to 1575 as these were the 4 leading digits and also equalled the sum of the precending values in the column (Numeric Facet)."),n.a.createElement("p",null,'Cells CC104, CC105, CC106, CJ64, CJ182 gave values "NIL", "NULL", "ZERO", "nil", and "fifteen" respectively. These are inconsistent numerical representations compared to the rest of the dataset. Corrected to correct numerical formats as 0, 0, 0, 0, and 15 respectively (Numeric Facet).'),n.a.createElement("h4",null,"Errors Found in Sheet 2"),n.a.createElement("p",null,'Cell B101 gave value "32XDFRG87" for UKPRN. This was corrected to "10005127" when comparing with the value for Plymouth College of Art in Sheet 1 (Text Facet).'),n.a.createElement("p",null,'Cell C141 gave value "NARNIA" for Region of HE provider. This was corrected to "EAST" when comparing with the value for Writtle University College in Sheet 1 (Text Facet).'),n.a.createElement("p",null,'Cell D45 gave value "University of Derbyshire" for HE provider. This was corrected to "University of Derby" when comparing with the value from sheet 1 (Word Facet).'),n.a.createElement("p",null,'Cell D99 gave value "Oxford  Uni at Brookes" (with additional spacing that isn\'t shown in this justified text) for HE provider, This was corrected to "Oxford Brookes University" when comparing with the value from sheet 1 (Word Facet).'),n.a.createElement("p",null,'Cell L55 gave value "NAN", This was corrected to 0 (Numeric Facet).'),n.a.createElement("p",null,'Cell U40 gave value "29430XYYTY" for Total Students at Coventry University. This was corrected to the value 29430 (Numeric Facet).'),n.a.createElement("h3",null,n.a.createElement("b",null,"Additional Manipulation")),n.a.createElement("p",null,"Empty columns between sections in sheet 1 were removed."),n.a.createElement("p",null,"All blank lines were removed."),n.a.createElement("p",null,"Metadata such as the sheet title, links and additional text at the bottom of the dataset were removed."),n.a.createElement("p",null,"Special characters \u2020, \xa7\xa7 and \u2021 were removed."),n.a.createElement("p",null,"Sheet 1 and 2 were merged into one file by appending columns E to U from sheet 2 onto the right end of sheet 1. This enabled all information for each HE provider to be in one row and not spread over two sheets."),n.a.createElement("p",null,'The merged dataset was converted to a .csv file format. This required all column headings to fit onto one line at the top. Therefore, duplicate headings such as "Higher degree (research)" were prepended with a unique tag to identify which study mode (i.e Full-time postgraduate) and domicile location (i.e United Kingdom domicile) it belonged to.'),n.a.createElement("p",null,"Some rows were reordered so that all country totals were at the top for a better user experience when used with the data visualisation listings."),n.a.createElement("h2",null,n.a.createElement("b",null,"Data Modelling")),n.a.createElement("p",null,'The data was modelled using JSON-LD. The "@context" refers to a custom ontology schema that was created for this dataset. The schema defines the classes and other ontologies used to create the linked data model.'),n.a.createElement("p",null,"Classes were defined to describe new object types such as StudentStatistics, StudyMode and DomicileLocation. These class definitions also included properties that belong to them as reflected in the JSON-LD."),n.a.createElement("p",null,"Throughout the schema, other ontologies were used and referenced. The main ontology utilised was ",n.a.createElement("a",{href:"https://schema.org/"},"schema.org")," for common classes and properties such as Number, Text and name."),n.a.createElement("p",null,n.a.createElement("a",{href:"http://www.w3.org/1999/02/22-rdf-syntax-ns#"},"RDF")," and ",n.a.createElement("a",{href:"http://www.w3.org/2000/01/rdf-schema#"},"RDFs")," were commonly used throughout. Additionally ",n.a.createElement("a",{href:"https://www.hesa.ac.uk/collection/c08019/schemahtml/"},"INSTID")," and ",n.a.createElement("a",{href:"https://www.hesa.ac.uk/collection/c19051/schemahtml/"},"UKPRN")," properties referenced ontologies from ",n.a.createElement("a",{href:"https://www.hesa.ac.uk"},"HESA"),"."),n.a.createElement(g.a,{variant:"contained",style:{backgroundColor:"rgb(114, 114, 114)",color:"#fff"},onClick:function(){return e.history.push("/schema")}},"Click Here For Schema"),n.a.createElement("h2",null,n.a.createElement("b",null,"Data Visualisation")),n.a.createElement("h3",null,n.a.createElement("b",null,"Audience and Use Case")),n.a.createElement("p",null,"The purpose of this visualisation is to be able to query the university data from the dataset in simple way and for the results to be presented in a visually appealing format."),n.a.createElement("p",null,"The visualisation was designed for an audience that wishes to know about the numbers of students per category for UK universities and countries. The visualisation enables users to select a UK country or university and then the category they wish to view the statistics for. This will show the distribution of students within the category as well as the total number of students."),n.a.createElement("p",null,"This can be used for cases where a user wishes to quickly find the proportion of students that are female at a specific university for example."),n.a.createElement("h3",null,n.a.createElement("b",null,"Interaction and Functionality")),n.a.createElement("p",null,"The visualisation provides a filter section that allows you to select the UK country or university of your choice from a dropdown list which you would like the statistics for. You can also select the category you would like statistics for such as Age Group or Domicile numbers. This enables the whole dataset to be explored."),n.a.createElement("p",null,"The visualisation dynamically loads the data and re-renders the chart when categories and universities are selected. It provides an animation to show the category sizes resizing upon a new selection."),n.a.createElement("p",null,"The legend labels can be hovered over to highlight specific sections within the visualisation. Sections on the visualisation can also be hovered over to reveal a tooltip as well as the total number of students for that section. This is highlighted in the centre of the visualisation as well as on the tooltip."),n.a.createElement("p",null,"The title of the visualisation also changes to correspond with the data being shown."),n.a.createElement("h3",null,n.a.createElement("b",null,"Additional Details")),n.a.createElement("p",null,"The visualisation is additionally enriched by calculating percentages of the total number of students in the category and displaying them on the section of the chart instead of just showing the pure numbers."),n.a.createElement("p",null,"The visualisation was developed using the ",n.a.createElement("a",{href:"https://apexcharts.com/"},"ApexCharts.js")," library with some custom formatting code to get the desired effects for the user. Similarly to D3.js, this library draws SVG components onto the canvas but is more compatible with the framework used to produce this site as it doesn't try to compete with the framework to control the DOM like D3.js does.")))})),U=Object(o.f)((function(e){return window.scrollTo(0,0),n.a.createElement("div",{className:"text-area",style:{textAlign:"left"}},n.a.createElement(g.a,{variant:"contained",style:{backgroundColor:"rgb(114, 114, 114)",color:"#fff"},onClick:function(){return e.history.push("/")}},"Back to Main Page"),n.a.createElement("pre",null,"prefix : <https://example-schema.org/UKHigherEducationStatistics/> ."),n.a.createElement("pre",null,"prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> ."),n.a.createElement("pre",null,"prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ."),n.a.createElement("pre",null,"prefix sc: <https://schema.org/> ."),n.a.createElement("pre",null,"prefix hsprn: <https://www.hesa.ac.uk/collection/c19051/schemahtml/ > ."),n.a.createElement("pre",null,"prefix hsiid: <https://www.hesa.ac.uk/collection/c08019/schemahtml/> ."),n.a.createElement("br",null),n.a.createElement("pre",null,"StudentStatistics rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  sc:description rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :total rdf:type rdf:Property ."),n.a.createElement("pre",null,"  sc:country rdf:type rdf:Property ."),n.a.createElement("br",null),n.a.createElement("pre",null,"  :total rdf:type sc:ItemList: ."),n.a.createElement("pre",null,"  sc:country rdf:type sc:ItemList: ."),n.a.createElement("br",null),n.a.createElement("pre",null,"TotalValue rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :totalStudents rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :totalUKDomiciledStudents rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :studyMode rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :sex rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :ageGroup rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :disability rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :ethnicity rdf:type rdf:Property ."),n.a.createElement("br",null),n.a.createElement("pre",null,"  studyMode rdf:type sc:ItemList ."),n.a.createElement("pre",null,"  :sex rdf:type sc:ItemList ."),n.a.createElement("pre",null,"  :ageGroup rdf:type sc:ItemList ."),n.a.createElement("pre",null,"  :disability rdf:type sc:ItemList ."),n.a.createElement("pre",null,"  :ethnicity rdf:type sc:ItemList ."),n.a.createElement("pre",null,"  :totalStudents rdf:type sc:Number ."),n.a.createElement("pre",null,"  :totalUKDomiciledStudents rdf:type sc:Number ."),n.a.createElement("pre",null,"  :StudyMode rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  sc:courseMode rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :domicileLocation rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :domicileLocation rdf:type sc:ItemList ."),n.a.createElement("br",null),n.a.createElement("pre",null,"Sex rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :sex rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :value rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :sex rdf:type sc:Text ."),n.a.createElement("pre",null,"  :value rdf:type sc:Number ."),n.a.createElement("br",null),n.a.createElement("pre",null,"AgeGroup rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :group rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :value rdfs:domain :AgeGroup ."),n.a.createElement("pre",null,"  :group rdf:type sc:Text ."),n.a.createElement("br",null),n.a.createElement("pre",null,"Disability rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :status rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :value rdfs:domain :Disability ."),n.a.createElement("pre",null,"  :status rdf:type sc:Text ."),n.a.createElement("br",null),n.a.createElement("pre",null,"Ethnicity rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :ethnicity rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :value rdfs:domain :Ethnicity ."),n.a.createElement("pre",null,"  :ethnicity rdf:type sc:Text ."),n.a.createElement("br",null),n.a.createElement("pre",null,"DomicileLocation rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :domicile rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :totalDomiciles rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :studyLevel rdf:type rdf:Property ."),n.a.createElement("br",null),n.a.createElement("pre",null,"  domicile rdf:type sc:Text ."),n.a.createElement("pre",null,"  :totalDomiciles rdf:type sc:Number ."),n.a.createElement("pre",null,"  :studyLevel rdf:type sc:ItemList ."),n.a.createElement("br",null),n.a.createElement("pre",null,"StudyLevel rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  :level rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :value rdfs:domain :StudyLevel ."),n.a.createElement("pre",null,"  :level rdf:type sc:Text ."),n.a.createElement("br",null),n.a.createElement("pre",null,":Country rdf:type rdfs:Class ."),n.a.createElement("pre",null,"  sc:name rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :total rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :higherEducationProvider rdf:type rdf:Property ."),n.a.createElement("br",null),n.a.createElement("pre",null,"HigherEducationProvider rdf:type rdfs:Class ."),n.a.createElement("pre",null,"HigherEducationProvider rdfs:subClassOf sc:CollegeOrUniversity ."),n.a.createElement("pre",null,"  sc:name rdf:type rdf:Property ."),n.a.createElement("pre",null,"  hsprn:instid rdf:type rdf:Property ."),n.a.createElement("pre",null,"  hsprn:ukprn rdf:type rdf:Property ."),n.a.createElement("pre",null,"  hsprn:ukprn rdf:type hsprn:ukprntype ."),n.a.createElement("pre",null,"  :region rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :totalStudents rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :totalUKDomiciledStudents rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :studyMode rdf:type rdf:Property ."),n.a.createElement("pre",null,"  :region rdf:type sc:Text ."),n.a.createElement(g.a,{variant:"contained",style:{backgroundColor:"rgb(114, 114, 114)",color:"#fff"},onClick:function(){return e.history.push("/")}},"Back to Main Page"))})),P=function(){return n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",exact:!0,component:F}),n.a.createElement(o.a,{path:"/schema",exact:!0,component:U}),n.a.createElement(o.a,{component:F}))};i.a.render(n.a.createElement((function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(P,null)))}),null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.70b2da49.chunk.js.map