import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import BNavbar from "../components/Navber";
import { links } from "../metadata";

import "../scripts/interact";
import { Col, Row } from "react-bootstrap";
import { detasker } from "../scripts/interact";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [userCount, setUserCount] = useState(-1);
  const [jobCount, setJobCount] = useState(-1);
  const [freelancers, setFreelancers] = useState(-1);

  useEffect(() => {
    (async () => {
      setUserCount((await detasker.getUserCount()).toNumber());
      setJobCount((await detasker.vars()).jobCount.toNumber());
      setFreelancers((await detasker.vars()).freelanceCount.toNumber());
    })();
  }, []);
  return (
    <main>
      <Row>
        <Col md>
          <p>Detasker</p>
          <p>{process.env.usp}</p>
        </Col>
      </Row>
      <Row>
        <Col md>
          <h2>User Count: {userCount != -1 ? userCount : "Loading..."}</h2>
        </Col>
        <Col md>
          <h2>Job/s on offer: {jobCount != -1 ? jobCount : "Loading..."}</h2>
        </Col>
        <Col md>
          <h2>Freelancers: {freelancers != -1 ? freelancers : "Loading..."}</h2>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
