import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HomeCourseTrackerIllustration } from './HomeCourseTrackerIllustration'
import { HomeCourseTrackerText } from './HomeCourseTrackerText'

export const HomeCourseTrackerHero = () => {
    return (
        <div className="">
            <Container className='py-5 d-flex align-items-center' style={{height: "85vh"}}>
                <Row>
                    <Col md={6}>
                        <HomeCourseTrackerIllustration />
                    </Col>
                    <Col>
                        <HomeCourseTrackerText />
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}
