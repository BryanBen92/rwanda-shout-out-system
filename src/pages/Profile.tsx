
import { MainLayout } from "@/layouts/MainLayout";
import { ProfileSettings } from "@/components/profile-settings";

export default function Profile() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your personal information and app preferences.
          </p>
        </div>
        
        <ProfileSettings />
      </div>
    </MainLayout>
  );
}
