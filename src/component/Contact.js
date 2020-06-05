import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'
import ReactMapGL from 'react-map-gl';
import { PageHeader } from "react-bootstrap";
import Video1 from "../images/1.mp4";
import Video2 from "../images/2.mp4";
import Video3 from "../images/3.mp4";
import Video4 from "../images/4.mp4";
import Video5 from "../images/5.mp4";
import Video6 from "../images/6.mp4";



// import './style.css';

class MyComponent extends Component{
	state = {
		viewport: {
		  width: '100%',
		  height: "50vh",
		  longitude: 67.045547,
		  latitude: 24.826696,
		  zoom: 17
		
		}
	  };
render()
{
    return(
		<div>
        {/* // <Container>
        //     <Row>
        //         <Col xs="12" sm='6' md='6' lg='6'> */}
				<div style={{display: 'flex', flexDirection: "row"}}>
          			<video src={Video1} autoPlay="true" loop style={{width: "100%", height:"500px"}} />
          			<video src={Video2} autoPlay="true" loop style={{width: "100%", height:"500px"}} />
          			<video src={Video3} autoPlay="true" loop style={{width: "100%", height:"500px"}} />
          			<video src={Video4} autoPlay="true" loop style={{width: "100%", height:"500px"}} />
          			<video src={Video5} autoPlay="true" loop style={{width: "100%", height:"500px"}} />
          			<video src={Video6} autoPlay="true" loop style={{width: "100%", height:"500px"}} />
				</div>
				{/* // </Col>
                // <Col xs="12" sm='6' md='6' lg='6' style={{color:"#000"}}> */}
				<ReactMapGL
				{...this.state.viewport}
				mapboxApiAccessToken="pk.eyJ1IjoiaGF5eWF0IiwiYSI6ImNrYjB1cjZoMjBib3Ayem10OWt1eGZsaGgifQ.ofW3WOh2xDtETc_lHzZDVA"
				mapStyle="mapbox://styles/hayyat/ckb0uulq60hol1ipbcdeo84ot"
				onViewportChange={(viewport) => this.setState({viewport})}
				
	            />
        {/* //         </Col>
        //     </Row>
        // </Container> */}
		</div>


        
    )
}
}

export default MyComponent;
