import React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  // const handleClick = () => {
  //   enqueueSnackbar("I love snacks.");
  // };

  // const handleClickVariant = (variant) => () => {
  //   // variant could be success, error, warning, info, or default
  //   enqueueSnackbar("This is a success message!", { variant });
  // };

  const handleClickVariantCityOne = (variant) => () => {
    enqueueSnackbar("Showing results for Bangalore..", { variant });
  };

  const handleClickVariantCityTwo = (variant) => () => {
    enqueueSnackbar("Showing results for Delhi..", { variant });
  };

  const handleClickVariantCityThree = (variant) => () => {
    enqueueSnackbar("Showing results for Mumbai..", { variant });
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        style={{ backgroundColor: "#f6f1f4", color: "#000" }}
        onClick={handleClickVariantCityOne("success")}
      >
        Bangalore
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "#f6f1f4", color: "#000" }}
        onClick={handleClickVariantCityTwo("success")}
      >
        Delhi
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "#f6f1f4", color: "#000" }}
        onClick={handleClickVariantCityThree("success")}
      >
        Mumbai
      </Button>
    </React.Fragment>
  );
}

function Buttons() {
  return (
    <SnackbarProvider maxSnack={5}>
      <MyApp />
    </SnackbarProvider>
  );
}

export default Buttons;
