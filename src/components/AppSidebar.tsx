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
    icon: Home,
    description: "Visão geral do sistema"
  },
  {
    title: "Modelos de IA",
    url: "/models",
    icon: Cpu,
    description: "Gerenciar modelos de IA"
  },
  {
    title: "Assistente IA",
    url: "/assistant",
    icon: MessageSquare,
    description: "Chat com assistente IA"
  },
  {
    title: "Análises",
    url: "/analytics",
    icon: BarChart3,
    description: "Relatórios e métricas"
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
    description: "Configurações do sistema"
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
      ? "bg-primary text-primary-foreground font-medium shadow-lg transition-all duration-200 animate-glow" 
      : "hover:bg-sidebar-accent/50 transition-all duration-200 hover:scale-105";

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-60"} glass-card border-r-0`} collapsible="icon">
      <SidebarContent>
        {/* Logo IA.LUA */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-border">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                  IA.LUA
                </h1>
                <p className="text-xs text-sidebar-foreground/60">Sistema de Gerenciamento de IA</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs opacity-70">{item.description}</span>
                        </div>
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
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center hover-glow">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-sidebar-foreground">Usuário IA.LUA</p>
                <p className="text-xs text-sidebar-foreground/60">Sistema Ativo</p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}