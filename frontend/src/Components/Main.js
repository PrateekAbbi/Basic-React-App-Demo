import React from "react";
//import { Resizable } from "re-resizable";
import Split from "react-split";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import First from "./First";
import Second from "./Second";
import Third from "./Third";

const first = {
  flexGrow: 1,
  border: "1px solid silver",
  height: "100%",
  display: "flex",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  margin: "5px",
};

const Main = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lx">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "86vh",
            marginTop: "24px",
            padding: "24px",
          }}
          style={{ borderRadius: "10px" }}
        >
          <Split direction="vertical" style={{ height: "635px" }}>
            <Split style={{ display: "flex" }}>
              <First />
              <Second />
            </Split>
            <Third />
          </Split>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Main;
