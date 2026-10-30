---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/pages/Home.jsx","src/pages/Projects.jsx","src/pages/About.jsx","src/pages/Contact.jsx"]
---

# Portfolio site (all 4 routes)

Mode: Experience. Audience: frontend recruiters skimming on desktop and mobile. Takeaways, equal weight: she ships real apps, she has design taste, she is easy to reach. Anti-goals: gimmicky motion, corporate/stiff, a hero photo, glowing edges or navy-and-blobs dark. User-pinned: dark only, ground #16141A, raised #221F28, text #EDEAE4, one colour per page (Home coral #FF7A59, Projects mint #5FD6A8, About amber #F2B544, Contact lilac #B9A2FF). Build path: code-led (no image generation).

Unresolved: Formspree form ID (form falls back to a composed mailto until `VITE_FORMSPREE_ID` is set). Task Scheduler has no live deployment.

## Direction contract

THESIS: The portfolio is a metro line map on a station wall at night: each page is a coloured line, each real project or milestone is a station you can travel to. Refuses the dark developer default of a hero over a row of equal cards, and refuses glow.

OWN-WORLD: Flat charcoal wall, thick flat route lines with true 45-degree bends in coral, mint, amber and lilac, white-ringed station dots, one interchange capsule. Headings and the rail take the current page's colour; body text stays warm white. Overpass signage sans throughout; Overpass Mono only for real routes and URLs.

STORY: The visitor reads "Ravipati Pujitha, frontend developer", sees four lines leave the name for real destinations, follows one to VerifyOnChain or Task Scheduler, and reaches Contact with a working email, form, LinkedIn or GitHub.

FIRST VIEWPORT: Name huge at top left, role under it. Four parallel lines leave one capsule at left centre, fan out at 45 degrees and cross the page. Right side, on the lines, labelled link stations: Open to work (coral, status only), VerifyOnChain and Task Scheduler (mint), VIT-AP University (amber), Contact (lilac). Stations are the primary action. Signature interaction: lines draw out once from the capsule on arrival; a ring slides along the header rail to the current page. Keys 1-4 switch pages.

FORM: The Line Map, position 1 of 7 on the ordered list. seed:5abb85e1ae8b6f54

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
