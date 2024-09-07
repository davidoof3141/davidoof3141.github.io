import pong from "../assets/pong.gif";
import ProjectDescription from "./ProjectDescription";

function ProjectPage() {
  return (
    <>
      <div className="pongpage page">
        <img src={pong} alt="My GIF" className="pong_gif" />
        <ProjectDescription />
      </div>
    </>
  );
}

export default ProjectPage;
