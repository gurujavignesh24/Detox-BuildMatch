# DETOX BuildMatch

DETOX BuildMatch is a professional company-style website and interactive MVP prototype for helping community members turn opportunities into project-ready teams.

The platform demonstrates the full journey:

`Discover opportunity -> Review details -> Define roles -> Match teammates -> Form team -> Build in workspace -> Request mentor feedback -> Track progress -> Showcase`

## Project Summary

Students and community members often find hackathons, internships, competitions, and project opportunities, but struggle to form the right team and stay organized until submission. DETOX BuildMatch solves this by combining opportunity discovery, explainable teammate matching, team formation, project workspaces, mentor requests, and progress/showcase tracking in one connected experience.

This repository contains a static frontend prototype built for hackathon presentation and judging.

## Key Features

- Professional DETOX-branded company homepage
- Animated phoenix signal-field background inspired by the uploaded logo
- About, Contact, Sign in, and Create account pages
- Working local-state signup/signin experience
- Working contact form with saved demo inquiries
- Opportunity feed with filters and smart opportunity radar
- Opportunity details with project blueprint
- Role definition and role optimizer
- Explainable teammate matching with match inspector
- Team formation and invite acceptance flow
- Project workspace with tasks, milestones, mentor notes, and activity log
- Mentor request and mentor review state
- Progress dashboard and final showcase screen
- Launch pack generator for judging/submission proof
- Guided demo flow for fast presentations
- Responsive desktop and mobile layout

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser localStorage for prototype state
- Canvas and SVG animations for the custom background

No backend, database, build tool, or package installation is required.

## How to Run Locally

Open `index.html` directly in a browser.

Recommended:

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.

The app will run completely in the browser.

## Demo Flow

1. Start on the DETOX BuildMatch homepage.
2. Create a demo account or sign in.
3. Open the Platform page.
4. Run the smart opportunity scan.
5. Open the featured opportunity.
6. Review the opportunity details and blueprint.
7. Define needed project roles.
8. Inspect explainable teammate matches.
9. Auto-fill or manually invite teammates.
10. Create the project workspace.
11. Add or complete tasks and milestones.
12. Request and resolve mentor feedback.
13. Open the Showcase page.
14. Generate the launch pack.
15. Submit the final showcase.

Use `Guided demo` for a fast automatic walkthrough.

## Deployment

This is a static website, so it can be deployed on any static hosting platform.

### Netlify Drop

1. Go to `https://app.netlify.com/drop`.
2. Drag and drop the project folder.
3. Netlify will generate a live URL.

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Use these settings:
   - Framework: Other
   - Build command: leave empty
   - Output directory: `.`
4. Deploy.

### GitHub Pages

1. Push the project to GitHub.
2. Go to repository Settings.
3. Open Pages.
4. Select the branch and root folder.
5. Save and wait for the published URL.

## Folder Structure

```text
detox-buildmatch-prototype/
  index.html
  styles.css
  app.js
  README.md
  assets/
    detox-phoenix-logo.png
    detox-phoenix-logo-white.png
    journey-map.png
    opportunity-preview.png
    showcase-preview.png
```

## Prototype Notes

- Signup and contact form data are saved in the browser using localStorage.
- The app does not include a real backend or database.
- Refreshing the browser keeps local demo state unless browser storage is cleared.
- The Reset option in the footer restores the original demo state.

## Future Scope

- Real authentication
- Backend API for opportunities, users, teams, tasks, and mentor requests
- Database storage with PostgreSQL or Firebase/Supabase
- Organizer dashboard
- Mentor dashboard
- AI-powered matching and project planning
- Calendar integrations for deadlines and mentor sessions
- Public project showcase gallery
- Analytics for opportunity-to-team conversion and completion rate

## Project Goal

DETOX BuildMatch is built to show how a community can move from:

`Opportunity -> People -> Team -> Project -> Mentorship -> Progress -> Completion -> Showcase`

The goal is to help more members participate successfully, form stronger teams, and complete more projects.
