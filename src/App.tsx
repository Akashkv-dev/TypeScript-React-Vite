import { useState } from "react";
import "./App.css";
import { ImageHeader } from "./components/ImageHeader";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ItemList } from "./components/ItemList"
import { type Items } from "./Types/utils";


function App() {
  const [items, setItems] =useState<Items[]>([]);
  const [input, setInput] = useState<string>('');
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    if(input.trim())
    setItems((todo)=>[...todo, {title:input, id:Date.now().toString()}]);
    setInput('');
  }
  
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center object-contain">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input input={input} setInput={setInput}/>
          <Button className="bg-gray-700 w-full p-1">add</Button>
        </form>

        <div className=" h-52 overflow-y-auto">
          <ItemList items={items} setItems={setItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
