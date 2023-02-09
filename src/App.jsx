
//Components
import { ListItems } from "./components/listItems/ListItems";
import { TierList } from "./components/tierList/TierList";

export function App() {
  return (
      <div className="max-w-[1500px] w-[80%] mx-auto flex flex-col  gap-10 mb-20">   
        <TierList />
        <ListItems /> 
      </div>
  );
}