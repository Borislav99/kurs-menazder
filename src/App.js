import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "./context/login_context";
import {
  Login,
  Home,
  Exercise,
  Presentation,
  Projects,
  Task,
  Error,
  ProtectedRoute,
  Course,
  Tutorial,
  Lecture,
  Homepage,
} from "./pages/index";
function App() {
  const { isAuth } = useLoginContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* homepage route */}
        <Route path="/">
          <Route index element={<Homepage />} />
        </Route>
        {/* end of homepage route */}
        {/* student routes */}
        <Route path="/student">
          <Route
            index
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="homepage"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Course />
              </ProtectedRoute>
            }
          />
          <Route
            path="presentations"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Presentation
                  value="prezentacije"
                  path="/student/presentations"
                  third={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="projects"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Projects
                  value="projekti"
                  path="student/projects"
                  third={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="exercises"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Exercise
                  value="vjezbe"
                  path="student/exercises"
                  third={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="tasks"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Task />
              </ProtectedRoute>
            }
          />
          <Route
            path="tutorials"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Tutorial />
              </ProtectedRoute>
            }
          />
          <Route
            path="lectures"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Lecture />
              </ProtectedRoute>
            }
          />
          {/* end of student routes */}
        </Route>
        {/* login route */}
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
        {/* end of login route */}
        {/* error route */}
        <Route path="*" element={<Error />} />
        {/* end of error route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
