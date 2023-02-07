import Card from "react-bootstrap/Card";
import Menu from './menu.json';

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
        {Menu && Menu.map((menu) => {
            return (
              <div className="menuItems" key={menu.menuItem}>
                <Card.Title>{menu.menuItem}</Card.Title>
                <Card.Text>{menu.menuDesc}</Card.Text>
                <Card.Text>Price: {menu.menuPrice}</Card.Text>
              </div>
            );
          })}
      </Card>
    </div>
  );
}

export default PersistResReview;