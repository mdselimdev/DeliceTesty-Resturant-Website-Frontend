import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Reservation.css";

const Reservation = () => {
  return (
    <>
      <div className="reservation-main py-5">
        <Container>
          <h1 style={{ color: "#4b4741" }} className="littleabout_title">
            MAKE A RESERVATION
          </h1>
          <h4 className="littleabout_para">
            Book a table online. Leads will reach in your email.
          </h4>
          <div className="bar_div_main mb-5">
            <div className="bar_div_inner"></div>
          </div>
          <div className="border">
            <form action="#">
              <Row>
                <Col md={4}>
                  <input type="date" />
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Reservation;
