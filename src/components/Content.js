import React, {useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';

const Content = (props) => {

    let { idno } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://contenthub-api.eco.astro.com.my/channel/" + idno +".json")
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
    }, [idno])
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
    return (<div className="jumbotron">
        <img src={items.imageUrl} alt="logo" />
        <h1 className="display-4">{items.title}</h1>
        <p>{items.description}</p>
        </div>)
      }
}


export default Content;