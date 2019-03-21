import React, { Component } from "react";
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
// import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";


class AgregarSitioWeb extends Component {
  constructor() {
    super();

    this.state = {
      url: '',
      protocol: '',
      domain: '',
      path: '',
      btn_disabled: true
    };
  }

  handleInputChange = e => {
    this.setState({
      url: e.target.value,
    });
    try {
      const myurl = new URL(e.target.value)
      this.setState({
        protocol: myurl.protocol,
        domain: myurl.hostname,
        path: myurl.pathname,
        btn_disabled: false
      });
    } catch (error) {
      console.log('no es url')
      this.setState({
        btn_disabled: true,
      });
    }

  }
  handleSubmit = (e) => {
    e.preventDefault();

    
    // this.handleReset();
  }

  handleReset = () => {
    this.setState({
      url: ''
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
                          type="text" id="input2-group2" 
                          name="input2-group2" 
                          placeholder="https://www.agetic.gob.bo" 
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.url}
                        />
                        <InputGroupAddon addonType="append">
                          <Button 
                            type="button" 
                            color="primary" 
                            disabled={this.state.btn_disabled}
                            onClick={this.handleSubmit}
                          > Dividir</Button>
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
                        />
                        <FormText color="muted">Path</FormText>
                      </Col>
                    </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AgregarSitioWeb;
