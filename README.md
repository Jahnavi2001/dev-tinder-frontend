# DevTinder

<!-- Episode 01 -->
- Create a Vite + React application
- Remove unnecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate file
- Install react router dom
- Create BrowserRouter > Routes > Route = /Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer

<!-- Episode 02 -->
- Create a login page
- Install axios
- CORS - Install cors in backend => add middleware with configurations: origin, credentials: true
- Whenever you're making API call so pass => { withCredentials: true } in axios
- Install Redux Toolkit => npm install react-redux + npm install @reduxjs/toolkit => https://redux-toolkit.js.org/tutorials/quick-start
- Create configure store => Provider => create slice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logins
- Refactor our code to add constants file + create a component folder



Body
  NavBar
    Route=/  => Feed
    Route=/login => Login
    Route=/connections => Connections
    Route=/profile => Profile