import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

      <div className="mt-6 flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm"
                >
                  {Icon && <Icon className="size-4" aria-hidden />}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}