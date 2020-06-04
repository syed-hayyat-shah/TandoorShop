import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'
import ReactMapGL from 'react-map-gl';
import { PageHeader } from "react-bootstrap";
import Video from "../images/vid.mp4";



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
          			<video src={Video} autoPlay="true" loop style={{width: "60%", height:"1000px"}} />
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
