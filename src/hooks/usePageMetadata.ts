import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_TITLES, META_DESCRIPTIONS } from "../content/siteContent";

const DEFAULT_TITLE = "Navpahal | Aware. Engage. Empower.";
const DEFAULT_DESCRIPTION =
  "Navpahal empowers communities through awareness, preparedness, and training.";

export default function usePageMetadata() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title = PAGE_TITLES[path] || DEFAULT_TITLE;
    const description = META_DESCRIPTIONS[path] || DEFAULT_DESCRIPTION;

    document.title = title;

    let metaEl = document.querySelector('meta[name="description"]');
    if (!metaEl) {
      metaEl = document.createElement("meta");
      metaEl.setAttribute("name", "description");
      document.head.appendChild(metaEl);
    }
    metaEl.setAttribute("content", description);
  }, [location.pathname]);
}
