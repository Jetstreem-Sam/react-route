import React, { Component } from 'react'
import { Button, Card} from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export class Home extends Component {
  render() {
    return (
      <>
     <CarouselBox />

      <div className="card_home">
      <Card className='card_team'>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. 
          Turpis cursus in hac habitasse. Sapien faucibus et molestie ac.
          </Card.Text>
          <Button variant="primary">About team</Button>
        </Card.Body>
      </Card>

      <Card className='card_team'>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. 
          Turpis cursus in hac habitasse. Sapien faucibus et molestie ac.
          </Card.Text>
          <Button variant="primary">About team</Button>
        </Card.Body>
      </Card>

      <Card className='card_team'>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. 
          Turpis cursus in hac habitasse. Sapien faucibus et molestie ac.
          </Card.Text>
          <Button variant="primary">About team</Button>
        </Card.Body>
      </Card>
      </div>

      </>
    )
  }
}

export default Home