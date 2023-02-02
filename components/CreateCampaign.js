import { Card, Grid, Typography, CardContent, TextField } from "@mui/material";
import { Container } from "@mui/system";

const CreateCampaign = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid
          item xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card>
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <CardContent>
                    <Typography>About You</Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      fullWidth
                    />
                  </CardContent>
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      fullWidth
                    />
                  </CardContent>
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      fullWidth
                    />
                  </CardContent>
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      fullWidth
                    />
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <CardContent>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      fullWidth
                    />
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateCampaign;