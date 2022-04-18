import React from "react";
import Button from "../Button";
import CurriculumHomeCard from "./CurriculumHomeCard";

export default function SectionTwo() {
  return (
    <div className="section-two">
      <h3 className="sub-title">Personalised 4-year curriculum for all majors</h3>
      <div className="section-two-grid">
        <p className="headline-text">
          Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis,
          diam a arcu, mi aliquam.
        </p>
        <div style={{textAlign: "right"}}><Button ButtonName="Call to action" ButtonSrc="/" /></div>
      </div>
      <div className="section-two-curriculum-grid">
        <div className="">
          <CurriculumHomeCard Heading="something something" />
        </div>
        <div className="">
          <CurriculumHomeCard Heading="something something" />
        </div>
        <div className="">
          <CurriculumHomeCard Heading="something something" />
        </div>
      </div>
    </div>
  );
}
