import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext value='Hello world'>
            <Child/>
        </MyContext>
    )
}


const Child = () => {
    const value = useContext(MyContext);

    return <p>{value}</p>;
}


ReactDOM.render(
    <React.StrictMode><App/></React.StrictMode>,
    document.getElementById('root')
);

