import SidebarNotes from "./@sidebar/SidebarNotes";
import css from "./FilterLayout.module.css";

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <main className={css.main}>{children}</main>
    </div>
  );
}
