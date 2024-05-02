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
            <Accordion.Header>
              How does the moderation process work?
            </Accordion.Header>
            <Accordion.Body>
              Our platform employs a moderation process where all tasks are
              reviewed by our team of moderators. They ensure that tasks are
              clear, legal, and appropriate for our platform. If a task needs to
              be divided into smaller chunks for better execution, the
              moderators will handle this process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I communicate directly with the client?
            </Accordion.Header>
            <Accordion.Body>
              Direct communication between the client and freelancers is
              discouraged on our platform. All communication and task details
              should go through our moderation system to ensure transparency and
              accountability for both parties.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How are payments handled?</Accordion.Header>
            <Accordion.Body>
              Payment for tasks is handled through our secure platform. Funds
              are held in escrow until the task is completed and approved by the
              moderator. Once approved , the payment is released to the seller,
              minus our platform fees.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What happens if a task is not completed satisfactorily?
            </Accordion.Header>
            <Accordion.Body>
              If a task is not completed to the buyer's satisfaction, our
              moderation team will review the case and determine the appropriate
              course of action. This may include requesting revisions, canceling
              the task, or issuing a refund.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Can I dispute a moderation decision?
            </Accordion.Header>
            <Accordion.Body>
              Yes, both buyers and sellers have the right to dispute a
              moderation decision. Our team will review any disputes and provide
              a final ruling based on the evidence provided by both parties.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
