import React from "react";

import { Typography } from "@mui/material";

import { ErrorPageStyle } from "./ErrorPage.style";

function ErrorPage() {
  return (
    <ErrorPageStyle>
      <div className="errorPageWrapper">
        <Typography variant="h1">Something Error!</Typography>
        <Typography variant="body1">Please try again later.</Typography>
      </div>
    </ErrorPageStyle>
  );
}

export default ErrorPage;
