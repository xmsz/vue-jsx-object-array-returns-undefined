

import style from './index.module.css';
// import './index.css';
import { createComponent, PropType } from '@vue/composition-api';

console.log(style)

export default createComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
    eventClick: {
      type: (null as unknown) as PropType<(event: MouseEvent) => void>,
    }
  },
  setup(props:any) { 
    return () => (
      <div>
        <h1 class={style.h1}>{props.msg} </h1>
        <button onClick={props.eventClick}>please click me</button>
      </div>
    );
  },
});
