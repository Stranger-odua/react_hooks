// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
//
// const App = () => {
//     return (
//         <div>
//             <HookSwitcher/>
//         </div>
//     )
// }
//
// const HookSwitcher = () => {
//     const [color, setColor] = useState('green');
//     const [fontSize, setFontSize] = useState(14)
//
//     return (
//         <div style={{padding: '16px', backgroundColor: color, fontSize: fontSize}}>
//             <button onClick={() => setColor('black')}>Dark</button>
//             <button onClick={() => setColor('yellow')}>Light</button>
//
//             <button onClick={() => setFontSize((s) => s - 10)}>fontSize -</button>
//             <button onClick={() => setFontSize((s) => s + 10)}>fontSize +</button>
//             <div><p>font</p></div>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
//
