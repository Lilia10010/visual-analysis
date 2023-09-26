import "./styles/global.css";

import { ServerFunction } from "./components/TestIntegration";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="bg-white dark:bg-pink-500">
      <h3>hello word</h3>
      <ThemeSwitcher />

      <ServerFunction />
    </div>
  );
}

export default App;
