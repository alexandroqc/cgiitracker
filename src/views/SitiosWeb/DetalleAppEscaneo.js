import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Badge,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  FormText,
  InputGroupAddon,
  Button
} from "reactstrap";
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import numeral from 'numeral';

const DetalleAppEscaneo = ({ name, confidence, version, icon, website }) => (

    <Col sm="12" md="6" lg="4">
      <Card body outline color="secondary">
        <CardHeader>
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
