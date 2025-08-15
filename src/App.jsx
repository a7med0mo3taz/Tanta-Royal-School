import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import 'flowbite/dist/flowbite.min.js';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import British from './components/British/British'
import American from './components/American/American'
import National from './components/National/National'
import FAQS from './components/FAQ\'S/FAQS';
import Gallery from './components/Gallery/Gallery';
import Photos from './components/Photos/Photos';
import Videos from './components/videos/Videos';
import Careers from './components/Careers/Careers';
import Blog from './components/Blog/Blog';
import Articles from './components/Articles/Articles';
import News from './components/News/News';
import Uniform from './components/Uniform/Uniform';
import Contact from './components/Contact/Contact';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageProvider } from './context/langContext';
import { ModeProvider } from './context/modeContext';
import Policy from './components/Policy/Policy';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewYearParty from './components/Photos/NewYearParty/NewYearParty';
import Tutorials from './components/Tutorials/Tutorials';



function App() {


  // language
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.classList.remove('rtl');
    }
  }, [i18n.language]);

  const router = createBrowserRouter([
    {
      element: <Layout />, children: [
        { path: "british", element: <British/>},

        { path: "american-systems", element: <American/>},

        { path: "national", element: <National/>},

        { path: "", element: <Home /> },

        { path: "about-us", element: <About/> },

        { path: "faq", element:<FAQS/> },

        { path: "gallery", element: <Gallery/> },

        { path: "gallery/photos", element: <Photos/> },
        
        { path: "gallery/photos/new-years-party-2025", element: <NewYearParty/> },

        { path: "gallery/videos", element: <Videos/> },

        { path: "careers", element: <Careers/> },

        { path: "blog", element: <Blog/> },

        { path: "blog/articles", element: <Articles/> },

        { path: "blog/news", element: <News/> },
        
        { path: "blog/tutorials", element: <Tutorials/> },

        { path: "uniform", element: <Uniform/> }, 

        {path: "/contact-us", element: <Contact/>},
        
        {path: "/privacy-policy", element: <Policy/>},

        { path: "*", element: <NotFound /> }
      ]
    }
  ])



  return (
    <>
    
      <div>
        <LanguageProvider>
          <ModeProvider>
        <RouterProvider router={router} />
          </ModeProvider>
        </LanguageProvider>
      </div>

    </>
  )
}

export default App
