import React from 'react';
import './App.css';
import PostForm from "./components/post-form";
import PostList from "./components/post-list";

function App() {

    return (
        <div className="container mx-auto p-10">
            <PostForm/>
            <br />
            <PostList/>
        </div>
    );

}

export default App;
