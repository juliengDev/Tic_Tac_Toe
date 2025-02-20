import { Switch } from "@/components/ui/switch";
import Button from "./components/Button";
import iconRestart from "./assets/icon-restart.svg";

function App() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1 className="heading-l mb-12">Bienvenue</h1>
      <Button className="btn-1 mb-8">BUTTON 1</Button>
      <Button className="btn-2 mb-8">BUTTON 2</Button>
      <Button className="btn-restart mb-8">
        <img src={iconRestart} alt="" />
      </Button>
      <Switch />
    </main>
  );
}

export default App;
