
import { MainLayout } from "@/layouts/MainLayout";
import { SubmissionForm } from "@/components/submission-form";

export default function Submit() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Submit Your Feedback</h1>
          <p className="text-muted-foreground mt-2">
            Share your complaints, suggestions, or questions with your village leadership.
          </p>
        </div>
        
        <SubmissionForm />
      </div>
    </MainLayout>
  );
}
