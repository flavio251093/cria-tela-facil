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
          <header className="h-16 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold text-foreground">{getPageTitle()}</h1>
                <p className="text-sm text-muted-foreground">Visão geral dos seus projetos e atividades</p>
              </div>
            </div>
            
            {/* Ask AI Button */}
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Ask AI
            </button>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto bg-muted/20">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;