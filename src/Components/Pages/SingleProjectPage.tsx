import { useParams } from "react-router-dom";
import React, { FC } from "react";
import { projects, Project } from "../../data/projectData";

const SingleProjectPage: FC = () => {
  const { project_id } = useParams<{ project_id: string }>(); // Correctly destructure useParams and type it
  const project: undefined | Project = projects.find(
    (p: Project) => p.project_id === project_id
  );

  return (
    <div>
      <h1>Project ID: {project.title}</h1>
    </div>
  );
};

export default SingleProjectPage;
