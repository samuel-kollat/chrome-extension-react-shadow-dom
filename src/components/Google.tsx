import React from "react";
import { ShadowDom } from "./ShadowDom";

export function Google(): React.ReactElement | null {
  const [parentElement] = React.useState(() =>
    // See https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver for more robust solution
    document.querySelector(".k1zIA") // CSS selector for Google main image container
  );

  return parentElement ? (
    <ShadowDom parentElement={parentElement}>Hello 👋, </ShadowDom>
  ) : null;
}
