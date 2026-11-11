import { Badge } from "@/components/ui/badge";

export default function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Badge 
            className="h-auto px-3.5 py-1.5 text-sm font-normal" 
            variant="outline"
          >
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  );
}