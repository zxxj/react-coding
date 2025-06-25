import { useState } from 'react'
import './App.css'

function App() {
  /**
   * 什么是state?
   * 像 111 'xxx' {a:1} 这种叫做数据,它们可以是各种数据类型,但都是固定不变的,从一种数据变化到另一种数据这种就是状态(state)了,也就是说,state是变化的数据
   */

  // useState会返回一个数组,包含state和setState的api,一般都是用解构语法获取
  const res = useState(0)
  console.log(res) // [0, fn]

  // 如果初始状态需要通过复杂计算得到的话,可以传入一个函数来计算初始值,但这个函数只能写一些同步的计算逻辑,不支持异步
  const [count, setCount] = useState(() => {
    const num1 = 1 + 2
    const num2 = 2 + 3
    return num1 + num2
  })

  return (
    <>
      <div className="card">
        {/* setxxx这个api也有两种参数,可以直接传新的值setxxx(newValue),也可以传一个函数setxxx(x => x +1),这个函数的参数是上一次的state */}
        <button onClick={() => setCount((num) => num + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
