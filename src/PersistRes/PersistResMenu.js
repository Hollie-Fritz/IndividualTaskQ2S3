import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row } from "react-bootstrap";

function PersistResMenu({ formData, setFormData }) {

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
         }}
            ></Form.Control>
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
  </Form>
  );
}

export default PersistResMenu;
