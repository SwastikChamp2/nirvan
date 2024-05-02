import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";

const FAQSection = () => {
  return (
    <section className="p-5" id="questions">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Where exactly are you located?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus expedita aspernatur nihil aliquid, dicta, provident ex
              voluptatum eius quidem illum molestias nemo commodi repellendus
              officia eveniet quo tempore adipisci minus ab fugiat voluptates
              harum? Qui nostrum consectetur suscipit, aperiam incidunt commodi
              repellat dolor non placeat impedit tempore debitis. Quisquam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is there any trial available?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus expedita aspernatur nihil aliquid, dicta, provident ex
              voluptatum eius quidem illum molestias nemo commodi repellendus
              officia eveniet quo tempore adipisci minus ab fugiat voluptates
              harum? Qui nostrum consectetur suscipit, aperiam incidunt commodi
              repellat dolor non placeat impedit tempore debitis. Quisquam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What Do I need to Know?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus expedita aspernatur nihil aliquid, dicta, provident ex
              voluptatum eius quidem illum molestias nemo commodi repellendus
              officia eveniet quo tempore adipisci minus ab fugiat voluptates
              harum? Qui nostrum consectetur suscipit, aperiam incidunt commodi
              repellat dolor non placeat impedit tempore debitis. Quisquam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are Online Batches Available?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus expedita aspernatur nihil aliquid, dicta, provident ex
              voluptatum eius quidem illum molestias nemo commodi repellendus
              officia eveniet quo tempore adipisci minus ab fugiat voluptates
              harum? Qui nostrum consectetur suscipit, aperiam incidunt commodi
              repellat dolor non placeat impedit tempore debitis. Quisquam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Will I Get a Job After Completion?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus expedita aspernatur nihil aliquid, dicta, provident ex
              voluptatum eius quidem illum molestias nemo commodi repellendus
              officia eveniet quo tempore adipisci minus ab fugiat voluptates
              harum? Qui nostrum consectetur suscipit, aperiam incidunt commodi
              repellat dolor non placeat impedit tempore debitis. Quisquam.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
