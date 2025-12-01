import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage';
import Blog from './pages/BlogPage/Blog';
import BlogDetail from './pages/BlogPage/BlogDetail';
import { AppProvider } from './Context/AppProviders';

// Dashboard children
import Overview from './pages/Dashboard/Component/Overview/Overview';
import Posts from './pages/Dashboard/Component/Posts/Posts';
import Profile from './pages/Dashboard/Component/Profile';
import AllPosts from './pages/Dashboard/Component/AllPosts/AllPosts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Route>

      <Route path="/dashboard" element={<DashboardPage />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="add-post" element={<Posts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="all-posts" element={<AllPosts />} />
      </Route>
    </>
  )
);

const App = () => (
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

export default App;
