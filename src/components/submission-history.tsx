
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Submission {
  id: string;
  name: string;
  phoneNumber: string;
  village: string;
  category: string;
  subject: string;
  message: string;
  status: "Pending" | "Resolved" | "Rejected";
  date: string;
}

export function SubmissionHistory() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      try {
        const storedSubmissions = localStorage.getItem("submissions");
        if (storedSubmissions) {
          setSubmissions(JSON.parse(storedSubmissions));
        }
      } catch (error) {
        console.error("Failed to load submissions:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "Resolved":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "Rejected":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No submissions yet</CardTitle>
          <CardDescription>
            Your submission history will appear here once you submit your first complaint or suggestion.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submission History</CardTitle>
        <CardDescription>
          Track the status of your submissions to village leadership.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Village</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">
                    {format(new Date(submission.date), "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell>{submission.subject}</TableCell>
                  <TableCell>{submission.village}</TableCell>
                  <TableCell className="capitalize">{submission.category}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(submission.status)}>
                      {submission.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
