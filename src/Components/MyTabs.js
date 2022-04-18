import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function MyTabs() {
  return (
    <div className="tabs-div">
      <Tabs className="">
        <TabList className="tab-list">
          <Tab className="tab-item" >All Courses</Tab>
          <Tab className="tab-item">Completed Courses</Tab>
          <Tab className="tab-item">Uncompleted Courses</Tab>
        </TabList>

        <TabPanel>
          <h2>Humanities and Social Science</h2>
          <div className="course-tracker-courses">
            <div className="">
              {/* <h3 className="headline-text">Quantum Computing</h3> */}
              <p className="headline-text">Quantum Computing</p>
            </div>
            <div className="">
              <h3 className="headline-text ">Credits: 1</h3>
            </div>
            <div className="courses">
              <label className="checkbox-label">
                  <input type="checkbox"/>
                  <span className="checkbox-custom"></span>
                  Completed
                  {/* <div class="input-title">Completed</div> */}
                </label>
            </div>
            
            <select className="select-input">
              <option selected disabled>Grades</option>
            </select>
          </div>
          <div className="course-tracker-courses">
            <div className="">
              {/* <h3 className="headline-text">Quantum Computing</h3> */}
              <p className="headline-text">Quantum Computing</p>
            </div>
            <div className="">
              <h3 className="headline-text ">Credits: 1</h3>
            </div>
            <div className="courses">
              <label className="checkbox-label">
                  <input type="checkbox"/>
                  <span className="checkbox-custom"></span>
                  Completed
                  {/* <div class="input-title">Completed</div> */}
                </label>
            </div>
            
            <select className="select-input">
              <option selected disabled>Grades</option>
            </select>
          </div>
          <div className="course-tracker-courses">
            <div className="">
              {/* <h3 className="headline-text">Quantum Computing</h3> */}
              <p className="headline-text">Quantum Computing</p>
            </div>
            <div className="">
              <h3 className="headline-text ">Credits: 1</h3>
            </div>
            <div className="courses">
              <label className="checkbox-label">
                  <input type="checkbox"/>
                  <span className="checkbox-custom"></span>
                  Completed
                  {/* <div class="input-title">Completed</div> */}
                </label>
            </div>
            
            <select className="select-input">
              <option selected disabled>Grades</option>
            </select>
          </div>
          <div className="course-tracker-courses">
            <div className="">
              {/* <h3 className="headline-text">Quantum Computing</h3> */}
              <p className="headline-text">Quantum Computing</p>
            </div>
            <div className="">
              <h3 className="headline-text ">Credits: 1</h3>
            </div>
            <div className="courses">
              <label className="checkbox-label">
                  <input type="checkbox"/>
                  <span className="checkbox-custom"></span>
                  Completed
                  {/* <div class="input-title">Completed</div> */}
                </label>
            </div>
            
            <select className="select-input">
              <option selected disabled>Grades</option>
            </select>
          </div>
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
