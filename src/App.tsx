import { Router } from "./router";
import { UserAuthProvider } from "./components/user-auth/UserAuthProvider";
import "./App.css";

function App() {
  return (
    <UserAuthProvider>
      <Router />
    </UserAuthProvider>
  );
}

export default App;
