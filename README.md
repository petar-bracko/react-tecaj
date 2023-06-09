# REACT TEČAJ

## 1. Router

1. Install router with: `npm install react-router-dom` / `yarn add react-router-dom`.
2. Create router file that returns _BrowserRouter_ component with _Routes_.
3. _App.tsx_ returns Router instance wrapped with UserAuthProvider.

```
<Route element={<ProtectedRoutes />}>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
</Route>
```

Creates reusable layout ('ProtectedRoutes') used by child routes ('Home' and 'About'). ProtectedRoutes uses `<Outlet />` to render_children.

## 2. UserAuthContext

1. Create UserAuthContext file - _createContext_ (Typed with provider values).
2. Create UserAuthProvider with initial values.
3. Wrap Router component with UserAuthProvider.
4. Create custom hook for using UserAuthContext.

### 2.a Persist Context

1. Save user login data to local storage.
2. Check local storage (component level) and user context (effect) in route guard (ex. 'RequireAuth', 'RouteGuard', 'ProtectedRoutes', ...).
3. rehydrateContext effect depending on location + init load.
4. If no local storage -> reset context and redirect to login.
5. If no context (full page reload) -> read from local storage and rehydrate context.
6. Route guard returns shared layout or navigates to login based on local storage.

## 3. Redux

1. Install `@reduxjs/toolkit` and `react-redux`
2. Create redux store (redux/redux-store.ts)
3. Provide Redux store to your app (in main.tsx entrypoint)
4. Create slices (features) - export nameSlice.actions and default nameSlice.reducer
5. Use in consumers with `useSelector` (read) and `useDispatch` (write)

### 3.a TypeScript support

1. Export types RootState and AppDispatch from store.ts
2. Implement custom hook for typed store selector and dispatch
