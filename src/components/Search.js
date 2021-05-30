import React from 'react';

const Search = (props) => {
    const search = React.useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        props.onchange(search.current.value);
    };
    return (<div className="jumbotron">
        <h1 className="display-4">CONTENT GUIDE</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Channels"  name="search" ref={search}  value={props.finder} />
                <div className="input-group-append">
                    <span className="input-group-text btnsearch" id="basic-addon2" onClick={handleSubmit}><svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M15.7 14.3l-3.1-3.1c2.3-3.1 1.7-7.5-1.4-9.9S3.7-.4 1.3 2.7s-1.7 7.5 1.4 9.9c2.5 1.9 5.9 1.9 8.5 0l3.1 3.1c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4zM2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5c-2.7 0-5-2.2-5-5z"></path></svg></span>
                </div>
            </div>
        </form>
        </div>)
}


export default Search;