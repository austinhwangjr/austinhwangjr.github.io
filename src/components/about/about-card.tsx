import { Card, CardContent } from "@/components/ui/card";

export default function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        {children}
      </CardContent>
    </Card>
  );
}