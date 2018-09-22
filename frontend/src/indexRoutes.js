/**
 * Created for HackTheAlps2018
 *
 * @author: Niklas Kappler <mail@niklas-kappler.de>
 * @date: 22.09.18 10:31
 * @copyright: Niklas Kappler, 2018.
 */
import App from "./containers/App/App";
import App2 from './containers/App2/App'


var indexRoutes = [
    { path: "/app2", name: "App2", component: App2 },
    { path: "/", name: "App", component: App },
];

export default indexRoutes;