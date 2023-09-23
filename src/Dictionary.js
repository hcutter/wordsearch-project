import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
        console.log(response.data);
    }

    function handleSheCodesResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search() {
        let key = "6da73513tdfa9bf3a542b484aeb6odc0";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionaryResponse);

        let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${key}`;
        axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">         
                <section>
                    <h1>What word do you want to look up?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
                </form>
                <div className="hint">
                    suggested key words: sunset, yoga, superfluous...
                </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}