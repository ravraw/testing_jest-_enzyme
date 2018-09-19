import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Counter from "./Counter";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Renders without error", () => {});
