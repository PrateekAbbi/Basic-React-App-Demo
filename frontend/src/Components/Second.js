import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Second = () => {
  const [data, setData] = React.useState("");

  return (
    <Card style={{ background: "#1976d2" }}>
      <CardContent style={{ color: "#fff" }}>
        <Typography variant="h5" component="div">
          <b>My Projects</b>
        </Typography>
        <br />
        <Typography variant="body2">
          <b>Greetings of the day</b> team. While practicing I have made several
          projects out of which 2 are live on Heroku. First project is portfolio
          website where you can see all my basic stuff. Also I have made backend
          for the portfolio to change my resume or photo whenever needed. Second
          project is event listing app where you can create all your precious
          events by creating an account. Second project uses MERN Technology.
          Click on below buttons to see the live projects.
          <br />
        </Typography>
      </CardContent>
      <CardActions style={{ color: "#fff" }}>
        <Button
          style={{
            borderRadius: "5px",
            background: "#fff",
            color: "rgb(25, 118, 210)",
          }}
          variant="contained"
          href="https://prateekabbi.herokuapp.com/"
          target="_blank"
        >
          <b>Project 1</b>
        </Button>
      </CardActions>
      <CardActions style={{ color: "#fff" }}>
        <Button
          style={{
            borderRadius: "5px",
            background: "#fff",
            color: "rgb(25, 118, 210)",
          }}
          variant="contained"
          href="https://listing-event.herokuapp.com/"
          target="_blank"
        >
          <b>Project 2</b>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Second;
