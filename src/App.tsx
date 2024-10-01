import Navigation from "./Navigation/Navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Navigation />
      </div>
    </AuthProvider>
  );
}

export default App;
