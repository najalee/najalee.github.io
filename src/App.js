// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from './pages/AboutScreen';
import ContactScreen from './pages/ContactScreen';
import HomeScreen from './pages/HomeScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import SkillsScreen from './pages/SkillsScreen';
import PortfolioWebsiteScreen from './pages/projects_screens/PortfolioWebsiteScreen';

import Layout from './components/layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route index element={<HomeScreen />} />
            <Route path="about" element={<AboutScreen />} />
            <Route path="contact" element={<ContactScreen />} />
            <Route path="skills" element={<SkillsScreen />} />
            <Route path="projects" element={<ProjectsScreen />} />
            <Route
              path="projects/portfolio_website"
              element={<PortfolioWebsiteScreen />}
            />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
