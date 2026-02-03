import { currentUser } from "@/modules/authentication/actions";
import Header from "@/modules/layout/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Workspace page",
};

export default async function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <>
      {/*@ts-ignore*/}
      <Header user={user} />
      <main className="h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] flex overflow-hidden">
        <div className="flex h-full w-full">
          {/* Left tab panel */}
          <div className="w-12 shrink-0 border-r border-zinc-800 bg-zinc-900">
            tabbedleft panel
          </div>

          {/* Main content */}
          <div className="flex-1 bg-zinc-900">{children}</div>
        </div>
      </main>
    </>
  );
}
