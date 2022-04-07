import { Box, Container, Typography } from "@mui/material";
import spinner from "../public/spinner.svg";

export const Loading = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        overflow: "visible",
        height: "80vh",
        width: "100%",
        right: "0",
        top: "4em",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <Container
        sx={{
          minWidth: "100%",
          height: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">Loading</Typography>
        <Box
          sx={{
            margin: "3em",
            height: "2em",
            width: "2em",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${spinner.src})`,
          }}
        ></Box>
      </Container>
    </Box>
  );
};
