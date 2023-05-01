import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/idenx';
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div calssName="Page">
            <span className="tags top-tags">&lt;body&gt;</span>

            <Outlet />

            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br/>
                <span className="bottom-tag-html">
                    &lt;/html&gt;
                </span>
            </span>
        </div>
    </div>
    )   
}

export default Layout