import React from "react";

import classes from "./Loader.module.css";

export default function Loader({ ...res }) {
  return (
    <div className={classes.spinnerContainer} {...res}>
      <div className={classes.loadingSpinner}></div>
    </div>
  );
}
