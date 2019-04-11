import React from "react";
import { connect } from "react-redux";
import DetalleAppEscaneo from "./DetalleAppEscaneo";

import {
  Card,
  CardBody,
  CardHeader,
  Row
} from "reactstrap";

export class DetalleSitioWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <i className="fa fa-tags" /> Detalles del Sitio Web
            <small className="text-muted"> fecha </small>
          </CardHeader>
          <CardBody>
            <Row>
                {this.props.detallesitioweb.applications.map(app => {
                  return <DetalleAppEscaneo key={app.name} {...app} />;
                })}
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detallesitioweb: state.detallesitioweb
  };
};

export default connect(mapStateToProps)(DetalleSitioWeb);
