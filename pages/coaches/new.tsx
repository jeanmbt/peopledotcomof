import type { NextPage } from "next";
import { Box, Container, Button, TextField, Typography, Alert } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_COACH } from "../../graphql/addCoach";
import React from "react";
import { useRouter } from "next/router";

const NewCoach: NextPage = () => {
  const router = useRouter();
  const [error, setError] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [streetNumber, setStreetNumber] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [city, setCity] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);

  const [addCoach, { loading: mutationLoading }] = useMutation(ADD_COACH, {
    onError: (err) => {
      setError(err);
      console.log(error);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addCoach({
        variables: {
          data: {
            name: name,
            email: email,
            phone: phone,
            street: street,
            streetNumber: streetNumber,
            zip: zip,
            city: city,
            website: website,
          },
        },
      });
      setConfirmed(true);
    } catch (error) {
      setError(error);
      setConfirmed(false);
    }
  };

  const style = {
    margin: "1em",
  };

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        marginBottom: "6em",
      }}
    >
      <Box sx={{ alignSelf: "flex-start", justifySelf: "flex-start" }}>
        <Button
          sx={{ margin: "0.5em 0", alignSelf: "flex-start" }}
          variant="outlined"
          onClick={() => router.back()}
        >
          back
        </Button>

        <Box
          sx={{
            width: [300, 450, 500],
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e5e5e5",
              borderRadius: "2px",
            }}
          >
            <Typography variant="h6" sx={{ margin: "1em 0", alignSelf: "center" }}>
              Add a new coach:
            </Typography>

            <TextField
              sx={style}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              id="name"
              label="Name"
              variant="outlined"
            />

            <TextField
              sx={style}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              id="email"
              label="Email"
              variant="outlined"
            />

            <TextField
              sx={style}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="small"
              id="phone"
              label="Phone"
              variant="outlined"
            />

            <TextField
              sx={style}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              size="small"
              id="street"
              label="Street"
              variant="outlined"
            />

            <TextField
              sx={style}
              value={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
              size="small"
              id="streetNumber"
              label="Street Number"
              variant="outlined"
            />

            <TextField
              sx={style}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              size="small"
              id="zip"
              label="ZIP"
              variant="outlined"
            />

            <TextField
              sx={style}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              size="small"
              id="city"
              label="City"
              variant="outlined"
            />

            <TextField
              sx={style}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              size="small"
              id="website"
              label="Website"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{ margin: "1em", width: "50%", alignSelf: "center" }}
            >
              Submit
            </Button>
          </form>
          {!error && confirmed && <Alert severity="success">Coach {name} added</Alert>}
          {error && (
            <Alert sx={{ overflowWrap: "anywhere" }} severity="error">
              Error: {error.message}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default NewCoach;
