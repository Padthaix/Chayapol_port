// Single source of truth for the main menu. Drives both the P3Menu list and
// the routes in App. To add a page: add an entry here + a page component +
// a <Route> mapping (App reads `page` as the path segment).
//
// Visual props (fontSize / offset / skew) only affect the slanted menu text.
export const MENU = [
  { id: "about",     label: "ABOUT ME",  page: "about",     fontSize: 80, offsetX: 0,  offsetY: 0, skew: -3, skewY: 5  },
  { id: "education", label: "EDUCATION", page: "education", fontSize: 66, offsetX: 20, offsetY: 8, skew: -5, skewY: -5 },
  { id: "projects",  label: "PROJECT & EVENT", page: "projects", fontSize: 58, offsetX: 8, offsetY: 6, skew: 0, skewY: -2 },
  { id: "skills",    label: "SKILLS",    page: "skills",    fontSize: 72, offsetX: 16, offsetY: 8, skew: -2, skewY: 3  },
  { id: "social",    label: "SOCIAL",    page: "social",    fontSize: 66, offsetX: 10, offsetY: 6, skew: -5, skewY: -5 },
];
