import './navbar.scss'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'  />
<SearchOutlinedIcon/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>

          <div className="item">
            <Brightness2OutlinedIcon className='icon'/>
            
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
            
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">1</div>

          </div>

          <div className="item">
            <ListOutlinedIcon className='icon'/>
            
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg" alt="" className='avatar' />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar