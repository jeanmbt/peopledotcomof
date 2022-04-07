import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import logo from "../public/logo.png";

const Header = () => {
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
            }}
          ></Box>
        </Link>
      </div>
    </Toolbar>
  );
};

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ height: "max-content" }}>{children}</main>
    </>
  );
}
