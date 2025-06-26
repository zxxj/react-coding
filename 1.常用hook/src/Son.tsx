import { forwardRef, type ForwardRefRenderFunction } from 'react';

/**
 * 如果想从子组件传递ref到父组件就需要用forwardRef了,也就是把组件的ref转发一下,
 * 其实也很好理解,就是把ref转发到组件内部来设置
 *
 * 被forwardRef包裹的组件的类型要用ForwardRefRenderFunction, 第一个类型参数是ref内容的类型,第二个类型参数是props的类型
 */
const Son: ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

const forwardSon = forwardRef(Son);

export default forwardSon;
