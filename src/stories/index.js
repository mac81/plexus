import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Typography, types } from "../components";
import "../App.css";

storiesOf("Typography", module)
  .add("default", () => <Typography>Default</Typography>)
  .add("display4", () => (
    <Typography type={types.display4}>Display4</Typography>
  ))
  .add("display3", () => (
    <Typography type={types.display3}>Display3</Typography>
  ))
  .add("display2", () => (
    <Typography type={types.display2}>Display2</Typography>
  ))
  .add("display1", () => (
    <Typography type={types.display1}>Display1</Typography>
  ))
  .add("headline", () => (
    <Typography type={types.headline}>Headline</Typography>
  ))
  .add("title", () => <Typography type={types.title}>title</Typography>)
  .add("subhead2", () => (
    <Typography type={types.subhead2}>subhead2</Typography>
  ))
  .add("subhead1", () => (
    <Typography type={types.subhead1}>subhead1</Typography>
  ))
  .add("body2", () => <Typography type={types.body2}>body2</Typography>)
  .add("body1", () => <Typography type={types.body1}>body1</Typography>)
  .add("caption", () => <Typography type={types.caption}>caption</Typography>)
  .add("label", () => <Typography type={types.label}>label</Typography>)
  .add("menu", () => <Typography type={types.menu}>menu</Typography>)
  .add("button", () => <Typography type={types.button}>button</Typography>)
  .add("all", () => (
    <div>
      <Typography type={types.display4}>Display4</Typography>
      <Typography type={types.display3}>Display3</Typography>
      <Typography type={types.display2}>Display2</Typography>
      <Typography type={types.display1}>Display1</Typography>
      <Typography type={types.headline}>Headline</Typography>
      <Typography type={types.title}>title</Typography>
      <Typography type={types.subhead2}>subhead2</Typography>
      <Typography type={types.subhead1}>subhead1</Typography>
      <Typography type={types.body2}>body2</Typography>
      <Typography type={types.body1}>body1</Typography>
      <Typography type={types.caption}>caption</Typography>
      <Typography type={types.label}>label</Typography>
      <Typography type={types.menu}>menu</Typography>
      <Typography type={types.button}>button</Typography>
    </div>
  ));
