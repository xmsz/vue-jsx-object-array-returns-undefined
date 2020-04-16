import './app.css';
import { createComponent, reactive } from '@vue/composition-api';

export default createComponent({
  setup() {
    const state = reactive({
      awardList: [
        {
          num: 1,
        },
      ],
    });
    return () => (
      <div id='app'>
        <div>
          {state.awardList}
          {state.awardList[0].num}
          {JSON.stringify(state.awardList)}
        </div>
      </div>
    );
  },
});
