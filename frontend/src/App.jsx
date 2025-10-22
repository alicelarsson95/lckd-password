import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import Login from "./pages/Login.jsx"; */
import CreatePassword from "./pages/CreatePassword.jsx";
/* import Signup from "./pages/Signup"; */
/* import ViewPasswords from "./pages/ViewPasswords.jsx"; */
/* import EditDeletePassword from "./pages/EditDeletePassword"; */

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#15085F] text-yellow-400">
      <div className="w-full max-w-md p-6 rounded-xl bg-[#0d0d6b]/40 shadow-xl">
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout><Login /></Layout>} /> */}
       {/*  <Route path="/signup" element={<Layout><Signup /></Layout>} /> */}
        {/* <Route path="/vault" element={<Layout><ViewPasswords /></Layout>} /> */}
        <Route path="/vault/new" element={<Layout><CreatePassword /></Layout>} />
       {/*  <Route path="/vault/:id/edit" element={<Layout><EditDeletePassword /></Layout>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;