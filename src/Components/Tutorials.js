import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Iframe from "react-iframe";
import { UserContext } from "../Context/UserContext";

const Tutorials = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <Row>
        <Col>
        {(currentUser?.user_role == 1 ||
            currentUser?.permissions?.user_permission_id == 1) && (
            <div className="my-5">
              <h1>Admin Tutorial</h1>
              <Iframe
                url="https://www.youtube.com/embed/JQ8cz3OjKvg"
                width="100%"
                height="600"
                id="myId"
                className="mb-5"
                display="initial"
                position="relative"
              />
            </div>
          )}
          
          <h1 className="mt-5">Student Tutorial</h1>
          <Iframe
            url="https://www.youtube.com/embed/70ZRzhhknpE"
            width="100%"
            height="600"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
          
        </Col>
      </Row>
    </Container>
  );
};

export default Tutorials;
