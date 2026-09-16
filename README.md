# My Todos

A responsive full-stack Todo application built with React and Vite. My Todos allows authenticated users to create, organize, edit, complete, filter, and sort tasks through a clean and accessible interface.

## Features

* User authentication and protected routes
* Create new todos
* Edit existing todos
* Mark todos as completed
* Filter todos by title
* Filter by active, completed, or all todos
* Sort todos by creation date or title
* Sort in ascending or descending order
* View todo statistics from the Profile page
* View completion percentage
* Loading, error, and empty states
* Input validation
* Responsive design for mobile, tablet, and desktop
* Keyboard-accessible navigation and controls
* Custom dark interface using CSS Modules
* Custom 404 page for invalid routes

## Technologies

* React
* React Router
* Vite
* JavaScript
* CSS Modules
* REST API
* Context API
* `useReducer`
* `useMemo`
* Custom React hooks

## Security and Validation

The application includes several practices designed to improve security and data integrity:

* Protected routes prevent unauthenticated access to todo and profile pages
* Authentication state is managed through React Context
* API requests include credentials when required
* CSRF tokens are included with protected API requests
* Password fields use protected password inputs
* Todo titles are validated before submission
* Empty and whitespace-only todos are rejected
* Todo titles are limited to 200 characters
* API failures are handled with user-facing error states
* No authentication credentials are hardcoded into the application

## Accessibility

The interface includes accessibility considerations such as:

* Semantic HTML elements
* Associated labels for form controls
* Visible keyboard focus indicators
* Keyboard-accessible interactive elements
* Accessible loading and error messages
* ARIA attributes for dynamic status messages
* Accessible progress information
* Sufficient text and background contrast
* Touch-friendly controls with minimum target sizes

## Responsive Design

The application is designed to work across mobile, tablet, and desktop screen sizes. Responsive layouts adjust navigation, forms, filters, todo controls, statistics, and action buttons for smaller displays.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/giddydavis1020/ctd-swag.git
```

2. Navigate into the project directory:

```bash
cd ctd-swag
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root and configure the API target:

```env
VITE_TARGET=your_api_url_here
```

5. Start the development server:

```bash
npm run dev
```

The Vite development server is configured to run on:

```text
http://localhost:3001
```

## Production Build

Create a production build with:

```bash
npm run build
```

The optimized production files will be generated in the `dist` directory.

## Application Routes

| Route      | Description                                | Authentication |
| ---------- | ------------------------------------------ | -------------- |
| `/`        | Redirects to the appropriate starting page | No             |
| `/login`   | User login                                 | No             |
| `/about`   | Application information and features       | No             |
| `/todos`   | Todo management dashboard                  | Required       |
| `/profile` | Account information and todo statistics    | Required       |
| `*`        | Custom 404 page                            | No             |

## Project Structure

```text
src/
├── components/
├── contexts/
├── features/
│   └── Todos/
├── pages/
├── reducers/
├── shared/
├── utils/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Todo Management

Todo data is retrieved and updated through API requests. The application supports creating, reading, updating, completing, filtering, and sorting todos while providing feedback for loading and failed operations.

Optimistic UI updates are used for certain todo operations so the interface can respond immediately while the application communicates with the API.

## Author

Developed by Dante as part of the Code the Dream React curriculum.
