import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2 className='text-3xl'>Some Question:-</h2>
            <div>
                <h1>Q.1--What is the purpose of React Router?</h1>
                <p>React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div>
                <h1>Q.1--How does context API works?</h1>
                <p>Context API is a great addition to react js and helps developers eliminate challenges when passing data. It is the ideal structure to share the data with different components and never pass data via props.
                    Developers use it for special use cases. You may need to follow step by step guidelines to use API.Context API is a component-based front-end framework that passes data from one component to another. It appears like passing data from parent to child components. Certain props like UI themes, language settings, local preferences, and others need different components with the application.</p>
            </div>
            <div>
                <h1>Q.3--what is useref in react?</h1>
                <p>Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.useRef () is a built-in React hook. This hook accepts one argument as the initial value and returns a reference (known as ref). The reference is the object having a special property current.</p>
            </div>
        </div>
    );
};

export default Blog;