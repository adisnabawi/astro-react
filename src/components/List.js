import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { format } from 'date-fns';

function refreshPage(id) {
    window.location.href="/content/" + id
}

const List = (props) => {
    if(props.find === null || props.find === ''){
        return (<div className="row" key="rowsearchempty">  
            {props.lists.map(item => (
                <Router key={"route" + item.id + item.stbNumber}>
                        <div className="col-md-3 padbottom nolinkstyle" key={item.id}>
                        <NavLink to={"/content/" + item.id} onClick={()=> refreshPage(item.id)}>
                            <div className="card">
                            <img className="card-img-top blackbg" src={item.originalImage !== null ? item.originalImage:item.imageUrl} alt={item.title} />
                                <div className="card-body">
                                <h4>{ item.isAstroGoExclusive === false ? item.title : "Astro GO Exclusive Channels" } </h4>
                                { item.isAstroGoExclusive === false ? "CH " + item.stbNumber : item.title } 
                                   <ul className="ulsc">
                                    {item.currentSchedule.map(sche => (
                                        <li key={"schedule-eventid-" + sche.eventId}>
                                            <span className="schedule1">{ format(new Date(sche.datetime), 'hh:mm a')}</span> 
                                            <span className="schedule2">{sche.title}</span> 
                                        </li>
                                    )
                                    )}
                                        
                                    </ul>
                                </div>
                            </div>
                        </NavLink>
                        </div>
                       
                </Router>

            ))}
            
            </div>)
    }else {
        var a = 0;
        props.lists.filter(itemlis => (itemlis.title.toUpperCase()).includes(props.find.toUpperCase())).map((item,i) => {
            a++;
            return a;
        })
        return (<div className="row" key="rowsearch"> 
        <p>Search on  <b>{props.find}</b>. Total {a} found. </p> 
        {props.lists.filter(itemlis => (itemlis.title.toUpperCase()).includes(props.find.toUpperCase())).map((item,i) => (
                <Router key={"route" + item.id}>
                        <div className="col-md-3 padbottom nolinkstyle" key={item.id}>
                        <NavLink to={"/content/" + item.id} onClick={()=>refreshPage(item.id)}>
                            <div className="card">
                                <img className="card-img-top blackbg" src={item.originalImage !== null ? item.originalImage:item.imageUrl} alt={item.title} />
                                <div className="card-body">
                                <h4>{ item.isAstroGoExclusive === false ? item.title : "Astro GO Exclusive Channels" } </h4>
                                { item.isAstroGoExclusive === false ? "CH " + item.stbNumber : item.title } 
                                    <ul className="ulsc">
                                    {item.currentSchedule.map(sche => (
                                        <li key={"schedule-eventid-" + sche.eventId}>
                                            <span className="schedule1">{ format(new Date(sche.datetime), 'hh:mm a')}</span> 
                                            <span className="schedule2">{sche.title}</span> 
                                        </li>
                                    )
                                    )}
                                        
                                    </ul>
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