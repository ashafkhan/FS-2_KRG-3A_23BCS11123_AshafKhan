# React Context Demo - UserContext

This project demonstrates how to use React Context to avoid prop drilling by storing and consuming user data (username and isLoggedIn status) at the top level of the application.

## Structure

- **UserContext.js**: Defines the `UserContext` and `UserProvider` component with mock values
  - Mock username: `'Arjun'`
  - Mock isLoggedIn: `true`

- **Profile.js**: A component deep in the component tree that consumes `UserContext` using `useContext()` hook without receiving props

- **DashboardLayout.js** & **ContentArea.js**: Intermediate components that don't need to know about user data (demonstrating no prop drilling needed)

- **App.js**: Main component that wraps the application with `UserProvider`

- **index.js**: Entry point that renders the App

## How It Works

1. The `UserProvider` wraps the entire application at the top level in `App.js`
2. The provider passes `mockUserValues` (username and isLoggedIn) to the context
3. Intermediate components (`DashboardLayout`, `ContentArea`) don't need to handle user data
4. The `Profile` component deep in the tree directly accesses user data via `useContext(UserContext)`

## Usage

```javascript
// In Profile.js
const { username, isLoggedIn } = useContext(UserContext);
```

## Running the App

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

The app will open at `http://localhost:3000` and display the user profile with the mock username "Arjun" and logged-in status.
