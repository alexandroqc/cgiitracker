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

import sitioWebData from "./SitiosWebData";

function UserRow(props) {
  const sitioweb = props.sitioweb;
  const sitioWebLink = `/sitiosweb/${sitioweb.id}`;

  const getBadge = status => {
    return status === "Active"
      ? "success"
      : status === "Inactive"
      ? "secondary"
      : status === "Pending"
      ? "warning"
      : status === "Banned"
      ? "danger"
      : "primary";
  };

  return (
    <tr key={sitioweb.id.toString()}>
      <th scope="row">
        <Link to={sitioWebLink}>{sitioweb.id}</Link>
      </th>
      <td>
        <Link to={sitioWebLink}>{sitioweb.url}</Link>
      </td>
      {/* <td>{user.registered}</td>
      <td>{user.role}</td> */}
      <td>
        <Link to={sitioWebLink}>
          <Badge color={getBadge(sitioweb.status)}>{sitioweb.status}</Badge>
        </Link>
      </td>
    </tr>
  );
}

class SitiosWeb extends Component {
  constructor() {
    super();

    this.pageSize = 10;
    this.pagesCount = Math.ceil(sitioWebData.length / this.pageSize);
    this.state = {
      currentPage: 0
    };
  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({
      currentPage: index
    });
  }

  render() {
    // const sitioWebList = sitioWebData.filter(sitioweb => sitioweb.id < 10);
    const { currentPage } = this.state;

    const sitioWebList = sitioWebData.slice(
      currentPage * this.pageSize,
      (currentPage + 1) * this.pageSize
    );

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Sitios Web Escaneados{" "}
                <small className="text-muted"> última actialización en: </small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Dominio</th>
                      {/* <th scope="col">registered</th>
                      <th scope="col">role</th> */}
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sitioWebList.map((sitioweb, index) => (
                      <UserRow key={index} sitioweb={sitioweb} />
                    ))}
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

export default SitiosWeb;
