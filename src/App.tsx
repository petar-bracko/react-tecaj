import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserAuthProvider } from "./components/user-auth/UserAuthProvider";
import { Router } from "./router";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAuthProvider>
        <Router />
      </UserAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
