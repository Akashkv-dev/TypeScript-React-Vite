
type inputype ={
    input:string;
    setInput:React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({input,setInput}:inputype) => {
  return (
    <div>
        <input type="text" value={input} className="w-full p-2 rounded-sm mb-2" onChange={(e)=>setInput(e.target.value)} />
    </div>
  )
}
