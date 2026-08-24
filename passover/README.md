# Huerta Group — Website Redesign Passover

Brand colors used throughout:
- Matte Black   #0F0F10
- Gunmetal Silver #5E646B
- Metallic Gold  #B08D57  (hover/light variant #C9A97A)

## Files

Huerta Group Site.dc.html      The full 9-page site (direction 1d). Open this one.
HG <Page>.dc.html              One file per subpage, mounted by the site file:
                               Services, Methodology, Intellectual Property, Education,
                               Technology, Managed Services, About, Contact.
Huerta Group Redesign.dc.html  The original five design directions (1a-1e) for reference.
assets/hg-lockup.png           Full logo lockup, used in the home hero plaque.
assets/hg-mark.png             HG monogram, used in the header and footer.
support.js                     Runtime required by the .dc.html files. Keep alongside them.

All files are self-contained HTML and open directly in a browser. Keep the folder
structure intact (assets/ and support.js next to the HTML).

## Navigation

Header: Services | Methodology | Capabilities (dropdown) | About | Contact + gold CTA.
The Capabilities panel holds Intellectual Property, Education & Workforce Development,
Technology & Software, and Managed Services. The footer links all eight pages.
Navigation is in-page state, not URLs — a production build should map each page to a route.

## Design notes

- Design width is 1280px, dark UI, Cormorant Garamond headings + Archivo body +
  JetBrains Mono eyebrow labels.
- Gold is used for eyebrow labels, card hover borders, the CTA buttons, and the
  metallic gradient buttons (#C9A97A to #B08D57 top to bottom).
- Cards lift on hover with a gold border and a dark drop shadow; buttons scale down
  slightly on click.
- The home hero panel is a gunmetal gradient with a black plaque holding the lockup.

## Copy

All page copy is taken verbatim from huerta-group-llc.vercel.app as of August 2026.

## Known caveats

- The logo files are crops of the supplied brand sheet, so edges are slightly soft at
  large sizes. Replace with the original vector or high-resolution transparent PNG.
- The contact form is visual only; the inquiry-type selector works, submission is not wired.
- No mobile layouts yet. Recommended: collapse the header into a full-screen overlay
  menu below about 1000px.
