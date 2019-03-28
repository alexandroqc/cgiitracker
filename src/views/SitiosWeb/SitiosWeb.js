import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

// import sitioWebData from "./SitiosWebData";
import axios from "axios";

import { connect } from "react-redux";
import { listarSitioWeb } from "../Redux/actions";

function UserRow(props) {
  const sitioweb = props.sitioweb;
  const sitioWebLink = `/sitiosweb/${sitioweb.id}`;

  const getBadge = status => {
    return status === "https:"
      ? "success"
      : status === "Inactive"
      ? "secondary"
      : status === "http:"
      ? "warning"
      : status === "Banned"
      ? "danger"
      : "primary";
  };

  return (
    <tr key={sitioweb.id.toString()}>
      {/* <th scope="row">
        <Link to={sitioWebLink}>{sitioweb.id}</Link>
      </th> */}
      <td>
        <Link to={sitioWebLink}>{sitioweb.netloc}</Link>
      </td>
      <td>{sitioweb.path}</td>
      <td>
        <Link to={sitioWebLink}>
          <Badge color={getBadge(sitioweb.scheme)}>{sitioweb.scheme}</Badge>
        </Link>
      </td>
    </tr>
  );
}

class SitiosWeb extends Component {
  constructor() {
    super();
    this.pageSize = 10;
    this.state = {
      count: 0,
      next: null,
      previous: null,
      results: [],
      currentPage: 0
    };
    this.pagesCount = Math.ceil(this.state.count / this.pageSize);
  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({
      currentPage: index
    });
  }

  componentDidMount() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token e53def9d9acd69afe8c39afbf03740abf9b4335f'
    };    
    axios
      .get('http://0.0.0.0:8000/api/v1/page/urlinfo/', {headers: headers})
      .then(response => {
        this.props.listarSitioWeb(response.data.results);
        console.log(this.props.sitiosweb.sitiosweb);
        this.setState({
          results : this.props.sitiosweb.sitiosweb
        })
        
        // this.setState({
        //   count: response.data.count,
        //   next: response.data.next,
        //   previous: response.data.previous,
        //   results: response.data.results
        // });
        
      })
      .catch(error => {
        console.log(error);
        // dispatch({type: ERROR_FINDING_USER})
      });
  }

  render() {

    const { sitiosweb } =  this.props;
    
    const { currentPage } = this.state;

    const sitioWebList = this.state.results.slice(
      currentPage * this.pageSize,
      (currentPage + 1) * this.pageSize
    );

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Sitios Web Escaneados{" "}
                <small className="text-muted"> última actialización en: </small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      {/* <th scope="col">id</th> */}
                      <th scope="col">Dominio</th>
                      <th scope="col">Ruta</th>
                      {/* <th scope="col">role</th> */}
                      <th scope="col">Protocolo</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* {sitioWebList.map((sitioweb, index) => (
                      <UserRow key={index} sitioweb={sitioweb} />
                    ))} */}
                  </tbody>
                </Table>
                <Pagination>

                  {/* Left side button config */}
                  <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                      previous
                      tag="button"
                      onClick={e => this.handleClick(e, currentPage - 1)}
                    />
                  </PaginationItem>

                  {[...Array(this.pagesCount)].map((page, i) => (
                    <PaginationItem active={i === currentPage} key={i}>
                      <PaginationLink
                        onClick={e => this.handleClick(e, i)}
                        href="#"
                        tag="button"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {/* Right side button config */}
                  <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                    <PaginationLink
                      next
                      tag="button"
                      onClick={e => this.handleClick(e, currentPage + 1)}
                    />
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sitiosweb: state.sitiosweb
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    listarSitioWeb: (sitiosweb) => dispatch(listarSitioWeb(sitiosweb))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SitiosWeb);
