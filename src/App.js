import React, { useState } from "react";
import "./App.css";
import ProjectsContainer from "./Containers/ProjectsContainer.js";
import AboutContainer from "./Containers/AboutContainer.js";
import ContentContainer from "./Containers/ContentContainer.js";
import NewFooter from "./Components/NewFooter.tsx";
import NewNavbar from "./Components/NewNavbar.tsx";
import styled from "@emotion/styled";

const App = () => {
  const PageWrapper = styled.div({
    height: "50%"
  });

  const [page, setPage] = useState("default");

  let content;
  if (page === "about") {
    content = <AboutContainer />;
  } else if (page === "projects") {
    content = <ProjectsContainer />;
  } else {
    content = <ContentContainer />;
  }

  return (
    <>
      <NewNavbar setPage={setPage} page={page} />
      <PageWrapper>{content}</PageWrapper>
      <NewFooter />
    </>
  );
};

export default App;
