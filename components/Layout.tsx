import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NextComponentType } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";
import logo from "../public/logo.png";

const Header = () => {
  return (
    <Toolbar style={{ height: "1em" }}>
      <div>
        <Link href="/coaches" passHref>
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
