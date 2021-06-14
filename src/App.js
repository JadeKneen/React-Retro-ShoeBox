import React, { useState } from "react";
import "./App.css";

function App() {

 const [name, setTodoName] = useState("");

 return (
   <div className="App">
     <div className="heading">
       <h1>Retro Shoebox</h1>
     </div>
     <form className="add-comment-form">
       <input
         placeholder="Add Comment"
       />
       <button type="submit">+</button>
     </form>
   </div>
 );
}

export default App;
