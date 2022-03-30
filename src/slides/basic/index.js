import React from "react";
import Semantic from "./semantic";
import WaiAria from "./aria";
import Codes from "../codes";

/**
 * Kalo di slide ini poinnya cuma 2:
 * - Implementasi semantic tags
 * - Implementasi WAI-ARIA tags untuk component yang enggak punya semantic tags
 */

function BasicConcept() {
  return (
    <>
      <Semantic />
      <Codes />
      <WaiAria />
    </>
  );
}

export default BasicConcept;
