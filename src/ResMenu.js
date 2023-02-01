import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react"; //manage the form elements’ values


const ResMenu = () => {
  //single state that holds an array object of data
  const [form, setForm] = useState([
    { menuItem: "", 
    menuPrice: "", 
    menuDesc: "" },
  ]);

  //handle change function to capture changes to input
  //compare event names when called upon below with onChange
  //then add the values to their respective keys in the object
  const handleChange = (index, event) => {
    const values = [...form];
    if (event.target.name === "menuItem") {
      values[index].menuItem = event.target.value;
    } else if (event.target.name === "menuPrice") {
      values[index].menuPrice = event.target.value;
    } else if (event.target.name === "menuDesc") {
      values[index].menuDesc = event.target.value;
    }

    //update the setForm data with those values
    setForm(values);
  };

  // adds form fields when called upon
  // add new object to array
  // update the state 
  // as we map the "form", a new field should be added  
  const handleAddFields = () => {
    const values = [...form];
    values.push({
      menuItem: "",
      menuPrice: "",
      menuDesc: "",
    });
    setForm(values);
  };

  // remove form fields when called upon unless there is only one left
  const handleRemoveFields = () => {
    const values = [...form];
    if (values.length > 1) values.pop();
    setForm(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents any default events to take place.
    console.log(form); //Log all the entered values.
  };

  return (
    <Form className="container mt-3 mb-3">
      {/* mapping the menu item data state within the form */}
      {form.map((data, i) => {
        return (
          <Row className="mb-3" key={i}>
            <Form.Group controlId="formItem" className="col col-sm-4">
              <Form.Label>Menu Item</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                name="menuItem"
                placeholder="Enter menu item name"
                value={data.menuItem}
                //upon input onChange will capture the data and send it to the handleChange function
                onChange={(event) => handleChange(i, event)}
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
                  value={data.menuPrice}
                  onChange={(event) => handleChange(i, event)}
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
                  value={data.menuDesc}
                  onChange={(event) => handleChange(i, event)}
                />
              </InputGroup>
            </Form.Group>
          </Row>
        );
      })}
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
      <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
          <Link to="/">
            <Button type="previous" className="me-4 btn btn-lg btn-block">
              Previous
            </Button>
          </Link>

          <Button
            type="submit"
            onClick={handleSubmit}
            className="me-4 btn btn-warning btn-lg btn-block"
          >
            Submit
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default ResMenu;
