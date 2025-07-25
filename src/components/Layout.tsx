import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/models":
        return "Modelos de IA";
      case "/assistant":
        return "Assistente IA";
      case "/analytics":
        return "Análises";
      case "/settings":
        return "Configurações";
      default:
        return "Dashboard";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 flex items-center border-b border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="ml-4" />
            <div className="ml-4">
              <h1 className="text-lg font-semibold text-foreground">{getPageTitle()}</h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;