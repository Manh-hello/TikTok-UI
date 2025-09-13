import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content'

function App() {
  const [moun, setMoun] = useState(1);// true là giá trị mặc định, moun mặc định là true, từ lần setMoun thì sẽ đổi giá trị , set Moun có thể là hàm, component đc render lại sau khi setMoun
  const handle = () =>{
    // setMoun(moun+1);
    // setMoun(moun+1);
    // setMoun(moun+1); // như này thì moun lấy giá trị của lần trước chứ không phải lấy + 3 lần
    setMoun(prev => prev + 1);
    setMoun(prev => prev + 1);
    setMoun(prev => prev + 1); // như này thì moun mỗi lần gọi setMoun đều đc gán lại giá trị, khi truyền hàm vào thì giá trị trả về sẽ là inittial (moun)
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={handle}>click</button>
    </div>

);
// {/* {moun && <Content />} */}
// {/* <h1>{moun}</h1> */}
}
export default App;
