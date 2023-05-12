// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from './pages/AboutScreen';
import ContactScreen from './pages/ContactScreen';
import HomeScreen from './pages/HomeScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import SkillsScreen from './pages/SkillsScreen';
import RadialGradientMouseTracker from "./components/pretty/GradientMouseTracker";

import Layout from './components/layout/Layout';

//www.youtube.com/watch?v=Q9n2mLqXFpU

function App() {
  return (
    <section>
      <RadialGradientMouseTracker />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="about" element={<AboutScreen />} />
            <Route path="contact" element={<ContactScreen />} />
            <Route path="skills" element={<SkillsScreen />} />
            <Route path="projects" element={<ProjectsScreen />} />
          </Routes>
        </Layout>
        <div class="bottomRight">&nbsp;najaleeh@gmail.com</div>
      </BrowserRouter>
    </section>
  );
}

export default App;
