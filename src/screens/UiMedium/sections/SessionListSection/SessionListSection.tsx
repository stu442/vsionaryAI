import { SessionFooter } from "./components/SessionFooter";
import { SessionHeader } from "./components/SessionHeader";
import { SessionList } from "./components/SessionList";

export const SessionListSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-72 bg-white border-r border-border">
      <SessionHeader />
      <SessionList />
      <SessionFooter />
    </aside>
  );
};
