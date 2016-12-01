import { browserHistory, createMemoryHistory } from 'react-router';

let history;
if(process.env.NODE_ENV === 'test'){
  history= createMemoryHistory();
}
else {
  history = browserHistory;
}
export default history;