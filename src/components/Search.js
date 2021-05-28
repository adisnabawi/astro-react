import React from 'react';

const Search = (props) => {
    const search = React.useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        props.onchange(search.current.value);
    };
    return (<div className="jumbotron">
        <h1 className="display-4">Astro Content Search!</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search contents"  name="search" ref={search}  value={props.finder} />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2" onClick={handleSubmit}>Search</span>
                </div>
            </div>
        </form>
        </div>)
}


export default Search;