import { Col, Container, Row } from "react-bootstrap";


import { Fragment, useState } from "react";
import ProjectList from "../components/ProjectList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Projects = () => {


  return (
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={8}>
              {/* <SearchBar setFilterList={setFilterList} /> */}
              <br />
              {/* <FilterSelect setFilterList={setFilterList} /> */}
            </Col>
          </Row>
        </Container>
        <Container>
          <ProjectList />
        </Container>
      </section>
    </Fragment>
  );
};

export default Projects;


{/* <Fragment>
  <Banner title="product" />
  <section className="filter-bar">
    <Container className="filter-bar-contianer">
      <Row className="justify-content-center">
        <Col md={4}>
          <FilterSelect setFilterList={setFilterList} />
        </Col>
        <Col md={8}>
          <SearchBar setFilterList={setFilterList} />
        </Col>
      </Row>
    </Container>
    <Container>
      <ShopList productItems={filterList} />
    </Container>
  </section>
</Fragment> */}