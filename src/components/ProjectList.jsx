import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Loader from "./Loader/Loader";
import InfoCard from "./ComponentCard/InfoCard";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(); // Initialize Firestore

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectRef = collection(db, 'ProjectListing');
        const projectSnapshot = await getDocs(projectRef);
        const projectData = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [db]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="shop-list">
      <Container>
        <Row>
          {projects.map((project) => (
            <InfoCard
              key={project.id}
              title={project.projectName}
              content={project.projectDescription}
              days={project.projectDuration}
              people={project.maxMembers}
              minpoints={project.minPoints}
              points={project.projectPoints}
              money={project.projectBudget}
              languages={project.techStack}
              projectTickets={project.projectTickets}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectList;
