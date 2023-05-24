# REACT TEČAJ

## Router

1. Install router with: npm install react-router-dom / yarn add react-router-dom.
2. Create router file that returns BrowserRouter component with Routes.
3. App.tsx returns Router instance.

<Route element={<ProtectedRoutes />}>
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
</Route>
-- Creates reusable layout ('ProtectedRoutes') used by child routes ('Home' and 'About').
--ProtectedRoutes uses <Outlet /> to render children.

## UserAuthContext

1. Create UserAuthContext file - createContext (Typed with provider values)
2. Create UserAuthProvider with initial values
3. Wrap Router component with UserAuthProvider
4. Create custom hook for using UserAuthContext

### Persist Context

1. Save user login data to local storage
2. Check local storage (component level) and user context (effect) in route guard (ex. 'RequireAuth', 'RouteGuard', 'ProtectedRoutes', ...)
   2.0 rehydrateContext effect depending on location + init load
   2.1 If no local storage -> reset context and redirect to login
   2.2 If no context (full page reload) -> read from local storage and rehydrate context
   2.3 Route guard returns shared layout or navigates to login based on local storage
