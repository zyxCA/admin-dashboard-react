import './sidebar.scss'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsBackupRestoreOutlinedIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@material-ui/icons/SettingsSystemDaydreamOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>lamadmin</span>
        </div>
        <hr/>

        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li>
                <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>                <PeopleAltIcon className='icon'/>

                    <span>Users</span>
                </li>
                <li>
                <StoreMallDirectoryIcon className='icon'/>

                    <span>Products</span>
                </li>
                <li>
                <CalendarTodayOutlinedIcon className='icon'/>

                    <span>Orders</span>
                </li>
                <li>
                <LocalShippingIcon className='icon'/>

                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                <EqualizerIcon className='icon'/>

                    <span>Stats</span>
                </li>
                <li>
                <NotificationsNoneIcon className='icon'/>

                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                <SettingsSystemDaydreamOutlinedIcon className='icon'/>

                    <span>System Health</span>
                </li>
                <li>
                <SettingsBackupRestoreOutlinedIcon className='icon'/>

                    <span>Logs</span>
                </li>
                <li>
                <SettingsOutlinedIcon className='icon'/>

                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                <AccountCircleOutlinedIcon className='icon'/>

                    <span>Profile</span>
                </li>
                <li>
                <ExitToAppOutlinedIcon className='icon'/>

                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>


    </div>
  )
}

export default Sidebar