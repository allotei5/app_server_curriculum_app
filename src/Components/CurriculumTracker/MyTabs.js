import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CourseType } from "./CourseType";

const MyTabs = () => {
  return (
    <div className="tabs-div">
      <Tabs className="">
        <TabList className="tab-list">
          <Tab className="tab-item" >All Courses</Tab>
          <Tab className="tab-item">Completed Courses</Tab>
          <Tab className="tab-item">Uncompleted Courses</Tab>
        </TabList>

        <TabPanel>
          <CourseType completeFilter={null} />
        </TabPanel>
        <TabPanel>
          <CourseType completeFilter={1} />
        </TabPanel>
        <TabPanel>
          <CourseType completeFilter={0} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
