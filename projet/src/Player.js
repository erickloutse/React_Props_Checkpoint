import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ nom, equipe, nationalite, numeroMaillot, age, imageUrl }) => {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-md-4 mb-4">
          <Card className="custom-card" style={{ width: "18rem" }}>
            <Card.Img className="custom-image" variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{nom}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {equipe}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {nationalite}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {numeroMaillot}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{age}</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Player;
