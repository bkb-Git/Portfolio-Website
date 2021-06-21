import React, { useState } from "react";
import Home from "./HomePage/Home";
import Projects from "./ProjectsPage/Projects";
import About from "./AboutPage/About";
import { Route, useLocation} from "react-router-dom";
import { Transition } from "react-transition-group";
import "./app.scss";
import { AppContext } from "./context/AppContext";
import gsap from "gsap";

const APP_ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  ABOUT: "/about",
};

const routes = [
  {
    location: {pathname:"/", state: {}},
    name: "Home",
    Component: Home,
    onExit: (appState) => {
      // Exiting Home-page transitions
     
      const tl = gsap.timeline();
      const toProjectsStyle = {right: "0%", bottom:"0%", width:"0%", height:"100%"};
      const toAboutStyle = {right: "0%", bottom:"0%", width: "100%",height: "0%",background: "rgb(65, 59, 59)"}

      switch (appState.router.next) {
        // Exit to Projects page from Home
  
        case APP_ROUTES.PROJECTS: {
          tl.set(".loading-screen", toProjectsStyle);
          tl.to(".loading-screen", { duration: .6, width: "100%" });
          break;
        }
        case APP_ROUTES.ABOUT: {
          tl.set(".loading-screen", toAboutStyle);
          tl.to(".loading-screen", { duration: .6, height: "100%" });
          break;
        }
        default:
          break;
      }
    },
    onEnter: (appState, Node) => {
      // Entering into Home page transitions
      const tl = gsap.timeline();

      switch (appState.router.current) {
        // Enter from Projects
        case APP_ROUTES.PROJECTS: {
          tl.to(".loading-screen", { duration: .8, width: "0%", delay: .8 });
          tl.from(Node, { duration: .8, xPercent: -100 }, "<");
          break;
        }
        // Enter from About
        case APP_ROUTES.ABOUT: {
          tl.to(".loading-screen", { duration: 0.8,height:"0%", delay: 0.8, background: '#413b3b'});
          tl.from(Node, { duration: 0.8, yPercent: -100 }, "<");
          break;
        }
        default:
          break;
      }
    },
  },
  {
    location: {pathname:"/projects", state: {}},
    name: "Projects",
    Component: Projects,
    onExit: (appState) => {
      // Exiting projects page
      const tl = gsap.timeline();
      const toAboutStyle = {right: "0%", bottom:"0%", width: "100%", height: "0%"}
      switch (appState.router.next) {
        // Exiting projects page to Home page

        case APP_ROUTES.HOME: {
          tl.to(".loading-screen", {right: "0%", width: "100%",duration: .6});
          break;
        }
        case APP_ROUTES.ABOUT: {
          tl.set(".loading-screen", toAboutStyle);
          tl.to(".loading-screen", { duration: .6, height: "100%" });
          break;
        }
        default:
          break;
      }
    },
    onEnter: (appState, Node) => {
      // Entering Projects page
      const tl = gsap.timeline();

      switch (appState.router.current) {
        // Enter from Home page
        case APP_ROUTES.HOME: {
          tl.to(".loading-screen", { duration: .8, right: "100%", width: "0%",delay: .8});
          tl.from(Node, { duration: .8, xPercent: 100 }, "<");
          break;
        }
        case APP_ROUTES.ABOUT: {
          tl.to(".loading-screen", {duration: 0.8, height: "0%",delay: 0.8, background: "#413b3b" });
          tl.from(Node, { duration: 0.8, yPercent: -100}, "<");
          tl.set(".loading-screen", {right: "100%", width:"0%",height:"100%"});
          break;
        }
        default:
          break;
      }
    },
  },
  {
    location: {pathname:"/about", state: {}},
    name: "About",
    Component: About,
    onExit: (appState) => {
      // Exiting About page
      const toHomeStyle = {right: "100%", width:"0%",height:"100%",bottom:"0%"}
      const tl = gsap.timeline();

      switch (appState.router.next) {
        case APP_ROUTES.PROJECTS: {
          tl.set(".loading-screen", {bottom:"100%", height:"0%",right:"0%",width:"100%"})
          tl.to(".loading-screen", { duration: .6, height: "100%", bottom:"0%" });
          break;
        }
        case APP_ROUTES.HOME: {
          tl.set(".loading-screen", toHomeStyle)
          tl.to(".loading-screen", { duration: .6, right:"0%", width: "100%" });
          break;
        }
        default:
          break;
      }
    },
    onEnter: (appState, node) => {
      // Entering About page
      const tl = gsap.timeline();
    
      switch (appState.router.current) {
        case APP_ROUTES.PROJECTS: {
          tl.to(".loading-screen", {duration: .8,bottom: "100%",height: "0%",delay: .8, background: "#c6c4c4" });
          tl.from(node, { duration: .8, yPercent: 100 }, "<");
          break;
        }
        case APP_ROUTES.HOME: {
          tl.to(".loading-screen", {duration: .8, right:"100%",width:"0%", delay:.8, background: "#c6c4c4"});
          tl.from(node, { duration: 0.8, xPercent: 100 }, "<");
          break;
        }
        default:
          break;
      }
    },
  },
];

function App() {
  const [appState, setAppState] = useState({ router: {} });
 
  const location = useLocation();

  const updateNextRoute = (nextRoute) => {
    setAppState({
      ...appState,
      router: {
        ...appState.router,
        current: location.pathname,
        next: nextRoute,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...appState,
        updateNextRoute,
      }}
    >
      <div className="loading-screen"></div>
      {routes.map(({ name, location, onEnter, onExit, Component }) => (
        <Route key={name}  exact path={location.pathname}>
          {({ match }) => 

            <Transition
              in={match !== null}
              classNames="page"
              timeout={{exit: 650 , enter:850}}
              unmountOnExit
              
              onEntering={(Node) => onEnter(appState, Node)}
              onExiting={() => onExit(appState)}
            >
               <Component />
            </Transition>
          }
        </Route>
      ))}
    </AppContext.Provider>
  );
}
export default App;
