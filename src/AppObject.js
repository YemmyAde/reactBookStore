import "./App.css";
import { Book, FirstBook, SecondBook } from "./testingObject";

function App() {
  return (
    <>
      <p>Hello World, we are learning react</p>
      <Book
        ImgSection={FirstBook.ImgSection}
        Title={FirstBook.Title}
        Author={FirstBook.Author}
        OtherInfo={FirstBook.OtherInfo}
      ></Book>
      <Book 
      ImgSection={SecondBook.ImgSection}
      Title={SecondBook.Title}
      Author={SecondBook.Author}
      OtherInfo={SecondBook.OtherInfo}>
        <p> $11.55</p>
      </Book>
    </>
  );
}

export default App;
