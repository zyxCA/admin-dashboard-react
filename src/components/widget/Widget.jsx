import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
let data;
//temporary
const amount = 101
const diff = 20

const Widget = ({type}) => {

    switch (type){
        case 'user':
            data={
                title:'USERS',
                isMoney:false,
                link:'See all users',
                icon:<PersonOutlinedIcon className='icon' style={{color:'crimson',
            backgroundColor:'rgba(255,0,0,0.2)'}}/>
            }
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon:<ShoppingCartOutlinedIcon className='icon' style={{color:'crimson',
            backgroundColor:'rgba(255,0,0,0.2)'}}/>
            }        
        case 'earning':
            data={
                title:'ORDERS',
                isMoney:true,
                link:'View net earning',
                icon:<ShoppingCartOutlinedIcon className='icon' style={{color:'crimson',
            backgroundColor:'rgba(255,0,0,0.2)'}}/>
            }
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon:<ShoppingCartOutlinedIcon className='icon' style={{color:'crimson',
            backgroundColor:'rgba(255,0,0,0.2)'}}/>
            }
                
            
        default:
            break
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney&&"$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
             <KeyboardArrowUpIcon/>
             {diff}%
             </div>
             
            {data.icon}
        </div>
        </div>
    
  )
}

export default Widget