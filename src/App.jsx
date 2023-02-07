
//Components
import { ListItems } from "./components/listItems/ListItems";
import { TierList } from "./components/tierList/TierList";

export function App() {
  return (
      <div className="flex flex-col items-center justify-center gap-10 mb-20">   
        <TierList />
        <ListItems /> 
      </div>
  );
}