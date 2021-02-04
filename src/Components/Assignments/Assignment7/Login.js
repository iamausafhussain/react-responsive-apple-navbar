import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  TextField,
  Typography,
  Button,
  Grid,
  Snackbar,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core/";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";

//  Custom Styling

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    width: "400px",
    margin: "10% auto",
  },
}));

// functional component begins here

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("Submitted");
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({
      open: true,
      ...newState,
    });
    setEmail("");
    setJob("");
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: { email },
        job: { job },
      }),
    })
      .then((res) => res.json())
      .then((resJSON) => {
        if (resJSON.id) {
          setMessage("User Created");
        } else {
          setMessage("Unable to create a User!!");
        }
      });
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleJob = (e) => {
    setJob(e.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<SentimentSatisfiedRoundedIcon style={{ width: "80px" }} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Login using REST API calls"
        subheader="February 4, 2021"
      />
      <Grid
        style={{ display: "flex", marginTop: "20px", alignItems: "center" }}
        align="center"
        direction="column"
        item
      >
        <TextField
          style={{ width: "70%" }}
          type="email"
          margin="dense"
          variant="outlined"
          label="Email"
          value={email}
          onChange={handleEmail}
        />
        <TextField
          style={{ width: "70%" }}
          type="text"
          margin="dense"
          variant="outlined"
          label="Job Description"
          value={job}
          onChange={handleJob}
        />
        <Button
          style={{ width: "30%", margin: "10px 0 10px 0" }}
          variant="contained"
          color="secondary"
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
          disabled={email && job ? false : true}
        >
          Add User
        </Button>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        severity="success"
        key={vertical + horizontal}
      />

      <CardContent>
        <Typography
          style={{ margin: "5px", fontSize: "15px" }}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          By Signing-in, you agree to our terms and conditions of the Login
          Component. No Email is taken into database. This is only the test
          version of the Login-SignIn form using React.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
