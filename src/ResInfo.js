import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react"; //manage the form elements’ values

function ResInfo() {
  const [form, setForm] = useState({
    resName: "",
    phoneNo: "",
    openhours: "",
    closehours: "",
    resCuisine: "",
    address1: "",
    address2: "",
    city: "",
    usstate: "",
    zip: "",
  });

  //change the value of form attributes to the entered values
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault(); //Prevents any default events to take place.
    console.log(form); //Log all the entered values.
    resetButton(); //Clear the contents of the form UI.
  };

  const resetButton = () => {
    setForm({
      resName: "",
      phoneNo: "",
      openhours: "",
      closehours: "",
      resCuisine: "",
      address1: "",
      address2: "",
      city: "",
      usstate: "",
      zip: "",
    });
  };
  return (
    //using ‘container’ and ‘mb-3’ bootstrap classes
    <Form className="container mt-3 mb-3">
      {/* React-Bootstrap Row component to align particular components horizontally */}
      <Row className="mb-3">
        {/* Form.Group to group individual components into one component.  */}
        <Form.Group controlId="formResName" className="col col-sm-6">
          {/* provide a text label as a component */}
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control
            type="resName" //type – declares the type of input we want
            name="resName" //name – ID of the component used by JSX, must be the same as the value
            value={form.resName} //value – default value of component
            onChange={handleChange} //onChange – specifies the action to be taken when any change is made
            className="form-control" //className- Bootstrap classes used
          />
        </Form.Group>
        <Form.Group controlId="phone" className="col col-sm-6">
          <Form.Label>Phone Number</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">+1</InputGroup.Text>

            <Form.Control
              aria-label="Phone Number"
              type="phone"
              aria-describedby="basic-addon1"
              className="form-control"
              name="phoneNo"
              value={form.phoneNo}
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="address1"
            value={form.address1}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            className="form-control"
            name="address2"
            value={form.address2}
            onChange={handleChange}
            type="text"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formGridCity" className="col col-sm-4">
          <Form.Label>City</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
          <Form.Label>State</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="usstate"
            value={form.usstate}
            onChange={handleChange}>
            <option value="Choose...">Choose...</option>
            <option value="WA">WA</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridzip" className="col col-sm-4">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            className="form-control"
            type="zip"
            name="zip"
            value={form.zip}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formOpenHours" className="col col-sm-4">
          <Form.Label>Opening Hours</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="openhours"
            value={form.openhours}
            onChange={handleChange}>
            <option value="Choose...">Choose...</option>
            <option value="0">00:00</option>
            <option value="1">01:00</option>
            <option value="2">02:00</option>
            <option value="3">03:00</option>
            <option value="4">04:00</option>
            <option value="5">05:00</option>
            <option value="6">06:00</option>
            <option value="7">07:00</option>
            <option value="8">08:00</option>
            <option value="9">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
            <option value="24">24:00</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formCloseHours" className="col col-sm-4">
          <Form.Label>Closing Hours</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="closehours"
            value={form.closehours}
            onChange={handleChange}>
            <option value="Choose...">Choose...</option>
            <option value="0">00:00</option>
            <option value="1">01:00</option>
            <option value="2">02:00</option>
            <option value="3">03:00</option>
            <option value="4">04:00</option>
            <option value="5">05:00</option>
            <option value="6">06:00</option>
            <option value="7">07:00</option>
            <option value="8">08:00</option>
            <option value="9">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
            <option value="24">24:00</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formCuisine" className="col col-sm-6">
          {/* provide a text label as a component */}
          <Form.Label>Restaurant Cuisine Type</Form.Label>
          <Form.Control
            className="form-control" //className- Bootstrap classes used
            type="cuisine" //type – declares the type of input we want
            name="resCuisine" //name – ID of the component used by JSX
            value={form.resCuisine} //value – default value of component
            onChange={handleChange} //onChange – specifies the action to be taken when any change is made
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
          <Button
            type="reset"
            onClick={resetButton}
            className="me-4 btn btn-danger btn-lg btn-block">
            Reset
          </Button>

          <Link to="/ResMenu">
            <Button type="next" className="me-4 btn btn-lg btn-block">
              Next
            </Button>
          </Link>

          <Button
            type="submit"
            onClick={submitButton}
            className="me-4 btn btn-success btn-lg btn-block">
            Submit
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default ResInfo;
