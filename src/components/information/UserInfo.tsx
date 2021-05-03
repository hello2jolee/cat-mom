import {Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export interface UserInfo {
    qrcode: Number;
    catData: Array<String>;
    manger: Array<String>;
    status: Array<String>;
}

export const UserInfoList = () => {
    const list: UserInfo[] = useFetch("http://localhost:3001/userInfo")

    if(list.length === 0) {
        return <span>Loading...</span>
    }

    return (
        <ul>
            {list.map((data, index) => (
                <li key={index}>
                    <Link to={`information/${data.qrcode}`}>고양이 정보 : {data.catData}</Link>
                </li>
            ))}
        </ul>
    )
}