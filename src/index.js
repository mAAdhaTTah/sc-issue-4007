import React from "react";
import { render } from "react-dom";

import Wrapper from "./Wrapper";
import Input from "./Input";

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
const App = () => (
  <Wrapper>
    <Input placeholder="Write here" />
  </Wrapper>
);

render(<App />, document.getElementById("root"));
