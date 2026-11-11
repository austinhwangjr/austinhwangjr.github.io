import type { Entry } from "@/data/about";

export default function EntryList({
  entries,
  emptyText,
}: {
  entries: Entry[];
  emptyText: string;
}) {
  if (entries.length === 0) {
    return <p className="text-sm text-muted-foreground">{emptyText}</p>;
  }

  return (
    <ul className="flex flex-col gap-8">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`}>
          <p className="font-medium">{entry.title}</p>
          <p className="text-sm text-muted-foreground">{entry.organization}</p>
          <p className="text-sm text-muted-foreground">{entry.period}</p>
          {entry.note && <p className="mt-1 whitespace-pre-line text-sm leading-6">{entry.note}</p>}
        </li>
      ))}
    </ul>
  );
}