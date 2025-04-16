
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navigation } from "@/components/ui/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  
  return (
    <header className="border-b border-border bg-background py-3 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img 
          src="/rwanda-emblem.png" 
          alt="Rwanda Emblem" 
          className="h-8 w-8 object-contain"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 8v8'/%3E%3Cpath d='M8 12h8'/%3E%3C/svg%3E";
            e.currentTarget.className = "h-8 w-8 text-primary";
          }}
        />
        <h1 className="text-xl font-bold tracking-tight">Rwanda Shout-Out</h1>
      </div>
      
      {isMobile && (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="border-b border-border bg-background py-3 px-4 flex items-center">
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>
            <Navigation />
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
}
