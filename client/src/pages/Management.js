import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Management = () =>
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Task Management</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div>
            <h1>Task</h1>
            <p>Description</p>
          </div>
          <div>
            <h1>Task</h1>
            <p>Description</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>;

export default Management;
