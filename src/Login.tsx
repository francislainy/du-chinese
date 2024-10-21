import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { login } from "./api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      if (response.status === 200) {
        authContext?.login(username, password);
        navigate("/lessons");
      } else {
        setErrorMessage(
          "Login failed. Please check your credentials and try again.",
        ); // Update error message
      }
    } catch (error) {
      setErrorMessage(
        "Error logging in. Please check your credentials or try again later.",
      ); // Update error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        {errorMessage && (
          <p className="mb-4 text-red-500">{errorMessage}</p> // Display error message
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
