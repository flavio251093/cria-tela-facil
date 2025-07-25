import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Cpu,
  MessageSquare,
  BarChart3,
  Settings,
  User,
  Brain,
  Zap
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home
  },
  {
    title: "Repositórios",
    url: "/models",
    icon: Cpu
  },
  {
    title: "Issues",
    url: "/assistant",
    icon: MessageSquare
  },
  {
    title: "Branches",
    url: "/analytics",
    icon: BarChart3
  },
  {
    title: "AI Assistant",
    url: "/settings",
    icon: Brain
  },
  {
    title: "Base de Conhecimento",
    url: "/settings",
    icon: Settings
  },
  {
    title: "Bots Config",
    url: "/settings",
    icon: Settings
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} bg-card border-r`} collapsible="icon">
      <SidebarContent>
        {/* Logo GitHub Muse */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg text-foreground">
                  GitHub Muse
                </h1>
                <p className="text-xs text-muted-foreground">AI-Powered Development</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-3 py-2">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && (
                        <span className="text-sm font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status IA */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-success/10 border border-success/20">
            <Zap className="h-3 w-3 text-success animate-pulse" />
            {!collapsed && (
              <span className="text-xs text-success font-medium">IA Online</span>
            )}
          </div>
        </div>

        {/* User Profile */}
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-success-foreground">U</span>
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-foreground">Usuário GitHub</p>
                <p className="text-xs text-muted-foreground">Conectado</p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}