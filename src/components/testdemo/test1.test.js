import React, { Component } from "react";

import { total } from "./test2.test";

test("Total ", () => {
  expect(total(5, 20)).toBe("$25");
});
