import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { queryClient } from "./lib/queryClient";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutJSSMVP from "./pages/AboutJSSMVP";
import AboutJSSPDA from "./pages/AboutJSSPDA";
import Messages from "./pages/Messages";
import Governance from "./pages/Governance";
import Administration from "./pages/Administration";
import GreenInitiatives from "./pages/GreenInitiatives";
import EmployeeBenefits from "./pages/EmployeeBenefits";
import ReportsDownload from "./pages/ReportsDownload";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import SplashScreen from "./components/SplashScreen";
import { AppProvider } from "./contexts/AppContext";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about-jssmvp" component={AboutJSSMVP} />
        <Route path="/about-jsspda" component={AboutJSSPDA} />
        <Route path="/messages" component={Messages} />
        <Route path="/governance" component={Governance} />
        <Route path="/administration" component={Administration} />
        <Route path="/green-initiatives" component={GreenInitiatives} />
        <Route path="/employee-benefits" component={EmployeeBenefits} />
        <Route path="/reports-download" component={ReportsDownload} />
        <Route path="/courses" component={Courses} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProvider>
          <Toaster />
          {showSplash ? <SplashScreen /> : <Router />}
        </AppProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
