import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function refreshPage(id) {
    window.location.href="/content/" + id
  }
const List = (props) => {
    if(props.find === null || props.find === ''){
        return (<div className="row">  
            {props.lists.map(item => (
                <Router key={"route" + item.id}>
                        <div className="col-md-3 padbottom" key={item.id}>
                        <NavLink to={"/content/" + item.id} onClick={()=> refreshPage(item.id)}>
                            <div className="card">
                            <img className="card-img-top blackbg" src={item.originalImage} alt={item.title} />
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
        {props.lists.filter(itemlis => (itemlis.title.toUpperCase()).includes(props.find.toUpperCase())).map(item => (
                <Router key={"route" + item.id}>
                        <div className="col-md-3 padbottom" key={item.id}>
                        <NavLink to={"/content/" + item.id} onClick={()=>refreshPage(item.id)}>
                            <div className="card">
                                <img className="card-img-top" src={item.originalImage} alt={item.title} />
                                <div className="card-body">
                                {item.title} {item.stbNumber}
                                </div>
                            </div>
                        </NavLink>
                        </div>
                </Router>
                
        ))
        }
    
          </div>
          
          )
    }
}

export default List;