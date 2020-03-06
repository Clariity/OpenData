import React, {useState, useEffect, useRef} from 'react';
import ApexChart from "react-apexcharts";
import { csv } from 'd3-request';
import { withRouter } from 'react-router-dom'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import './Home.css';

export default withRouter((props) => {
  const [category, setCategory] = useState('Age Group');
  const [universityIndex, setUniversityIndex] = useState(0); //will be the index/row not the name
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [labels, setLabels] = useState([]);
  const [series, setSeries] = useState([]);

  const options = {
    labels,
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
              formatter: function(value) {
                return addCommas(value)
              }
            },
            total: {
              show: true,
              color: '#ffffff',
              formatter: function(w) {
                return addCommas(w.config.series.reduce((a,b) => a + b,0));
              }
            }
          }
        }
      }
    },
    legend: {
      position: 'bottom',
      offsetY: 0
    }
  }

  const addCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    if(!dataLoaded) {
      csv("./data/dataset.csv", (d) => {
        setData(d)
        setDataLoaded(true)
      });
    }
  }, [setDataLoaded, dataLoaded])

  useEffect(() => {
    if(dataLoaded) {
      switch(category) {
        case "Age Group":
          setLabels(["20 and under", "21-24", "25-29", "30 and over", "Unknown"])
          setSeries([parseInt(data[universityIndex]['20 and under'],10),parseInt(data[universityIndex]['21-24'],10),parseInt(data[universityIndex]['25-29'],10), parseInt(data[universityIndex]['30 and over'],10), parseInt(data[universityIndex]['Unknown'],10)])
          break
        case "Disability Status":
          setLabels(["Known to have a disability", "No known disability"])
          setSeries([parseInt(data[universityIndex]['Known to have a disability'],10),parseInt(data[universityIndex]['No known disability'],10)])
          break
        case "Ethnicity":
          setLabels(["White", "Black", "Asian", "Other (including mixed)", "Not known"])
          setSeries([parseInt(data[universityIndex]['White'],10),parseInt(data[universityIndex]['Black'],10),parseInt(data[universityIndex]['Asian'],10), parseInt(data[universityIndex]['Other (including mixed)'],10), parseInt(data[universityIndex]['Not known'],10)])
          //colours are important to add carefully here
          break
        case "Domiciles: Full-time postgraduate (United Kingdom)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ftpuk Higher degree (research)'],10),parseInt(data[universityIndex]['ftpuk Higher degree (taught)'],10),parseInt(data[universityIndex]['ftpuk Other postgraduate'],10)])
          break
        case "Domiciles: Full-time postgraduate (Other EU)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ftpeu Higher degree (research)'],10),parseInt(data[universityIndex]['ftpeu Higher degree (taught)'],10),parseInt(data[universityIndex]['ftpeu Other postgraduate'],10)])
          break
        case "Domiciles: Full-time postgraduate (Non EU)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ftpneu Higher degree (research)'],10),parseInt(data[universityIndex]['ftpneu Higher degree (taught)'],10),parseInt(data[universityIndex]['ftpneu Other postgraduate'],10)])
          break
        case "Domiciles: Full-time postgraduate (Not Known)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ftpnk Higher degree (research)'],10),parseInt(data[universityIndex]['ftpnk Higher degree (taught)'],10),parseInt(data[universityIndex]['ftpnk Other postgraduate'],10)])
          break
        case "Domiciles: Full-time postgraduate (All)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ftpt Higher degree (research)'],10),parseInt(data[universityIndex]['ftpt Higher degree (taught)'],10),parseInt(data[universityIndex]['ftpt Other postgraduate'],10)])
          break
        case "Domiciles: Part-time postgraduate (United Kingdom)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ptpuk Higher degree (research)'],10),parseInt(data[universityIndex]['ptpuk Higher degree (taught)'],10),parseInt(data[universityIndex]['ptpuk Other postgraduate'],10)])
          break
        case "Domiciles: Part-time postgraduate (Other EU)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ptpeu Higher degree (research)'],10),parseInt(data[universityIndex]['ptpeu Higher degree (taught)'],10),parseInt(data[universityIndex]['ptpeu Other postgraduate'],10)])
          break
        case "Domiciles: Part-time postgraduate (Non EU)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ptpneu Higher degree (research)'],10),parseInt(data[universityIndex]['ptpneu Higher degree (taught)'],10),parseInt(data[universityIndex]['ptpneu Other postgraduate'],10)])
          break
        case "Domiciles: Part-time postgraduate (Not Known)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ptpnk Higher degree (research)'],10),parseInt(data[universityIndex]['ptpnk Higher degree (taught)'],10),parseInt(data[universityIndex]['ptpnk Other postgraduate'],10)])
          break
        case "Domiciles: Part-time postgraduate (All)":
          setLabels(["Higher degree (research)", "Higher degree (taught)", "Other postgraduate"])
          setSeries([parseInt(data[universityIndex]['ptpt Higher degree (research)'],10),parseInt(data[universityIndex]['ptpt Higher degree (taught)'],10),parseInt(data[universityIndex]['ptpt Other postgraduate'],10)])
          break
        case "Domiciles: Full-time undergraduate (United Kingdom)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ftuuk First degree'],10),parseInt(data[universityIndex]['ftuuk Other undergraduate'],10)])
          break
        case "Domiciles: Full-time undergraduate (Other EU)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ftueu First degree'],10),parseInt(data[universityIndex]['ftueu Other undergraduate'],10)])
          break
        case "Domiciles: Full-time undergraduate (Non EU)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ftuneu First degree'],10),parseInt(data[universityIndex]['ftuneu Other undergraduate'],10)])
          break
        case "Domiciles: Full-time undergraduate (Not Known)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ftunk First degree'],10),parseInt(data[universityIndex]['ftunk Other undergraduate'],10)])
          break
        case "Domiciles: Full-time undergraduate (All)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ftut First degree'],10),parseInt(data[universityIndex]['ftut Other undergraduate'],10)])
          break
        case "Domiciles: Part-time undergraduate (United Kingdom)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ptuuk First degree'],10),parseInt(data[universityIndex]['ptuuk Other undergraduate'],10)])
          break
        case "Domiciles: Part-time undergraduate (Other EU)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ptueu First degree'],10),parseInt(data[universityIndex]['ptueu Other undergraduate'],10)])
          break
        case "Domiciles: Part-time undergraduate (Non EU)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ptuneu First degree'],10),parseInt(data[universityIndex]['ptuneu Other undergraduate'],10)])
          break
        case "Domiciles: Part-time undergraduate (Not Known)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ptunk First degree'],10),parseInt(data[universityIndex]['ptunk Other undergraduate'],10)])
          break
        case "Domiciles: Part-time undergraduate (All)":
          setLabels(["First degree", "Other undergraduate"])
          setSeries([parseInt(data[universityIndex]['ptut First degree'],10),parseInt(data[universityIndex]['ptut Other undergraduate'],10)])
          break
        default: //case "Sex"
          setLabels(["Female", "Male", "Other"])
          setSeries([parseInt(data[universityIndex]['Female'],10),parseInt(data[universityIndex]['Male'],10),parseInt(data[universityIndex]['Other'],10)])
          //set appropriate colours too to help visualisation
          break
      }
    }
  }, [universityIndex, category, dataLoaded, data])

  const visRef = useRef()
  const textRef = useRef()
  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div>
      <div className='height-90 middle-text' ref={visRef}>
        <h5 className='chart-title'>Distribution of UK University Students 2015/16</h5>
        <h6 className='chart-title'>Category - {category}</h6>
        <ApexChart 
          options={options} 
          series={series} 
          type="donut"
          className="donut-chart"
        />
        { data !== [] && 
          <ExpansionPanel defaultExpanded={true} className='dropdown-panel'>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>Filter Selection</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <FormControl className='dropdown'>
                <InputLabel>University</InputLabel>
                <Select value={universityIndex} onChange={event => setUniversityIndex(event.target.value)}>
                  {data.map((row, index) => {
                    return <MenuItem key={index} value={index}>{row['HE provider']}</MenuItem>
                  })}
                </Select>
              </FormControl>
              <FormControl className='dropdown'>
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={event => setCategory(event.target.value)}>
                  <MenuItem value='Sex'>Sex</MenuItem>
                  <MenuItem value='Age Group'>Age group</MenuItem>
                  <MenuItem value='Disability Status'>Disability status</MenuItem>
                  <MenuItem value='Ethnicity'>Ethnicity</MenuItem>
                  <MenuItem value='Domiciles: Full-time postgraduate (United Kingdom)'>Domiciles: Full-time postgraduate (United Kingdom)</MenuItem>
                  <MenuItem value='Domiciles: Full-time postgraduate (Other EU)'>Domiciles: Full-time postgraduate (Other EU)</MenuItem>
                  <MenuItem value='Domiciles: Full-time postgraduate (Non EU)'>Domiciles: Full-time postgraduate (Non EU)</MenuItem>
                  <MenuItem value='Domiciles: Full-time postgraduate (Not Known)'>Domiciles: Full-time postgraduate (Not Known)</MenuItem>
                  <MenuItem value='Domiciles: Full-time postgraduate (All)'>Domiciles: Full-time postgraduate (All)</MenuItem>
                  <MenuItem value='Domiciles: Part-time postgraduate (United Kingdom)'>Domiciles: Part-time postgraduate (United Kingdom)</MenuItem>
                  <MenuItem value='Domiciles: Part-time postgraduate (Other EU)'>Domiciles: Part-time postgraduate (Other EU)</MenuItem>
                  <MenuItem value='Domiciles: Part-time postgraduate (Non EU)'>Domiciles: Part-time postgraduate (Non EU)</MenuItem>
                  <MenuItem value='Domiciles: Part-time postgraduate (Not Known)'>Domiciles: Part-time postgraduate (Not Known)</MenuItem>
                  <MenuItem value='Domiciles: Part-time postgraduate (All)'>Domiciles: Part-time postgraduate (All)</MenuItem>
                  <MenuItem value='Domiciles: Full-time undergraduate (United Kingdom)'>Domiciles: Full-time undergraduate (United Kingdom)</MenuItem>
                  <MenuItem value='Domiciles: Full-time undergraduate (Other EU)'>Domiciles: Full-time undergraduate (Other EU)</MenuItem>
                  <MenuItem value='Domiciles: Full-time undergraduate (Non EU)'>Domiciles: Full-time undergraduate (Non EU)</MenuItem>
                  <MenuItem value='Domiciles: Full-time undergraduate (Not Known)'>Domiciles: Full-time undergraduate (Not Known)</MenuItem>
                  <MenuItem value='Domiciles: Full-time undergraduate (All)'>Domiciles: Full-time undergraduate (All)</MenuItem>
                  <MenuItem value='Domiciles: Part-time undergraduate (United Kingdom)'>Domiciles: Part-time undergraduate (United Kingdom)</MenuItem>
                  <MenuItem value='Domiciles: Part-time undergraduate (Other EU)'>Domiciles: Part-time undergraduate (Other EU)</MenuItem>
                  <MenuItem value='Domiciles: Part-time undergraduate (Non EU)'>Domiciles: Part-time undergraduate (Non EU)</MenuItem>
                  <MenuItem value='Domiciles: Part-time undergraduate (Not Known)'>Domiciles: Part-time undergraduate (Not Known)</MenuItem>
                  <MenuItem value='Domiciles: Part-time undergraduate (All)'>Domiciles: Part-time undergraduate (All)</MenuItem>
                </Select>
              </FormControl>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        }
      </div>
      <div className="arrow bounce">
        <ArrowDownwardIcon className="arrow-icon" onClick={() => scrollTo(textRef)}/>
      </div>
      <div ref={textRef} className='text-area'>
        <h2><b>Data Cleaning</b></h2>
        <h3><b>Methodology</b></h3>
        <p>The tool used for finding errors within the dataset and fixing them was <a href="https://openrefine.org/">OpenRefine</a>. This provided the ability to perform facets on text, word and numerical values to identify any erroneous data to be corrected. By performing these facets on each column, all the unique values could be shown and erroneous values easily identifiable.</p>
        
        <h3><b>Errors and Solutions</b></h3>
        <h4>Errors Found in Sheet 1</h4>
        <p>Cell B182 gave value "ABCDEFGHTY" for UKPRN. This was corrected to "10008026" when comparing with the value for St Mary's University College in Sheet 2 (Text Facet).</p>
        <p>Cell D172 gave value "The University of St Andrews Upon Hull" for HE provider. This University does not exist and was corrected to "The University of St Andrews" as also shown in Sheet 2 (Word Facet).</p>
        <p>Cell AK11 gave value "Total other EEC domicile" as a column header for part-time undergraduate's in other European Union domiciles. This was corrected to be "Total other EU domicile" to be consistent with the other "Other European Union domicile" column headers (Word Facet).</p>
        <p>Cell BX145 gave value 157575575775 for total England students in other European domiciles taking their first degree. This was corrected to 1575 as these were the 4 leading digits and also equalled the sum of the precending values in the column (Numeric Facet).</p>
        <p>Cells CC104, CC105, CC106, CJ64, CJ182 gave values "NIL", "NULL", "ZERO", "nil", and "fifteen" respectively. These are inconsistent numerical representations compared to the rest of the dataset. Corrected to correct numerical formats as 0, 0, 0, 0, and 15 respectively (Numeric Facet).</p>

        <h4>Errors Found in Sheet 2</h4>
        <p>Cell B101 gave value "32XDFRG87" for UKPRN. This was corrected to "10005127" when comparing with the value for Plymouth College of Art in Sheet 1 (Text Facet).</p>
        <p>Cell C141 gave value "NARNIA" for Region of HE provider. This was corrected to "EAST" when comparing with the value for Writtle University College in Sheet 1 (Text Facet).</p>
        <p>Cell D45 gave value "University of Derbyshire" for HE provider. This was corrected to "University of Derby" when comparing with the value from sheet 1 (Word Facet).</p>
        <p>Cell D99 gave value "Oxford  Uni at Brookes" (with additional spacing that isn't shown in this justified text) for HE provider, This was corrected to "Oxford Brookes University" when comparing with the value from sheet 1 (Word Facet).</p>
        <p>Cell L55 gave value "NAN", This was corrected to 0 (Numeric Facet).</p>
        <p>Cell U40 gave value "29430XYYTY" for Total Students at Coventry University. This was corrected to the value 29430 (Numeric Facet).</p>

        <h3><b>Additional Manipulation</b></h3>
        <p>Empty columns between sections in sheet 1 were removed.</p>
        <p>All blank lines were removed.</p>
        <p>Metadata such as the sheet title, links and additional text at the bottom of the dataset were removed.</p>
        <p>Special characters †, §§ and ‡ were removed.</p>
        <p>Sheet 1 and 2 were merged into one file by appending columns E to U from sheet 2 onto the right end of sheet 1. This enabled all information for each HE provider to be in one row and not spread over two sheets.</p>
        <p>The merged dataset was converted to a .csv file format. This required all column headings to fit onto one line at the top. Therefore, duplicate headings such as "Higher degree (research)" were prepended with a unique tag to identify which study mode (i.e Full-time postgraduate) and domicile location (i.e United Kingdom domicile) it belonged to.</p>
        <p>Some rows were reordered so that all country totals were at the top for a better user experience when used with the data visualisation listings.</p>

        <h2><b>Data Modelling</b></h2>
        <p>The data was modelled using JSON-LD. The "@context" refers to a custom ontology schema that was created for this dataset. The schema defines the classes and other ontologies used to create the linked data model.</p>
        <p>Classes were defined to describe new object types such as StudentStatistics, StudyMode and DomicileLocation. These class definitions also included properties that belong to them as reflected in the JSON-LD.</p>
        <p>Throughout the schema, other ontologies were used and referenced. The main ontology utilised was <a href='https://schema.org/'>schema.org</a> for common classes and properties such as Number, Text and name.</p>
        <p><a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#">RDF</a> and <a href="http://www.w3.org/2000/01/rdf-schema#">RDFs</a> were commonly used throughout. Additionally <a href="https://www.hesa.ac.uk/collection/c08019/schemahtml/">INSTID</a> and <a href="https://www.hesa.ac.uk/collection/c19051/schemahtml/">UKPRN</a> properties referenced ontologies from <a href="https://www.hesa.ac.uk">HESA</a>.</p>
        <Button variant="contained" style={{backgroundColor: "rgb(114, 114, 114)", color: "#fff"}} onClick={() => props.history.push('/schema')}>
          Click Here For Schema
        </Button>

        <h2><b>Data Visualisation</b></h2>
        <h3><b>Audience and Use Case</b></h3>
        <p>The purpose of this visualisation is to be able to query the university data from the dataset in simple way and for the results to be presented in a visually appealing format.</p>
        <p>The visualisation was designed for an audience that wishes to know about the numbers of students per category for UK universities and countries. The visualisation enables users to select a UK country or university and then the category they wish to view the statistics for. This will show the distribution of students within the category as well as the total number of students.</p>
        <p>This can be used for cases where a user wishes to quickly find the proportion of students that are female at a specific university for example.</p>
        <h3><b>Interaction and Functionality</b></h3>
        <p>The visualisation provides a filter section that allows you to select the UK country or university of your choice from a dropdown list which you would like the statistics for. You can also select the category you would like statistics for such as Age Group or Domicile numbers. This enables the whole dataset to be explored.</p>
        <p>The visualisation dynamically loads the data and re-renders the chart when categories and universities are selected. It provides an animation to show the category sizes resizing upon a new selection.</p>
        <p>The legend labels can be hovered over to highlight specific sections within the visualisation. Sections on the visualisation can also be hovered over to reveal a tooltip as well as the total number of students for that section. This is highlighted in the centre of the visualisation as well as on the tooltip.</p>
        <p>The title of the visualisation also changes to correspond with the data being shown.</p>
        <h3><b>Additional Details</b></h3>
        <p>The visualisation is additionally enriched by calculating percentages of the total number of students in the category and displaying them on the section of the chart instead of just showing the pure numbers.</p>
        <p>The visualisation was developed using the <a href="https://apexcharts.com/">ApexCharts.js</a> library with some custom formatting code to get the desired effects for the user. Similarly to D3.js, this library draws SVG components onto the canvas but is more compatible with the framework used to produce this site as it doesn't try to compete with the framework to control the DOM like D3.js does.</p>
      </div>
    </div>
  );
})