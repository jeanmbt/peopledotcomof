import { Button, Toolbar, Typography } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.css";

const Header = ({ theme }) => {
  return (
    <Toolbar style={{ height: "1em", borderBottom: `0.2em solid ${deepPurple[200]}` }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        <Link href="/people" passHref>
          <Box
            style={{
              height: "2em",
              width: "2em",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${logo.src})`,
              color: theme.palette.primary.main,
              cursor: "pointer",
              zIndex: 1,
            }}
          ></Box>
        </Link>
        {/* // TODO: make responsive */}
        <Button
          sx={{ margin: "0.5em 0", float: "right", backgroundColor: "white" }}
          variant="outlined"
          href={`people/new`}
        >
          Add Person
        </Button>
      </Box>
    </Toolbar>
  );
};

export default function Layout({ children, theme }) {
  return (
    <>
      <Header theme={theme} />
      <main style={{ height: "max-content", minHeight: "80vh", backgroundColor: deepPurple[100] }}>
        {children}
      </main>
      <footer
        className={styles.footer}
        style={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          borderTop: `0.2em solid ${deepPurple[500]}`,
        }}
      >
        <a href="https://github.com/jeanmbt" target="_blank" rel="noopener noreferrer">
          by Jean Michel Battirola
        </a>
        <Typography margin={1} fontSize={12}>
          Using: NextJs + Typescript, Prisma, Apollo, MUI, Emotion, graphQL
        </Typography>
      </footer>
    </>
  );
}
