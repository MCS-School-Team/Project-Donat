import {Container, Grid} from "@mui/material";
import React, {useState} from "react";
import CardHome from "./CardHome";
import CreateCompany from "./CreateCampaign";
import Search from "./Search&Donate";

const Layout = ({handleSetCreateCampaign, handleSetDonateCryptoScreen, screen}) => {

    return (
        screen.isHome ?
            <Container>
                <Grid container justifyContent="center" spacing={6}>
                    <Grid item xs={4}>
                        <CardHome
                            handleSetScreen={handleSetCreateCampaign}
                            kind="Create campaign"
                            text="Somthing text"
                            buttonText="More"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardHome
                            handleSetScreen={handleSetDonateCryptoScreen}
                            kind="Donate crypto"
                            text="Somthing text"
                            buttonText="More"
                        />
                    </Grid>
                </Grid>
            </Container> :
            screen.isCreateCampaign ? <CreateCompany/> : <Search/>
    );
};
export default Layout;