import {
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Card from '@material-ui/core/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export default function DonateCard() {
  return (
    <Grid item direction="row" spacing={5}>
      <ThemeProvider theme={theme}>
        <Card>
          <CardActionArea component={RouterLink} to="/donatebook">
            <CardContent>
              <Typography>Donate Book</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea component={RouterLink} to="/donatecloths">
            <CardContent>
              <Typography>Donate Cloths</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea component={RouterLink} to="/donatemedicine">
            <CardContent>
              <Typography>Donate Medicine</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea component={RouterLink} to="/donateamount">
            <CardContent>
              <Typography>Donate Amount</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ThemeProvider>
    </Grid>
  );
}
