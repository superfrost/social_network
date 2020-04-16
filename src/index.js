import * as serviceWorker from './serviceWorker';
import { rerenderInttireTree } from './render';
import state from './redux/state'

rerenderInttireTree(state);

serviceWorker.unregister();
