import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export default process.env.BUILD_TARGET === 'client' ? createBrowserHistory() : createMemoryHistory();
