# Portfolio

Personal portfolio website showcasing projects and skills.

### Links and Resources
* [Repository](https://github.com/jaredpattison/Portfolio)

## Getting Started

### Prerequisites
* Node.js (v14 or higher)
* npm or yarn

### Installation

```bash
npm install
```

### Available Scripts

* `npm start` - Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
* `npm run build` - Builds the app for production to the `build` folder
* `npm test` - Launches the test runner

## Project Structure

### Main Components

* `App.js` - Main application component that renders all other components

### Component Modules

* `components/About` - About me section with image and content from about.json
* `components/AboutParagraph` - Renders individual paragraph content from About section
* `components/BulletContent` - Container component that maps over bullet points from content.json
* `components/BulletPoint` - Individual bullet point component displaying title and copy
* `components/Footer` - Footer component wrapper
* `components/HeaderNav` - Navigation header with smooth scroll anchor links
* `components/Intro` - Introduction section with name, description, and social media links
* `components/Parallax` - Parallax background image component with tag text overlay
* `components/Projects` - Projects container that maps over projects.json
* `components/ProjectsCard` - Individual project card component with modal for project details
* `components/ProjectsDeck` - Deck container that renders project cards

## Dependencies

* `sass` - CSS preprocessor
* `react` - React library (v19.2.0)
* `react-anchor-link-smooth-scroll` - Smooth scrolling anchor links
* `react-dom` - React DOM library (v19.2.0)
* `react-modal` - Accessible modal component
* `react-scripts` - Create React App scripts

## Technologies Used

* React 19
* SCSS/SASS
* React Modal
* Animate.css (via CDN)

## Features

* Responsive design
* Smooth scrolling navigation
* Project showcase with modal details
* Accessible components (ARIA labels, alt text)
* Modern React hooks implementation