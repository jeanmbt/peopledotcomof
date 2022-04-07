export interface Theme {
  align?: string,
  children?: any,
  theme?: {
    palette: { primary: { main: string, grey: string }, secondary: { main: string, grey: string} };
  };
}