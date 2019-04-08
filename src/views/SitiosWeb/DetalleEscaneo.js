import React from "react";
import { connect } from "react-redux";
import DetalleAppEscaneo from "./DetalleAppEscaneo";

import {
  Card,
  CardBody,
  CardHeader,
  Row
} from "reactstrap";

export class DetalleEscaneo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <i className="fa fa-tags" /> Detalles de escaneo
            <small className="text-muted"> fecha </small>
          </CardHeader>
          <CardBody>
            <Row>
                {this.props.wappescaneado.applications.map(app => {
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
    wappescaneado: state.wappescaneado
  };
};

export default connect(mapStateToProps)(DetalleEscaneo);
