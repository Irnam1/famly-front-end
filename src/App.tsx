import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import Public from "./components/Public";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import OutingsList from "./features/outings/OutingsList";
import Profile from "./features/profile/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<DashLayout />}>
        <Route index element={<Welcome />} />
        <Route path="outings">
          <Route index element={<OutingsList />} />
        </Route>
        <Route path="user">
          <Route index element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
