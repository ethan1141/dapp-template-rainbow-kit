import { Col, Form, Row } from "react-bootstrap";
import { Detasker } from "../typechain-types";
import Text from "./Text";

export default function Skill(props: { skill: Detasker.SkillStruct }) {
  return (
    <div>
      <Text
        label="Name"
        onChange={(e) => {}}
        label2="url"
        onChange2={(e) => {}}
      />
      <Row>
        <Col md>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" />
        </Col>
      </Row>
    </div>
  );
}
