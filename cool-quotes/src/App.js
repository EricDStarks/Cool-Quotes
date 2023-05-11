import logo from './logo.svg';
import './App.css';
import data from './data.json';
import axios from "axios";

function App() {
  let API_KEY = "09XA0l0yY8Xx1LLzVI1yvg==blc5iY7UNlUh82UI"
  let url = `https://api.api-ninjas.com/v1/quotes?category=best&limit=3`
  let headers ={
    "X-Api-Key": API_KEY
  }
  let response = axios.get(url, {"headers" :headers})
  .then(response => {console.log(response.data)})

  let listItems = data.map(function(element){
    return <li><h1>{element}</h1></li>
  })
  return (
    
    <div className="App">
      <div style={{border: "8px solid teal"}}>
      <h1>Langston Hughes Quotes</h1>
      </div>
      <header>
        
        <img src="https://www.thefamouspeople.com/profiles/images/langston-hughes-15.jpg" width="200" margin_top="20px" className="Langston Hughes" alt="Langston Hughes" />
        
        <ul>
          {listItems}
        </ul>
        
      </header>
    </div>

    
  );
}

export default App;
