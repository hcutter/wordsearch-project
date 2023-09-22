import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }

    function search(event) {
        event.preventDefault();
        
        let key = "6da73513tdfa9bf3a542b484aeb6odc0";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}