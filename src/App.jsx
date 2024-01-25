// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showInvalidMsg, setShowInvalidMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (
      formData.get("username") === "user" &&
      formData.get("password") === "password"
    ) {
      setIsLogin(true);
    } else {
      setShowInvalidMsg(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {showInvalidMsg && <p>Invalid username or password</p>}
      {!isLogin ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div className="btns">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default App;