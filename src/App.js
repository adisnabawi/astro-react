import './App.css';
import Header from './components/Header.js';
import List from './components/List.js';
import Search from './components/Search.js';
import Content from './components/Content.js';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Category from './components/Category';

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
            <div className="category">
              <div className="col-md-2">
                <NavLink to="/">
                  <div className="card">
                    <img className="card-img-top" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_all.jpg" alt="Card all" />
                    <div className="card-body">
                      <p className="card-text">All Channels</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-2">
                <NavLink to="/category/sports">
                  <div className="card">
                    <img className="card-img-top" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_sports.jpg" alt="Card sports" />
                    <div className="card-body">
                      <p className="card-text">Sports</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-2">
                <NavLink to="/category/variety entertainment">
                  <div className="card">
                    <img className="card-img-top" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_sports.jpg" alt="Card variety" />
                    <div className="card-body">
                      <p className="card-text">Variety</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <List lists={items} find={value}/>
          </div>
          
        </Route>
        <Route path="/content/:idno">
          <Content />
        </Route>
        <Route path="/category/:cat">
        <Search onchange={(e) => { onchange(e) }} />
          <div className="container">
            <div className="category">
            <div className="col-md-2">
                <NavLink to="/">
                  <div className="card">
                    <img className="card-img-top" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_all.jpg" alt="Card all" />
                    <div className="card-body">
                      <p className="card-text">All Channels</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-2">
                <NavLink to="/category/sports">
                  <div className="card">
                    <img className="card-img-top" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_sports.jpg" alt="Card sports" />
                    <div className="card-body">
                      <p className="card-text">Sports</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-2">
                <NavLink to="/category/variety entertainment">
                  <div className="card">
                    <img className="card-img-top" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_sports.jpg" alt="Card variety" />
                    <div className="card-body">
                      <p className="card-text">Variety</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          <Category lists={items} find={value}/>
          </div>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
  }
}

export default App;
