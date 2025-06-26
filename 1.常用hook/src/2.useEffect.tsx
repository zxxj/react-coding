import { useEffect, useState } from 'react'
import './App.css'

function App() {
  /**
   * 1. useEffect为什么被称为副作用?
   * effect(作用,影响) 
   * side effect(副作用)
   * 
   * 为啥叫副作用?
   * 因为函数组件是纯函数,传入props返回对应的结果,再次调用,传入props,依然返回的是同样的结果
   * 但是现在有了effect后,每次执行函数,额外执行了一些其他逻辑,这些逻辑就被称为副作用
   */

  const [count, setCount] = useState(0)

  // 注意: 想用async await语法需要单独写一个函数,因为useEffect参数的那个函数不支持async
  const queryData = async () => {
    const data = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(666)
      }, 2000)
    })

    return data
  }

  // 现在这个组件会渲染两次,初始渲染和2s后的setCount触发的渲染,也就是function会执行两次
  useEffect(() => {
    queryData().then((res) => {
      setCount(res)
    })
  }, [])



  /**
   * 2.useEffect的执行
   * useEffect的第二个参数为什么是空数组[]?
   * 这个数组叫做依赖数组,react是根据它有没有变化来决定是否执行effect函数的,如果为空[]表示每次都会执行
   *  */ 

  // 依赖数组为空
  useEffect(() => {
    console.log("空依赖的useEffect只会在组件首次加载(渲染)时执行一次!")
  }, [])

  // 依赖数组传入常量
  useEffect(() => {
    console.log("依赖数组中,如果是添加的是常量,因为它们都是不会变的,所以自然不会触发useEffect的重新执行!")
  }, [111, 'zxx'])

  // 依赖数组传入常量+变化的值
  useEffect(() => {
    console.log("但如果其中有个变化的值,那就会触发重新执行了!")
  }, [111, 'zxx', Date.now()])

  // 这个数组一般依赖的是state,这样在state变了之后就会触发重新执行了
  useEffect(() => {
    console.log(`count:${count},你改变了count! 我重新执行了!`)
  }, [count])

  // 不传入依赖数组的时候也是每次都会重新执行effect函数
  useEffect(() => {
    console.log("我没有传参数! 是没有写[]哦!")
  })

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((num) => num + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
