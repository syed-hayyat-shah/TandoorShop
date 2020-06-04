import React, { Component } from 'react';
import bgImage1 from '../images/img1.jpg' 
class Card extends Component {

    render() {
    return (
    // <h1>card</h1>

<section className="ftco-section bg-dark">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4" style={{color:"#fff"}}>Hot Pizza Meals</h2>
            <p style={{color:"#fff"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
    	</div>
    	<div className="container-wrap">
    		<div className="row no-gutters d-flex">
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Italian Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
    						<p className="price" ><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Greek Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Caucasian Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>

    			<div className="col-lg-4 d-flex ftco-animate" >
    				<div className="services-wrap d-flex" >
    					<a href="#" className="img order-lg-last" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4" >
    						<h3 style={{color:"#f2b200"}}>American Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
    						<p className="price" ><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Tomatoe Pie</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Margherita</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>

    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Our Menu Pricing</h2>
            <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
            <p className="mt-5" style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        {/* <div className="row">
        	<div className="col-md-6">
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Italian Pizza</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Hawaiian Pizza</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Greek Pizza</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Bacon Crispy Thins</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        	</div>

        	<div className="col-md-6">
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Hawaiian Special</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Ultimate Overload</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Bacon Pizza</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        		<div className="pricing-entry d-flex ftco-animate">
        			<div className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></div>
        			<div className="desc pl-3">
	        			<div className="d-flex text align-items-center">
	        				<h3><span>Ham &amp; Pineapple</span></h3>
	        				<span className="pr      			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
	        		</div>
        		</div>
        	</div>
        </div> */}
    	</div>
    </section>    );
  }
}


export default Card;
