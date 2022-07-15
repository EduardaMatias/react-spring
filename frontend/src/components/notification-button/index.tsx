import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import './style.css';
import { BASE_URL } from "../../utils/request";

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log('success')
    })
}

function NotificationButton({saleId}: Props) {
    return (
        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </div>
    )
}

export default NotificationButton;
