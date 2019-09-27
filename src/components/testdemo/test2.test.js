import React, { Component } from "react";

export const add = (x, y) => x - y;

export const total = (shipping, subTottal) => {
  return "$" + add(shipping, subTottal);
};
test("sdf", () => {});
