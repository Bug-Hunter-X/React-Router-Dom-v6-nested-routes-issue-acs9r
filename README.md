# React Router Dom v6 Nested Routes Issue

This repository demonstrates a common issue with nested routes in React Router Dom v6.  The nested route `/about/contact` is never matched because it's a child of a route with a path `/about`.  This happens because React Router matches routes from top to bottom and once a route is matched the nested routes under that are not evaluated.

## Bug
The provided `bug.js` file demonstrates the problem. The `/about/contact` route is always ignored, only `/about` is matched.

## Solution
The solution is to use the `useParams` hook to match the nested route. The `bugSolution.js` file demonstrates the solution.