import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
class Mycoursel extends Component{
  constructor(props)
  {
    super(props)
    this.state ={
      items: [
        {
          src: img1,
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: img2,
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: img3,
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ],
      activeIndex: 0,
      animating: false
    }
  }

   next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex})
  }

   previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex})
  }

   goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({activeIndex: newIndex})
  }





  render()
  {

    var slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({animating: true})}
          onExited={() => this.setState({animating: false})}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width='100%' height='100%'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return(
      <Carousel
      activeIndex={this.state.activeIndex}
      next={this.next}
      previous={this.previous}
    >
      <CarouselIndicators items={this.state.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    </Carousel>
    );

  }

}
export default Mycoursel;