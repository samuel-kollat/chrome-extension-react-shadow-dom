import { createRoot } from "react-dom/client";

export function render(content: React.ReactElement) {
  const container = document.createDocumentFragment();
  const root = createRoot(container);
  root.render(content);
}
