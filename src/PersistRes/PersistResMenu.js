import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row, Button, Col } from "react-bootstrap";

function PersistResMenu({ formData, setFormData }) {
  // adds form fields when called upon
  // add new object to array
  // update the state
  // as we map the "form", a new field should be added
  const handleAddFields = () => {
    const values = [...formData];
    values.push({
      menuItem: "",
      menuPrice: "",
      menuDesc: "",
    });
    setFormData(values);
  };

  // remove form fields when called upon unless there is only one left
  const handleRemoveFields = () => {
    const values = [...formData];
    if (values.length > 1) values.pop();
    setFormData(values);
  };

  return (
    <Form className="container mt-3 mb-3">
      <Row className="mb-3">
        <Form.Group controlId="formItem" className="col col-sm-4">
          <Form.Label>Menu Item</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="menuItem"
            placeholder="Enter menu item name"
            value={formData.menuItem}
            onChange={(e) => {
              setFormData({ ...formData, menuItem: e.target.value });
            }}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formItemPrice" className="col col-sm-4">
          <Form.Label>Price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              className="form-control"
              type="text"
              name="menuPrice"
              placeholder="Enter Item Price"
              value={formData.menuPrice}
              onChange={(e) => {
                setFormData({ ...formData, menuPrice: e.target.value });
              }}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formMenuDesc" className="col col-sm-4">
          <Form.Label>Menu Item Description</Form.Label>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="Menu Description"
              className="form-control"
              placeholder="Menu item description"
              name="menuDesc"
              value={formData.menuDesc}
              onChange={(e) => {
                setFormData({ ...formData, menuDesc: e.target.value });
              }}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Col className="pt-3 d-flex justify-content-between">
          {/* button to add another iteration of the form */}
          {/* onClick event calls on handleAddFields to add another iteration of menu item fields */}
          <Button variant="success" onClick={handleAddFields}>
            Add More
          </Button>
          {/* button to remove iteration of the form */}
          {/* onClick calls upon handleRemoveFields to remove an iteration */}
          <Button variant="danger" onClick={handleRemoveFields}>
            Remove
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default PersistResMenu;
