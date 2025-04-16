
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Megaphone, Users, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: Send,
      title: "Submit Feedback",
      description: "Easily send your complaints or suggestions directly to village leaders",
      link: "/submit",
      linkText: "Submit Now",
    },
    {
      icon: Megaphone,
      title: "Voice Your Concerns",
      description: "Ensure your voice is heard by the people who can make a difference",
      link: "/submit",
      linkText: "Get Started",
    },
    {
      icon: Users,
      title: "Community Improvement",
      description: "Help improve your village by sharing constructive feedback",
      link: "/submit",
      linkText: "Contribute",
    },
    {
      icon: Share2,
      title: "Track Progress",
      description: "Follow the status of your submissions and see results",
      link: "/history",
      linkText: "View History",
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Rwanda Shout-Out</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple way to connect citizens with village leadership for a better tomorrow
          </p>
        </section>

        <section className="relative overflow-hidden rounded-lg bg-gradient-to-b from-primary/20 to-primary/5 p-8 md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight">Make Your Voice Heard</h2>
              <p className="text-muted-foreground">
                Submit your complaints, suggestions, and feedback directly to your village chiefs and local leaders.
                Help build a better community through open communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button asChild size="lg">
                  <Link to="/submit">Submit Feedback</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/history">View History</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-lg">
              <img 
                src="/village-community.jpg" 
                alt="Rwanda Community" 
                className="rounded-lg object-cover w-full h-64 md:h-80 shadow-lg"
                onError={(e) => {
                  // Fallback to a colored div if image fails to load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.className = "rounded-lg w-full h-64 md:h-80 bg-gradient-to-br from-rwanda-blue to-rwanda-green flex items-center justify-center";
                    const textElement = document.createElement('div');
                    textElement.className = "text-white text-2xl font-bold text-center p-8";
                    textElement.innerText = "Building a Stronger Rwanda Together";
                    parent.appendChild(textElement);
                  }
                }}
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link to={feature.link}>{feature.linkText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
