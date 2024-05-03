import React, { useState, useEffect } from "react";
import { Form, Alert, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Accordion, Card } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import "./Listing.css";

export const techStackOptions = [
  'Python',
  'JavaScript',
  'Java',
  'C#',
  'C++',
  'TypeScript',
  'Swift',
  'Go',
  'Ruby',
  'Kotlin',
  'React',
  'Angular',
  'Vue.js',
  'Django',
  'Flask',
  'Spring Boot',
  'ASP.NET Core',
  'Express.js',
  'Ruby on Rails',
  'Laravel',
  'React Native',
  'Flutter',
  'UI/UX Design',
  'Firebase',
  'AWS',
  'Azure'
];

const Listing = () => {
  const auth = getAuth(); // Get the authentication service
  const db = getFirestore(); // Initialize Firestore
  const [projectName, setProjectName] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [error, setError] = useState("");
  const [points, setPoints] = useState();
  const [duration, setDuration] = useState();
  const [maxMembers, setMaxMembers] = useState();
  const [minPoints, setMinPoints] = useState();
  const [showTechStack, setShowTechStack] = useState(false);
  const [projectTickets, setProjectTickets] = useState([""]);
  const [ticketInputs, setTicketInputs] = useState(1);
  const [budgetError, setBudgetError] = useState('');



  let navigate = useNavigate();
  const trimmedProjectName = projectName.trim();

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectBudgetChange = (e) => {
    const budget = parseFloat(e.target.value);

    // Check if the budget is less than 500
    if (budget < 500) {
      // Show error message
      setBudgetError('Project Budget cannot be less than 500');
    } else {
      // Clear error message
      setBudgetError('');
      // Update project budget
      setProjectBudget(e.target.value);
    }
  };

  // Function to handle adding a new ticket input field
  const handleAddTicket = () => {
    setTicketInputs(ticketInputs + 1); // Increment the number of ticket input fields
    setProjectTickets([...projectTickets, ""]); // Add an empty ticket input field to the projectTickets array
  };

  // Function to handle changing the value of a ticket input field
  const handleTicketChange = (index, value) => {
    const updatedTickets = [...projectTickets]; // Create a copy of the projectTickets array
    updatedTickets[index] = value; // Update the value at the specified index
    setProjectTickets(updatedTickets); // Update the projectTickets state
  };

  const handleTechStackChange = (e) => {
    const options = Array.from(e.target.options);
    const selectedOptions = options.filter((option) => option.selected).map((option) => option.value);
    setTechStack(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    const sanitizedProjectName = trimmedProjectName.replace(/\s/g, "-");
    const documentId = `${sanitizedProjectName.substring(0, 50)}---${uuidv4()}`;

    try {
      // Store all the input data in the "ProjectListing" collection
      await setDoc(doc(db, "ProjectListing", documentId), {
        projectName: trimmedProjectName,
        postedBy,
        projectDescription,
        projectBudget,
        techStack: techStack,
        projectDuration: duration,
        maxMembers: maxMembers,
        minPoints: minPoints,
        projectTickets,
      });
      // Redirect the user to a different page after successful submission
      navigate("/projects");
    } catch (error) {
      setError("Error occurred while creating project listing. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  useEffect(() => {
    const currentUser = auth.currentUser; // Get the current user
    if (currentUser) {
      setPostedBy(currentUser.email); // Prefill the postedBy field with the user's email
    } else {
      // Redirect the user to login if not authenticated
      navigate("/login"); // Redirect to login page or any other route
    }
  }, [auth, navigate]);


  return (
    <>
      <div className="p-4 box form-container">
        <h2 className="mb-3 project-listing-heading">Post Project <br /> <br /></h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicProjectName">
            <Form.Label>Project Name: <span className="required-indicator">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Project Name"
              onChange={handleProjectNameChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPostedBy">
            <Form.Label>Posted By: <span className="required-indicator">*</span></Form.Label>
            <Form.Control
              type="email"
              value={postedBy}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicProjectDescription">
            <Form.Label>Project Description: <span className="required-indicator">*</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Project Description"
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPostedBy">
            <Form.Label>Posted By:</Form.Label>
            <Form.Control type="email" value={postedBy} disabled />
          </Form.Group>

          {/* Project Tickets Field */}
          <Form.Group controlId="formBasicProjectTickets">
            <Form.Label>Project Tickets:</Form.Label>
            {/* Render ticket input fields based on the number of ticketInputs */}
            {projectTickets.map((ticket, index) => (
              <div key={index} className="mb-2">
                <Form.Control
                  type="text"
                  value={ticket}
                  onChange={(e) => handleTicketChange(index, e.target.value)}
                  placeholder={`Ticket ${index + 1}`}
                />
              </div>
            ))}
            {/* Add button to add more ticket input fields */}
            <Button variant="outline-primary" onClick={handleAddTicket}>
              +
            </Button>
          </Form.Group>

          <Form.Group className="mb-3 small-input" controlId="formBasicProjectBudget">
            <Form.Label>Project Budget (in Rs): <span className="required-indicator">*</span></Form.Label>

            <Form.Control
              type="number"
              placeholder="Enter Project Budget"
              onChange={handleProjectBudgetChange}
              required
            />
            {budgetError && <p className="text-danger">{budgetError}</p>}

          </Form.Group>

          <div>
            <Form.Group className="mb-3" controlId="formBasicTechStack">
              <Form.Label>Choose Tech Stack:</Form.Label>
              <div>
                <button
                  className="show-hide-tech-stack"
                  onClick={() => setShowTechStack(!showTechStack)}
                >
                  {showTechStack ? "Hide Tech Stack" : "Show Tech Stack"}
                  <div style={{ marginRight: "8px" }}></div>
                  {showTechStack ? (
                    <BsChevronUp className="toggle-icon" />
                  ) : (
                    <BsChevronDown className="toggle-icon" />
                  )}

                </button>
                {showTechStack && (
                  <div className="tech-stack-options-container">
                    <div className="tech-stack-options">
                      {techStackOptions.map((option) => (
                        <Form.Check
                          key={option}
                          type="checkbox"
                          id={`checkbox-${option}`}
                          label={option}
                          value={option}
                          checked={techStack.includes(option)}
                          onChange={(e) => {
                            const checkedOptions = e.target.checked
                              ? [...techStack, option]
                              : techStack.filter((item) => item !== option);
                            setTechStack(checkedOptions);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Form.Group>
          </div>


          <Form.Group className="mb-3 small-input" controlId="formBasicDuration">
            <Form.Label>Duration of the project in Days:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Duration in Days"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 small-input" controlId="formBasicMaxMembers">
            <Form.Label>Max Members for the Project:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Max Members"
              value={maxMembers}
              onChange={(e) => setMaxMembers(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 small-input" controlId="formBasicPoints">
            <Form.Label>Points for the Project:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 small-input" controlId="formBasicMinPoints">
            <Form.Label>Min Points for Projects:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Min Points"
              value={minPoints}
              onChange={(e) => setMinPoints(e.target.value)}
            />
          </Form.Group>




          <div className="d-grid gap-2 btn-container">
            <Button className="project-submit-button" type="submit">
              Create Project
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Listing;
