import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { connect } from "react-redux";

import { detalleSitioWeb } from "../Redux/actions";

import DetalleSitioWeb from "./DetalleSitioWeb";
import axios from "axios";

class SitioWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      uri: '',
      applications: []
    };
  }

  componentDidMount() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.props.auth.login.token
    };
    axios
    .get(process.env.REACT_APP_API + '/api/v1/page/urlinfo/'+this.props.match.params.id+'/', {headers: headers})
    .then(response => {
      this.props.detalleSitioWeb(response.data);
      this.setState({
        id : this.props.detallesitioweb.id,
        uri: this.props.detallesitioweb.uri,
        applications: this.props.detallesitioweb.applications
      })
    })
    .catch(error => {
      console.log(error);
    });
    // this.state.sitioweb = this.props.sitiosweb.find( sitioweb => sitioweb.id.toString() ===  this.props.match.params.id )
    // console.log(this.props.sitiosweb);
  }

  render() {

    // const sitioWebDetails = this.state.sitioweb ? Object.entries(this.state.sitioweb) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <DetalleSitioWeb />
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    detallesitioweb: state.detallesitioweb
  }
}

const mapDispatchToProps = dispatch => ({
  detalleSitioWeb: detallesitioweb => dispatch(detalleSitioWeb(detallesitioweb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SitioWeb);
