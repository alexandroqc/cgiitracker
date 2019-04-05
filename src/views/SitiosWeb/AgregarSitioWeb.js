import React, { Component } from "react";
import { connect } from "react-redux";
import { createSitioWeb } from "../Redux/actions/sitioWebActions";
import { actualizarWappalyzerEscaneado } from "../Redux/actions/index";
// import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
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
import { AppSwitch } from "@coreui/react";
// import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import axios from "axios";
import DetalleEscaneo from "./DetalleEscaneo";

class AgregarSitioWeb extends Component {
  constructor() {
    super();

    this.state = {
      url: "",
      protocol: "",
      domain: "",
      path: "",
      btn_disabled: true,
      exist_scanned_data: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + this.props.auth.login.token
    };

    const data = {
      scheme: this.state.protocol,
      netloc: this.state.domain,
      path: this.state.path
    };

    axios
      .post(process.env.REACT_APP_API + '/api/v1/page/urlinfo/', data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        // dispatch({type: FOUND_USER, data: response.data[0]})
      })
      .catch(error => {
        console.log(error);
        // dispatch({type: ERROR_FINDING_USER})
      });
    this.props.history.push("/");
  };

  handleScan = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + this.props.auth.login.token
    };
    const uri = encodeURIComponent(
      this.state.protocol + "/" + this.state.domain + this.state.path
    );
    console.log(uri);
    axios
      .get(process.env.REACT_APP_API + '/api/v1/page/search/' + uri, {
        headers: headers
      })
      .then(response => {
        console.log(response.data);
        this.props.actualizarWappalyzerEscaneado(response.data);
        // response.data.results.map((sitioweb) => this.props.adicionarSitioWeb(sitioweb));
        // response.data.results.map((sitioweb) => console.log(sitioweb))
        this.setState({
          exist_scanned_data: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = e => {
    this.setState({
      url: e.target.value
    });
    try {
      const myurl = new URL(e.target.value);
      this.setState({
        protocol: myurl.protocol,
        domain: myurl.hostname,
        path: myurl.pathname,
        btn_disabled: false
      });
    } catch (error) {
      this.setState({
        protocol: "",
        domain: "",
        path: "",
        btn_disabled: true
      });
    }
  };

  handleReset = () => {
    this.setState({
      url: ""
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Agregar Sitio Web
                <small className="text-muted"> ingrese URI </small>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">URI</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <InputGroup>
                        <Input
                          type="text"
                          id="input2-group2"
                          name="input2-group2"
                          placeholder="https://www.agetic.gob.bo"
                          onChange={event => this.handleInputChange(event)}
                          value={this.state.url}
                        />
                        <InputGroupAddon addonType="append">
                          <AppSwitch
                            className={"mx-1"}
                            variant={"3d"}
                            color={"success"}
                            size={"lg"}
                            // checked
                          />
                          <Button
                            type="button"
                            color="primary"
                            disabled={this.state.btn_disabled}
                            onClick={this.handleScan}
                          >
                            {" "}
                            Escanear
                          </Button>
                          <Button
                            type="button"
                            color="primary"
                            disabled={this.state.btn_disabled}
                            onClick={this.handleSubmit}
                          >
                            {" "}
                            Registrar
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                      <FormText color="muted">Ingrese URI</FormText>
                    </Col>
                    <Col xs="12" md="4">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Protocolo"
                        value={this.state.protocol}
                        readOnly
                      />
                      <FormText color="muted">Protocolo</FormText>
                    </Col>
                    <Col xs="12" md="4">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Dominio"
                        value={this.state.domain}
                        readOnly
                      />
                      <FormText color="muted">Dominio</FormText>
                    </Col>
                    <Col xs="12" md="4">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Path"
                        value={this.state.path}
                        readOnly
                      />
                      <FormText color="muted">Path</FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            {this.state.exist_scanned_data && <DetalleEscaneo />}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createSitioWeb: sitioweb => dispatch(createSitioWeb(sitioweb)),
    actualizarWappalyzerEscaneado: wappescaneado =>
      dispatch(actualizarWappalyzerEscaneado(wappescaneado))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgregarSitioWeb);
