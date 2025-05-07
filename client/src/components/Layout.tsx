import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import AccessibilityPanel from "./AccessibilityPanel";
import { useTheme } from "@/hooks/useTheme";
import { useFontSize } from "@/hooks/useFontSize";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const { fontSize } = useFontSize();

  useEffect(() => {
    // Apply theme and font size to body element
    document.body.className = `${theme}`;
    document.body.setAttribute('data-font-size', fontSize);
  }, [theme, fontSize]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
      <AccessibilityPanel />
    </div>
  );
}
