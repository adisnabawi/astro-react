import React, {useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';

const Content = (props) => {

    let { idno } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [schedule, setSchedule] = useState([]);


    useEffect(() => {
        fetch("https://contenthub-api.eco.astro.com.my/channel/" + idno +".json")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result.response);
            setSchedule(result.response.schedule);
            },
            (errors) => {
            setIsLoaded(true);
            setError(errors);
            }
        )
    }, [idno])
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
    return (<div>
        <div className="jumbotron">
        <img src={items.imageUrl} alt="logo" />
        <h1 className="display-4">{items.title}</h1>
        <p>{items.description}</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-start">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                {
                  Object.keys(schedule).map((datesc, i) => 
                    (
                      <button key={datesc} className={"nav-link" + (i === 0 ? ' active': '')} id={"v-pills-home-" + datesc} data-bs-toggle="pill" data-bs-target={"#v-pills-" + datesc} type="button" role="tab" aria-controls={"v-pills-" + datesc} aria-selected={i === 0 ? ' true': 'false'}>{datesc}</button>
                    )
                    
                   
                  )
                }
                  
            
              </div>
              <div className="tab-content" id="v-pills-tabContent">
              {
                  Object.keys(schedule).map((datesc, i) => 
                    (
                    <div key={"content-" + i} className={"tab-pane fade show" + (i === 0 ? ' active': '')} id={"v-pills-" + datesc} role="tabpanel" aria-labelledby={"v-pills-" + datesc}>
                      <ul className="ulsc">
                        {
                          schedule[datesc].map(val => (
                            <li key={val.eventId}>{val.title} - {val.datetime}</li>
                          )

                        )
                        }
                      </ul>
                      
                    </div>
                    )
                  )
              }
              </div>
            </div>
          </div>
        </div>
      </div>)
      }
}


export default Content;