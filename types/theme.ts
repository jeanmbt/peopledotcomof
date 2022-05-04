import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface Theme {
  align?: string,
  children?: ReactJSXElement | string,
  theme?: {
    palette: { primary: { main: string, grey: string }, secondary: { main: string, grey: string} };
  };
}
