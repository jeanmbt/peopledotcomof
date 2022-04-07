import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.css";

const Header = ({ theme }) => {
  return (
    <Toolbar style={{ height: "1em" }}>
      <div>
        <Link href="/people" passHref>
          <Box
            style={{
              height: "2em",
              width: "20em",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${logo.src})`,
              color: theme.palette.primary.main,
              cursor: "pointer",
              zIndex: 1,
            }}
          ></Box>
        </Link>
      </div>
    </Toolbar>
  );
};

export default function Layout({ children, theme }) {
  return (
    <>
      <Header theme={theme} />
      <main style={{ height: "max-content" }}>{children}</main>
      <footer
        className={styles.footer}
        style={{ backgroundColor: theme.palette.primary.main, color: "white" }}
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
