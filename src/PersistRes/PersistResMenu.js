import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row, Button } from "react-bootstrap";

function PersistResMenu({ menuItems, setMenuItems }) {


  const handleAddItem = () => {
    setMenuItems([...menuItems, { menuItem: "", menuPrice: "", menuDesc: "" }]);
  };

    const handleRemoveFields = () => {
      const values = [...menuItems];
      if (values.length > 1) values.pop();
      setMenuItems(values);
    };

  const handleChange = (index, e) => {
    const updatedMenuItems = [...menuItems];
    if (e.target.name === 'menuPrice' && isNaN(e.target.value)){
      return;
    }
    updatedMenuItems[index][e.target.name] = e.target.value;
    setMenuItems(updatedMenuItems);
  };

  return (
    <Form className="container mt-3 mb-3">
      {menuItems.map((menu, index) => (
        <Row className="mb-3" key={index}>
          <Form.Group controlId="formItem" className="col col-sm-4">
            <Form.Label>Menu Item</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="menuItem"
              placeholder="Enter menu item name"
              value={menu.menuItem}
              onChange={(e) => handleChange(index, e)}></Form.Control>
          </Form.Group>
          <Form.Group controlId="formItemPrice" className="col col-sm-4">
            <Form.Label>Price</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                className="form-control"
                type="text"
                name="menuPrice"
                placeholder="Enter price"
                value={menu.menuPrice}
                onChange={(e) => handleChange(index, e)}></Form.Control>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formItemDesc" className="col col-sm-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="menuDesc"
              placeholder="Enter menu item description"
              value={menu.menuDesc}
              onChange={(e) => handleChange(index, e)}></Form.Control>
          </Form.Group>
        </Row>
      ))}
      <Button variant="primary" onClick={handleAddItem}>
        Add Item
      </Button>
      {/* button to remove iteration of the form */}
      {/* onClick calls upon handleRemoveFields to remove an iteration */}
      <Button variant="danger" onClick={handleRemoveFields}>
        Remove
      </Button>
    </Form>
  );
}

export default PersistResMenu;