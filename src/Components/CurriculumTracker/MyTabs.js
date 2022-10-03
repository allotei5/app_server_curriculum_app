import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CourseType } from "./CourseType";
import { Container, Row, Col } from 'react-bootstrap'


const MyTabs = () => {
  return (
    <div className="tabs-div">
      <Tabs>
        <Container>
        <Row>
            <TabList className='tab-list'>
              
            <Tab className="tab-item cs-fs-2">All Courses</Tab>
            <Tab className="tab-item cs-fs-2">Completed Courses</Tab>
            <Tab className="tab-item cs-fs-2">Uncompleted Courses</Tab>
                
            </TabList>
            </Row>
          
          
            <TabPanel>
                <CourseType completeFilter={null} />
              </TabPanel>
              <TabPanel>
                <CourseType completeFilter={1} />
              </TabPanel>
              <TabPanel>
                <CourseType completeFilter={3} />
              </TabPanel>
          
          
        </Container>
      </Tabs>
    </div>
  );
}

export default MyTabs;
