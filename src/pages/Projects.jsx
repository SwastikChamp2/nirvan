import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import ShopList from "../components/ProjectList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Projects = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "study-books")
  );
  useWindowScrollToTop();

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
          <ShopList productItems={filterList} />
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