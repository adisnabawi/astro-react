import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function refreshPage(id) {
    window.location.href="/content/" + id
  }
const List = (props) => {
    if(props.find === null || props.find === ''){
        return (<div className="row">  
            {props.lists.map(item => (
                <Router>
                        <div className="col-md-4" key={item.id}>
                        <NavLink to={"/content/" + item.id} onClick={()=> refreshPage(item.id)}>
                            <div className="card">
                                <div className="card-body">
                                {item.title} {item.stbNumber}
                                </div>
                            </div>
                        </NavLink>
                        </div>
                       
                </Router>

            ))}
            
            </div>)
    }else {
        return (<div className="row"> 
        <p>Search on  {props.find} </p> 
        {props.lists.filter((item)=>{
            if(item.title.includes(props.find.toUpperCase()) ){
                return item
            }
            }).map(item => (
                <Router>
                        <div className="col-md-4" key={item.id}>
                        <NavLink to={"/content/" + item.id} onClick={()=>refreshPage(item.id)}>
                            <div className="card">
                                <div className="card-body">
                                {item.title} {item.stbNumber}
                                </div>
                            </div>
                        </NavLink>
                        </div>
                </Router>
                
            
          ))}
    
          </div>
          
          )
    }
}

export default List;