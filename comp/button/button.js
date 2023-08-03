import React from "react";
import classes from "./style.module.css";
export default function Button({ children }) {
  return <button className={classes.button}>{children}</button>;
}
