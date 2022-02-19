import React from "react";

import { Container, Table } from "react-bootstrap";

export default function WorkExp() {
  return (
    <Container className="resume__comp" id="workExp">
      <div className="resume__comp-header-bg">
        <div className="resume__comp-header-margin"></div>
        <h3 className="resume__comp-title">Work Experience</h3>
      </div>
      <div className="resume__comp-body-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Organisation</th>
              <th>Date</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Department of Social Services</td>
              <td>July 2021 - Current</td>
              <td>Funding Arangement Manager</td>
            </tr>
            <tr>
              <td>National Disability Insurance Agency</td>
              <td>August 2018 - July 2021</td>
              <td>Senior Case Officer</td>
            </tr>
            <tr>
              <td>Department of Education and Training</td>
              <td>May 2018 - August 2018</td>
              <td>Project Officer</td>
            </tr>

            <tr>
              <td>Aged Care Complaints Commissioner</td>
              <td>August 2015 - May 2018</td>
              <td>Senior Case Officer</td>
            </tr>

            <tr>
              <td>Various</td>
              <td>Pre August 2015</td>
              <td>Various gov comms and media roles</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
