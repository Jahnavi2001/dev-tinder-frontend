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

<!-- Episode 03 -->
- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- Build the user card on the feed
- Edit profile feature
- Show toast message on save of profile

<!-- Episode 04 -->
- New Page - See all my existing connections
- New Page - See all my connection requests
- Feature - Accept/Reject connection request

<!-- Episode 05 -->
- Send Interest/Ignore the user card from the feed
- Signup New User
- E2E Testing

<!-- Routes -->
Body
  NavBar
    Route=/  => Feed
    Route=/login => Login
    Route=/connections => Connections
    Route=/profile => Profile