import styled from "@emotion/styled";

import { TableCell } from "@mui/material";
import { Theme } from "../../types/theme";

export const TableHeaderCell = styled(TableCell)(({ theme }: Theme) => ({
  fontWeight: "bold",
  // backgroundColor: theme.palette.primary.main,

  color: "white",
  padding: [2, 1, 1],
}));

export const StyledIndexTableCell = styled(TableCell)(({}) => ({
  marginTop: "2px",
  padding: "0.2em",
  width: "50%",
}));

export const StyledCoachTableCell = styled(TableCell)(({}) => ({
  padding: [2, 1, 1],
}));

export const style = {
  margin: "1em",
};
