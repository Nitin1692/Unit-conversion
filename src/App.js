import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UnitSelect from "./components/UnitSelect";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Qty from "js-quantities";

export default function App() {
  const [inputValue, updateInputValue] = useState();
  const [unit1, setUnit1] = useState();
  const [unit2, setUnit2] = useState();
  const [result, setResult] = useState();
  const [notificationClass, setNotificationClass] = useState();

  const handleInputChange = (event) => {
    const val = event.target.value;
    updateInputValue(val);
  };

  const unitSelect = (event) => {
    const unit = event.target.value;
    const name = event.target.name;
    if (name === "To") {
      setUnit2(unit);
    } else if (name === "From") {
      setUnit1(unit);
    }
  };

  const conversion = () => {
    if (inputValue !== undefined) {
      if (unit1 !== undefined && unit2 !== undefined) {
        const qtyString = inputValue + unit1;
        const qty = new Qty(qtyString);
        const resultNum = qty.to(unit2);
        const result = inputValue + unit1 + "  is equal to " + resultNum;
        setNotificationClass("result");
        setResult(result);
      } else {
        setNotificationClass("invalidResult");
        setResult("Please select both units!");
      }
    } else {
      setNotificationClass("invalidResult");
      setResult("Please enter an amount to convert");
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Units of Length Measurement Converter</h1>
          </Col>
        </Row>
        <Form>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <UnitSelect name="From" onChange={unitSelect} />
            </Col>
            <Col>
              <UnitSelect name="To" onChange={unitSelect} />
            </Col>
          </Row>
        </Form>
        <Row>
          <Col>
            <Button onClick={conversion}>CONVERT</Button>
          </Col>

          <Col>
            <span className={notificationClass}>{result}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
