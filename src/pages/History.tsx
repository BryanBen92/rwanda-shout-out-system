
import { MainLayout } from "@/layouts/MainLayout";
import { SubmissionHistory } from "@/components/submission-history";

export default function History() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Submission History</h1>
          <p className="text-muted-foreground mt-2">
            Track the status of your previous submissions to village leadership.
          </p>
        </div>
        
        <SubmissionHistory />
      </div>
    </MainLayout>
  );
}
