import { render } from "react-dom";
import App from "./App";



export const bootstrap = () => {
  const rootElement = document.getElementById("root");
  render(<App />, rootElement);
}
