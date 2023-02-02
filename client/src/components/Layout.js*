import { Container, Grid } from "@mui/material";
import React from "react";
import CardHome from "./CardHome";
import CreateCompany from "./CreateCampaign";

const Layout = ({ handleSetCreateCampaign, screen }) => {

  return (
    screen.isHome ?
    <Container>
      <Grid container justifyContent="center" spacing={6}>
        <Grid item xs={4}>
          <CardHome
            handleSetCreateCampaign={handleSetCreateCampaign}
            kind="Create campaign"
            text="Somthing text"
            buttonText="More"
          />
        </Grid>
        <Grid item xs={4}>
          <CardHome
            kind="Donate crypto"
            text="Somthing text"
            buttonText="More"
          />
        </Grid>
      </Grid>
    </Container> : 
    screen.isCreateCampaign ? <CreateCompany/> : null
  );
};
export default Layout;
