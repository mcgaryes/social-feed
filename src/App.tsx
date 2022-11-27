import React from 'react';
import PostForm from "./components/post-form";
import PostList from "./components/post-list";

function App() {

    return (
        <div className="container mx-auto p-4 max-w-4xl sm:p-8">
            <PostForm/>
            <br />
            <PostList/>
        </div>
    );

}

export default App;
