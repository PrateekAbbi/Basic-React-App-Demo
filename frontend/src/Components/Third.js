import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { CardContent, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Third = () => {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openAPI, setOpenAPI] = React.useState(false);
  const [userData, setUserData] = React.useState("");
  const [apiCount, setApiCount] = React.useState();

  const openCreateModal = () => setOpenCreate(true);
  const handleCreateClose = () => setOpenCreate(false);

  const openUpdateModal = () => setOpenUpdate(true);
  const handleUpdateClose = () => setOpenUpdate(false);

  async function readData() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/read", config);

    if (data) {
      try {
        setUserData(data.content);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }

  const addSubmitHandler = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/create",
      { content: userData },
      config
    );
    console.log(data);

    if (data) {
      try {
        window.alert("Data Successfully Added");
      } catch (error) {
        console.log(error);
        window.alert("Could not add Data, Please try Again");
      }
    }
  };

  const updateSubmitHandler = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/update",
      { content: userData },
      config
    );
    console.log(data);

    if (data) {
      try {
        window.alert("Data Updated Successfully");
      } catch (error) {
        console.log(error);
        window.alert("Could not update Data, Please try Again");
      }
    }
  };

  const openAPIModal = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/count", config);
    console.log(data);

    if (data) {
      try {
        setApiCount(data.count);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    setOpenAPI(true);
  };
  const handleAPIClose = () => setOpenAPI(false);

  return (
    <Card
      style={{ background: "#1976d2", textAlign: "center" }}
      onLoad={readData()}
    >
      <CardContent style={{ color: "#fff" }}>
        <Typography variant="h5" component="div">
          <b>User Data</b>
        </Typography>
        <br />
        <Typography variant="body2">{userData}</Typography>
      </CardContent>

      <CardActions
        style={{
          color: "#fff",
          justifyContent: "center",
          position: "relative",
          top: "25%",
        }}
      >
        <Button
          style={{
            borderRadius: "5px",
            background: "rgb(176 220 255)",
            color: "rgb(32 35 39)",
          }}
          variant="contained"
          onClick={openCreateModal}
          size="large"
        >
          <b>Create</b>
        </Button>
        <Button
          style={{
            borderRadius: "5px",
            background: "rgb(176 220 255)",
            color: "rgb(32 35 39)",
          }}
          variant="contained"
          onClick={openUpdateModal}
          size="large"
        >
          <b>Update</b>
        </Button>
        <Button
          style={{
            borderRadius: "5px",
            background: "rgb(176 220 255)",
            color: "rgb(32 35 39)",
          }}
          variant="contained"
          size="large"
          onClick={openAPIModal}
        >
          <b>API Count</b>
        </Button>
      </CardActions>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreate}
        onClose={handleCreateClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCreate}>
          <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
            onSubmit={addSubmitHandler}
          >
            <h3>Type in body to add something in user data</h3>
            <TextField
              id="standard-basic"
              label="Body"
              variant="standard"
              onChange={(e) => setUserData(e.target.value)}
              //value={userData}
            />
            <br />
            <br />
            <Button
              style={{
                borderRadius: "5px",
                background: "rgb(176 220 255)",
                color: "rgb(32 35 39)",
                padding: "5px 15px",
              }}
              type="submit"
            >
              Add
            </Button>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openUpdate}
        onClose={handleUpdateClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openUpdate}>
          <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
            onSubmit={updateSubmitHandler}
          >
            <h3>Type in update to update the body of user data</h3>
            <TextField
              id="standard-basic"
              label="Update"
              variant="standard"
              onChange={(e) => setUserData(e.target.value)}
              value={userData}
            />
            <br />
            <br />
            <Button
              style={{
                borderRadius: "5px",
                background: "rgb(176 220 255)",
                color: "rgb(32 35 39)",
                padding: "5px 15px",
              }}
              type="submit"
            >
              Update
            </Button>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAPI}
        onClose={handleAPIClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAPI}>
          <Box sx={style}>
            {apiCount <= 0 ? (
              <h3>No API calls as of now</h3>
            ) : (
              <h3>
                Total number of API Calls:
                <b>{apiCount}</b>
              </h3>
            )}
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
};

export default Third;
