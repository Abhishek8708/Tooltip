# Tooltip Component

A reusable Tooltip component for displaying informative messages in Angular applications.

## Features

- Displays a tooltip message on hover and click events.
- Includes a close button for tooltips that are shown on click.
- Supports dynamic content using Angular's `ng-content`.
- Hides the tooltip when clicking outside of it.

## Installation

To use the Tooltip component in your Angular project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Import the Tooltip Component:**

   You can use the Tooltip component as a standalone component by importing it where needed:

   ```typescript
   import { TooltipComponent } from './tooltip/tooltip.component';

   @Component({
     selector: 'app-root',
     template: `<app-tooltip hoverTooltipText="This is a hover tooltip!" clickTooltipText="Click me!">Hover or Click Here</app-tooltip>`
   })
   export class AppComponent { }
   ```

## Usage

### Basic Tooltip

```html
<app-tooltip clickTooltipText="This is shown on click!" hoverTooltipText="Hover info!">
  Click here
</app-tooltip>
```

## Tech Used

- **Angular**: A platform for building mobile and desktop web applications.
- **TypeScript**: A superset of JavaScript that provides static typing.
- **HTML/CSS**: Standard markup and styling languages used for building the user interface.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


