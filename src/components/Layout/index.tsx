import { Headerbar } from "../Headerbar";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-background dark:bg-background-dark">
      <div className="fixed top-0 left-0 w-full h-20">
        <Headerbar />
      </div>
      <div className="w-full max-w-[2000px] pt-20">{children}</div>
    </div>
  );
};
