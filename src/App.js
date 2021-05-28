import './App.css';
import Header from './components/Header.js';
import List from './components/List.js';
import Search from './components/Search.js';
import Content from './components/Content.js';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [value, setValue] = useState('');

    const onchange = (data) => {
        setValue(data)
    }


  useEffect(() => {
    fetch("https://contenthub-api.eco.astro.com.my/channel/all.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.response);
        },
        (errors) => {
          setIsLoaded(true);
          setError(errors);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
       <Switch>
        <Route exact path="/">
          <Search onchange={(e) => { onchange(e) }} />
          <div className="container">
            <List lists={items} find={value}/>
          </div>
        </Route>
        <Route path="/content/:id">
          <Content />
        </Route>
      </Switch>
      </BrowserRouter>,
      
    </div>
  );
  }
}

export default App;
