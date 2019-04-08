import React from "react";
import { Card, CardBody, CardHeader, Col, Badge, CardImg } from "reactstrap";

const DetalleAppEscaneo = ({ name, confidence, version, icon, website }) => (
  <Col sm="12" md="6" lg="4">
    <Card body outline color="secondary">
      <CardHeader>
        <CardImg
          top
          width="30%"
          src={process.env.REACT_APP_API + "/media/icons/" + icon}
          className="img-avatar img-thumbnail"
          style={{ maxHeight: "32px", maxWidth: "32px" }}
          alt=""
        />
        {name}
        <div className="card-header-actions">
          <Badge pill color="danger" className="float-right">
            {confidence}
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <h6>Version: {version}</h6>
        <a href={website}>{website}</a>
      </CardBody>
    </Card>
  </Col>
);

export default DetalleAppEscaneo;
