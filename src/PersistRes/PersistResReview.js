import Card from "react-bootstrap/Card";

function PersistResReview() {
  return (
    <div>
      <Card>
        <Card.Header as="h1">resName</Card.Header>
        <Card.Body>
          <Card.Title>
            Address: address1, address2, city, usstate, zip
          </Card.Title>
          <Card.Text>Phone: phoneNo</Card.Text>
          <Card.Text>Hours: resHours</Card.Text>
          <Card.Text>Cuisine Type: resCuisine</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h3">Menu</Card.Header>
        <Card.Body>
          <Card.Title>menuItem</Card.Title>
          <Card.Text>menuPrice</Card.Text>
          <Card.Text>menuDescription</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}



export default PersistResReview;


/*Menu display:
Menu Item name: menuItem , Price: menuPrice
Description: menuDescription
//repeat until end of menu
 */
