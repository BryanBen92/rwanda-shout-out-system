
import { Home, Send, History, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Submit",
      path: "/submit",
      icon: Send,
    },
    {
      name: "History",
      path: "/history",
      icon: History,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];
  
  return (
    <nav className="border-t border-border bg-background fixed bottom-0 left-0 right-0 md:relative md:border-t-0 md:border-r md:h-screen md:w-64">
      <div className="flex flex-row md:flex-col justify-around md:justify-start md:pt-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col md:flex-row items-center justify-center md:justify-start p-3 md:p-4 gap-2 md:gap-3 transition-colors",
              location.pathname === item.path
                ? "text-primary hover:text-primary/90"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs md:text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
