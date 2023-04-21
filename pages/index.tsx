import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import BNavbar from "../components/Navber";
import { links } from "../metadata";

import "../scripts/interact";
import { Col, Row } from "react-bootstrap";
import { detasker } from "../scripts/interact";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <main>
      <Row>
        <Col md>
          <p>Name</p>
          <p>{process.env.usp}</p>
        </Col>
      </Row>
      <Row>
        <Col md>
          <p>CONTENT</p>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
