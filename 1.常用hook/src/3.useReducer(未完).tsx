import { useReducer, useState, type Reducer } from 'react';
import './App.css';

interface Data {
  result: number;
}

interface Action {
  type: 'add' | 'minus';
  num: number;
}

const reducer = (state: Data, action: Action) => {
  switch (action.type) {
    case 'add':
      return {
        result: state.result + action.num,
      };

    case 'minus':
      return {
        result: state.result - action.num,
      };
  }
};

function App() {
  /**
    如果在修改值之前需要执行一些固定的逻辑,可以使用useReducer

    useReducer的类型参数是<数据的类型, action的类型>
    useReducer的参数是(reducer, 初始数据)
   */

  const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, {
    result: 0,
  });

  return (
    <>
      <div className="card">
        <button>count is {res.result}</button>
        {/* 点击加的时候,触发add的action */}
        <button onClick={() => dispatch({ type: 'add', num: 2 })}>加</button>

        {/* 点击减的时候,触发minus的action */}
        <button onClick={() => dispatch({ type: 'minus', num: 1 })}>减</button>
      </div>
    </>
  );
}

export default App;
