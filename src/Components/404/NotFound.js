import './NotFound.css';
import NotFoundIllustration from '../../Images/page_not_found.svg'
import { Col, Container, Row } from 'react-bootstrap'


import React from 'react'
import Button from '../Button';

const NotFound = () => {
  return (
    <Container className='py-5'>
        <div style={{display: "grid", gridTemplateColumns: "1fr", justifyItems: "center"}}>
            <div className='text-center'>
                <img src={NotFoundIllustration} width="70%" alt="page not found" />
            </div>
            <div className='text-center'>
                <h1 className='cs-fs-1 fw-bolder my-4' style={{color: "#554343"}}>404 Page Not Found</h1>
                <Button ButtonName="Back To Home" ButtonStyle="button primary-button" ButtonSrc="/" />
            </div>
        </div> 
    </Container>
  )
}

export default NotFound