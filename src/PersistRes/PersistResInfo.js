import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row } from "react-bootstrap";

function PersistResInfo({ formData, setFormData }) {
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
            value={formData.resName}
            onChange={(event) =>
              setFormData({ ...formData, resName: event.target.value })
            }
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
              value={formData.phoneNo}
              onChange={(event) =>
                setFormData({ ...formData, phoneNo: event.target.value })
              }
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
            value={formData.address1}
            onChange={(event) =>
              setFormData({ ...formData, address1: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            className="form-control"
            name="address2"
            value={formData.address2}
            onChange={(event) =>
              setFormData({ ...formData, address2: event.target.value })
            }
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
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
          <Form.Label>State</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="usstate"
            value={formData.usstate}
            onChange={(event) =>
              setFormData({ ...formData, usstate: event.target.value })
            }>
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
            value={formData.zip}
            onChange={(event) =>
              setFormData({ ...formData, zip: event.target.value })
            }
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
            value={formData.openhours}
            onChange={(event) =>
              setFormData({ ...formData, openhours: event.target.value })
            }>
            <option value="Choose...">Choose...</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formCloseHours" className="col col-sm-4">
          <Form.Label>Closing Hours</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="closehours"
            value={formData.closehours}
            onChange={(event) =>
              setFormData({ ...formData, closehours: event.target.value })
            }>
            <option value="Choose...">Choose...</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formCuisine" className="col col-sm-6">
          {/* provide a text label as a component */}
          <Form.Label>Restaurant Cuisine Type</Form.Label>
          <Form.Control
            className="form-control" //className- Bootstrap classes used
            type="cuisine" //type – declares the type of input we want
            name="resCuisine" //name – ID of the component used by JSX
            value={formData.resCuisine}
            onChange={(event) =>
              setFormData({ ...formData, resCuisine: event.target.value })
            }
          />
        </Form.Group>
      </Row>
    </Form>
  );
}


export default PersistResInfo;
