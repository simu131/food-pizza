import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import {bannerData} from '../static-data/bannerData'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Homepage() {

    console.log('bannerData', bannerData)
    return (
        <div>
            <Carousel>
                {
                    bannerData && bannerData.map((item, i) => (
                            <Carousel.Item key={i} interval={1000}>
                                <img className='banner' src={item.image} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>{item.label}</h3>
                                    <p>{item.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    )
                )
        }
            </Carousel>
         


    <Row xs={1} md={4} className="g-4">
      {  bannerData &&  bannerData.map((item, i) =>(
        <Col key={i}>
          <Card className='card'>
            
            <Card.Img className='card-image' variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
           
          </Card>
        </Col>
      ))}
    </Row>
 
        </div>
    );
}

export default Homepage;