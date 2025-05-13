import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomeView from "../views/Home/HomeView";
import PlusHome from "../views/Plus/PlusHome";
import ArcAcademy from "../views/ArcAcademy/ArcAcademy";
import CourseDetails from "../views/ArcAcademy/Details";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HomeView />
            </motion.div>
          }
        />
        <Route
          path="/plus"
          element={
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PlusHome />
            </motion.div>
          }
        />
                <Route
          path="/academy"
          element={

              <ArcAcademy />
          }
        />
         <Route
          path="/academy/details"
          element={
 
              <CourseDetails />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
