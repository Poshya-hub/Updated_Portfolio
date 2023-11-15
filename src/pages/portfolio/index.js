import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Project1 from '../../assets/images/Project1.png';
import Project2 from "../../assets/images/Project2.png";
import Project3 from "../../assets/images/Project3.png"
import Project5 from "../../assets/images/Project5.png"
import Project6 from "../../assets/images/Project6.png"
import Project9 from "../../assets/images/Project9.jpg"
import Project10 from "../../assets/images/Project10.jpg"
import Project7 from "../../assets/images/Project7.png"

export const Portfolio = () => {
  const image = [
    Project1,
    Project2,
    Project3,
    Project5,
    Project6,
    Project7,
    Project9,
    Project10
  ]
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={image[i]} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
