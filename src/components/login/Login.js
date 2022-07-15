import Reacr, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    //const { isLoggedIn } = useSelector(state => state.auth);

    return (
        <div className='col-md-12 fondo'>

        </div>
    );
  }

  export default Login;