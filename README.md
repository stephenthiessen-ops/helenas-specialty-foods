# Helena's Specialty Pierogies — website

Plain HTML, CSS and JavaScript. There's no build step: GitHub Pages serves these files as they are.

## Adding photos

Every photo spot on the site shows a striped placeholder with a filename. Upload a photo to the `images/` folder **with that exact filename** and it appears automatically. No code changes are needed.

| Filename | Where it shows | Shape | What works best |
|---|---|---|---|
| `hero.jpg` | Home page, top banner | Wide landscape, 2000px+ wide | Plated pierogies. Keep the food toward the right, because text sits on the left on computers and along the bottom on phones. |
| `pierogies.jpg` | Home page, "Handmade Pierogies" card | 4:3 landscape | Close-up of pierogies |
| `kielbasa.jpg` | Home page, "Polish Specialty Meats" card | 4:3 landscape | Kielbasa or the meat case |
| `story-family.jpg` | Our Story page, top | 4:5 portrait | Family, the kitchen, or Helena |
| `story-hands.jpg` | Our Story page, bottom | 4:3 landscape | Hands rolling or pinching dough |
| `shop.jpg` | Visit Us page | 16:9 wide | The storefront or the inside of the shop |

Tips:
- Filenames must match exactly: lowercase, ending in `.jpg`.
- Keep each photo under about 500 KB so pages load fast on phones. Photos straight off a phone are often 3–8 MB and should be shrunk first.
- To upload: open the repo on GitHub, click **Add file → Upload files**, and drag the photos in. Then edit the path box to start with `images/`, or upload from inside the `images` folder.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Menu (search + filters) | `menu/index.html` |
| Our Story | `story/index.html` |
| In the News | `press/index.html` |
| Visit Us | `visit/index.html` |
| FAQ | `faq/index.html` |
| Not found | `404.html` |

Styles are in `css/styles.css`. The mobile menu and menu search are in `js/main.js`.

## Hosting

In the repo, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select **main** and **/ (root)**.
