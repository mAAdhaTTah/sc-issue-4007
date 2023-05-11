import React from "react";
import ReactDOM from "react-dom/client";

import Wrapper from "./Wrapper";
import Input from "./Input";
import { StyleSheetManager } from "styled-components";

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
const App = () => (
  <Wrapper>
    <Input placeholder="Write here" />
  </Wrapper>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyleSheetManager enableVendorPrefixes>
    <App />
  </StyleSheetManager>
);
