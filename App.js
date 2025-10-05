const parent = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')])); 
// it returns object
//it is a nested structure of objects
// React.createElement(tag,props,children)
// to get two h1 we need to pass them in array

const heading = React.createElement('h1',{id:'heading'},'Hello,world!'); // returns object 

const root = ReactDOM.createRoot(document.getElementById('root')); // it takes html element as argument

root.render(parent); // it converts object to html and shows on screen 