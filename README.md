markdown
# SpendWise Dashboard

## Project Overview

SpendWise is a personal budget and expense tracker dashboard. This Week 4 project rebuilds the tracker layout using modern CSS Grid and Flexbox techniques.

The dashboard provides a visual structure for monitoring income, expenses, savings, and different spending categories.

## What I Built

The dashboard contains:

- A SpendWise sidebar/navigation menu
- A dashboard header
- User profile section
- Income, expenses, and remaining balance summary cards
- Six financial category cards
- Responsive mobile layout
- Hover and keyboard focus micro-interactions
- CSS custom properties for the application theme
- Optional dark theme using the user's system preference

## Main Files

### index.html

The `index.html` file contains the structure of the dashboard.

It includes:

- Sidebar navigation
- Header
- Summary section
- Spending category cards
- Static financial information

### style.css

The `style.css` file controls the appearance and layout of the dashboard.

It uses:

- CSS Grid for the main dashboard and card layout
- Flexbox for sidebar navigation, header content, and cards
- CSS custom properties for colors
- Media queries for responsive design
- Hover and keyboard focus effects
- Dark theme support

## CSS Grid

CSS Grid is used for the main dashboard layout.

The desktop layout has two columns:

- Sidebar
- Main content

Grid is also used to arrange the summary cards and spending category cards.

## Flexbox

Flexbox is used for:

- Sidebar navigation
- Header alignment
- User profile
- Dashboard cards
- Card content

## Responsive Design

A media query is included for screens smaller than 768px.

On smaller screens:

- The sidebar and main content become a single-column layout.
- Summary cards stack vertically.
- Category cards stack vertically.
- Header content is rearranged for smaller screens.

The responsive layout can be tested using the browser DevTools Device Toolbar.

## Micro-interactions

The spending category cards include hover and keyboard focus effects.

The effects use:

- `transform`
- `box-shadow`
- `transition`

The transition duration is 0.2 seconds, which is below the required 250 milliseconds.

## Dark Theme

A dark theme is included using:

css
@media (prefers-color-scheme: dark)


The dark theme changes the CSS custom properties in `:root` rather than rewriting the entire stylesheet.

## Conclusion

This project provides the visual foundation for the SpendWise budget tracker capstone project. It demonstrates the use of modern CSS layout techniques while keeping the financial information static and focused on the dashboard structure.



