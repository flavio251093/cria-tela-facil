import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderGit2,
  Bug,
  GitBranch,
  Bot,
  BookOpen,
  Settings,
  User
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
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Repositórios", url: "/repositories", icon: FolderGit2 },
  { title: "Issues", url: "/issues", icon: Bug },
  { title: "Branches", url: "/branches", icon: GitBranch },
  { title: "AI Assistant", url: "/ai-assistant", icon: Bot },
  { title: "Base de Conhecimento", url: "/knowledge", icon: BookOpen },
  { title: "Bots Config", url: "/bots", icon: Settings },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-lg transition-all duration-200" 
      : "hover:bg-sidebar-accent/50 transition-all duration-200";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg text-sidebar-foreground">GitHub Muse</h1>
                <p className="text-xs text-sidebar-foreground/60">AI-Powered Development</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-success-foreground" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-sidebar-foreground">Usuário GitHub</p>
                <p className="text-xs text-sidebar-foreground/60">Conectado</p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}