import React from "react";
import "./App.css";
import DataTable from "./DataTable";

function App() {

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
     <br/>

     <DataTable/>

   </div>
 );
}

export default App;
