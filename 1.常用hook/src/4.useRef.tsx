import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  /**
   * useRef: 可以保存dom的引用
   *
   * useRef的类型是保存的内容的类型
   */

  // 这里通过ref保存input元素的引用,然后在useEffect里调用它的focus方法
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef); // {current: input的属性与方法}

  useEffect(() => {
    // ref的内容是保存在current属性上的
    inputRef.current?.focus();
  }, []);

  // ref其实就是一个有current属性的对象,除了可以保存dom引用外也可以放别的内容
  const countRef = useRef<number>(0);
  console.log(countRef); // {current: 0}

  return (
    <>
      <input type="text" ref={inputRef} />

      <button
        onClick={() => {
          countRef.current += 1;
          console.log(countRef); // 不会触发重新渲染,不过一般也不会这么用,如果想触发重新渲染直接用useState或者useReducer就可以了,useRef一般是用来存一些不是用于渲染的内容的
        }}
      >
        {countRef.current}
      </button>
    </>
  );
}

export default App;
