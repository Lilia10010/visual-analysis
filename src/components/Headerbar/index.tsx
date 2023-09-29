import { ThemeSwitcher } from "../ThemeSwitcher";
export const Headerbar = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-end items-center px-4 h-full bg-tertiary dark:bg-secondary-dark">
        <ThemeSwitcher />
      </div>
    </div>
  );
};
