import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { Col, Form, FormControlProps, Row } from "react-bootstrap";

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;
export default function Text(props: {
  label: string;
  onChange: React.ChangeEventHandler<FormControlElement>;
  label2?: string;
  onChange2?: React.ChangeEventHandler<FormControlElement>;
}) {
  return (
    <Row className="my-3">
      <Col md>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type="text"
          tabIndex={-1}
          onChange={(e) => props.onChange(e)}
        />
      </Col>
      {props.label2 && (
        <Col md>
          <Form.Label>{props.label2}</Form.Label>
          <Form.Control
            type="text"
            tabIndex={-1}
            onChange={(e) => props.onChange2!(e)}
          />
        </Col>
      )}
    </Row>
  );
}
