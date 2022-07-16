import React, { Component } from 'react'
import { Col, Container, Nav, TabContainer, Tab, Row } from 'react-bootstrap'

export class About extends Component {
  render() {
    return (
      <div className='about'>
      <Container>
        <TabContainer id='ledt-tabs-example' defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Framworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Link</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://cdn.dribbble.com/users/372375/screenshots/7512000/figma_web_design_kit_-_landing_page_templates_2x.png" />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Turpis cursus in hac habitasse. Sapien faucibus et molestie ac. Lectus quam id leo in vitae turpis massa sed elementum. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img className='img23' src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png" />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Turpis cursus in hac habitasse. Sapien faucibus et molestie ac. Lectus quam id leo in vitae turpis massa sed elementum. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/38767/image-upload/website-template.jpg" />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Turpis cursus in hac habitasse. Sapien faucibus et molestie ac. Lectus quam id leo in vitae turpis massa sed elementum. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img className='fourthimg' src="https://www.theme-junkie.com/wp-content/uploads/Fastland-Figma-Landing-Page-Templates.jpg" />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Turpis cursus in hac habitasse. Sapien faucibus et molestie ac. Lectus quam id leo in vitae turpis massa sed elementum. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/38767/image-upload/website-template.jpg" />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Turpis cursus in hac habitasse. Sapien faucibus et molestie ac. Lectus quam id leo in vitae turpis massa sed elementum. 
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
      </div>
    )
  }
}

export default About