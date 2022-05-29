import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CourseType } from "./CourseType";

const MyTabs = () => {
  const [ state, setState ] = useState([])
  return (
    <div className="tabs-div">
      <Tabs className="">
        <TabList className="tab-list">
          <Tab className="tab-item" >All Courses</Tab>
          <Tab className="tab-item">Completed Courses</Tab>
          <Tab className="tab-item">Uncompleted Courses</Tab>
        </TabList>

        <TabPanel>
          <CourseType />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
