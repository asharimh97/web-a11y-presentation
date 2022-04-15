import React from "react";
import AriaLive from "./aria-live";
import Bootstrap from "./bootstrap";
import Hidden from "./hidden";
import Label from "./label";
import ManyMore from "./many-more";
import Roles from "./roles";

function WaiAriaCodes() {
  return (
    <>
      <Bootstrap />
      <Roles />
      <Label />
      <Hidden />
      <AriaLive />
      <ManyMore />
    </>
  );
}

export default WaiAriaCodes;
