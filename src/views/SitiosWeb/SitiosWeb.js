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
  render() {
    // const sitioWebList = sitioWebData.filter(sitioweb => sitioweb.id < 10);

    const sitioWebList = sitioWebData.slice(
      1, 3
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
                  <PaginationItem>
                    <PaginationLink previous tag="button" />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button" />
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
