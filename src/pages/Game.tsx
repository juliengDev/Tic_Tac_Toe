import Button from "@/components/ui/Button";
import iconRestart from "../assets/icon-restart.svg";

function Game() {
  return (
    <div>
      <Button className="btn-restart mb-8">
        <img src={iconRestart} alt="" />
      </Button>
    </div>
  );
}

export default Game;
