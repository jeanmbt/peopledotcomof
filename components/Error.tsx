import { ApolloError } from "@apollo/client";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { Fragment } from "react";

export interface IError {
  error: {
    message: string;
  };
}
export const Error = (props: IError) => {
  const error = props.error;
  const router = useRouter();

  return (
    <Fragment>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "absolute",
          overflow: "visible",
          height: "100vh",
          width: "100%",
          right: "0",
          top: "3em",
          backgroundColor: "rgba(255, 255, 255, 1)",
          minWidth: "100%",
        }}
      >
        <p>{error ? error.message : "Sorry, there's an error."}</p>
        <Box>
          <Button sx={{ margin: "0.5em" }} variant="outlined" onClick={() => router.back()}>
            back
          </Button>
          <Button sx={{ margin: "0.5em" }} variant="outlined" onClick={() => router.reload()}>
            reload
          </Button>
        </Box>
      </Container>
    </Fragment>
  );
};
