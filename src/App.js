import "./App.css";
import { Book, BookArray } from "./testing";

function App() {
  return (
      <section className=""> 
      {BookArray.map((item)=>{
        return <Book key={item.id} {...item}> </Book>;
      })}
      </section>
    
  );
}

export default App;
