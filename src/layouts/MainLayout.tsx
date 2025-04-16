
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {!isMobile && <Navigation />}
        <main className="flex-1 px-4 md:px-6 py-6 pb-20 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
