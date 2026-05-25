# Afeef Kallanthodan Portfolio

Personal portfolio website for Afeef Kallanthodan, an Embedded Software Development Engineer focused on automotive software validation, model-based design, AUTOSAR, control systems, aerospace systems, Python tooling, and local AI/LLM projects.

The site is built as a static HTML/CSS/JavaScript portfolio and can be hosted directly with GitHub Pages or any static web server.

## Live Sections

- Hero introduction with role typewriter animation
- About and engineering overview
- Work experience timeline
- Skills and expertise
- Professional and personal engineering projects
- AI and local LLM lab projects
- Education, awards, and contact details
- Downloadable resume

## Project Structure

```text
.
|-- index.html              # Main website page
|-- css/
|   |-- styles.css          # Core design system and page styling
|   `-- responsive.css      # Responsive layout rules
|-- js/
|   `-- main.js             # Navigation, animations, charts, and interactions
|-- assets/
|   |-- images/             # Profile and project images
|   |-- videos/             # Project demo videos
|   `-- resume/             # Downloadable resume PDF
|-- .nojekyll               # Keeps GitHub Pages from processing with Jekyll
`-- README.md
```

## How to Run Locally

Because this is a static website, no build step is required.

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Editing Guide

- Update page content in `index.html`.
- Adjust colors, spacing, typography, and component styles in `css/styles.css`.
- Adjust mobile and tablet behavior in `css/responsive.css`.
- Update interactive behavior in `js/main.js`.
- Replace portfolio images in `assets/images/`.
- Replace project videos in `assets/videos/`.
- Replace the resume at `assets/resume/Afeef_KT_Resume.pdf`.

## Deployment

This repository is ready for GitHub Pages.

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Select the branch that contains `index.html`.
5. Save the configuration.

GitHub Pages will publish the static site from the selected branch.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- SVG icons
- Responsive design
- GitHub Pages compatible static hosting

## License

This portfolio contains personal resume, project, and profile content. Reuse of the website structure is allowed with attribution, but personal information, images, resume files, and project claims should not be copied without permission.
