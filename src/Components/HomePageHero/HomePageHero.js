import React from 'react'
import { HeroText } from '../HeroText/HeroText'
import { HeroIllustration } from '../HeroIllustration/HeroIllustration'
import { Col, Container, Row } from 'react-bootstrap'

export const HomePageHero = () => {
    return (
        <div className="">
            <Container className='py-5 d-flex align-items-center' style={{height: "85vh"}}>
                <Row>
                    <Col md={6}>
                        <HeroText />
                    </Col>
                    <Col className=''>
                        <HeroIllustration />
                    </Col>
                </Row>
                
            </Container>
            
            
        </div>
    )
}
