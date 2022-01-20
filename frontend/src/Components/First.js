import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const First = () => {
  return (
    <Card style={{ background: "#1976d2" }}>
      <CardContent style={{ color: "#fff" }}>
        <Typography variant="h5" component="div">
          <b>Brief Introduction about me</b>
        </Typography>
        <br />
        <Typography variant="body2">
          <b>Greetings of the day</b> team. My name is Prateek Abbi and
          currently I am doing my Bachelors of Technology in CSE from Amity
          University, Noida. I am currently in my 6th semester and I have
          cleared all my previous semester without any backlogs.
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
          <b>Know more</b>
        </Button>
      </CardActions>
    </Card>
  );
};

export default First;
