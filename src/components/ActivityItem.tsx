import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  status: "open" | "completed" | "in-progress";
  icon: LucideIcon;
}

export function ActivityItem({ 
  title, 
  description, 
  time, 
  status, 
  icon: Icon 
}: ActivityItemProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-success/20 text-success border border-success/30";
      case "in-progress":
        return "bg-info/20 text-info border border-info/30";
      case "open":
        return "bg-warning/20 text-warning border border-warning/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "completed";
      case "in-progress":
        return "in-progress";
      case "open":
        return "open";
      default:
        return "unknown";
    }
  };

  return (
    <div className="bg-card border rounded-lg p-4 hover:bg-muted/20 transition-colors animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-muted/50">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-medium text-foreground truncate">{title}</h4>
            <Badge className={getStatusColor()}>{getStatusText()}</Badge>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}