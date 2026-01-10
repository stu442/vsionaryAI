import { SessionFooter } from "./components/SessionFooter";
import { SessionHeader } from "./components/SessionHeader";
import { SessionListArea } from "./components/SessionListArea";

export const SessionListSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-72 bg-white border-r border-border">
      <SessionHeader />
      <SessionListArea />
      <SessionFooter />
    </aside>
  );
};
