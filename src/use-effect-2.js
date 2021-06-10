import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom'


const App = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}>+
                </button>
                <button
                    onClick={() => setVisible(false)}>hide
                </button>

                <HookCounter value={value}/>
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
}


const HookCounter = ({value}) => {

    //работает как ComponentDidMount
    // useEffect(() => console.log('mount'), [])

    // обычно идет комбинация mount и Unmount
    useEffect(() => {
        console.log('mount')                  // этот код сработает когда компонент создается
        return () => console.log('Unmount')   // этот код сработает когда компонент уничтожается
    }, [])   // код сработает только один раз поскольку второй элемент - пустой массив


    //работает как ComponentDidUpdate, но этот код запускается и в первый раз и при обновлениях
    useEffect(() => console.log('Update'))

    //работает как ComponentDidUnmount такой код практически никогда не используется
    // useEffect(() => () => console.log('Unmount'), [])

    return <p>{value}</p>
}



ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

