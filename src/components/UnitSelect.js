import React from "react";
import { Form } from "react-bootstrap";

const UnitSelect = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control
        as="select"
        custom
        name={props.name}
        onChange={props.onChange}
      >
        <option selected="selected" disabled>
          -- Select a Unit of Length Measurement --
        </option>
        <optgroup label="Imperial">
          <option value="in">Inches</option>
          <option value="ft">Feet</option>
          <option value="yd">Yards</option>
        </optgroup>
        <optgroup label="Metric">
          <option value="mm">Millimeters</option>
          <option value="cm">Centimeters</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
        </optgroup>
      </Form.Control>
    </Form.Group>
  );
};

export default UnitSelect;
