import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core/";
import Cart from "./Cart";

const Header = () => (
  <Grid
    container
    alignItems="center"
    direction="row"
    justify="space-between"
    xs={12}>
    <Typography variant="h3">Dio Shopping</Typography>

    <Link to="/">
      <Button color="primary">Home</Button>
    </Link>

    <Link to="/contato">
      <Button color="primary">Contato</Button>
    </Link>

    <Cart />
  </Grid>
);

export default Header;
