import { useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import RegisterForm from '../../components/RegisterForm';



const Register = ({ history }) => {
    const [name, setName]  = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [userType, setUserType] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerURL = `${process.env.REACT_APP_API_URL}/register`;

        try {
            const res = await axios.post(registerURL, { name, email, mobileNo, userType, password});
            console.log("Register User ====>", res);
            toast.success("Account Created Successfully! Please login");
            history.push("/login");
        } catch(err){
            console.log(err);
            if ( err.response.status === 400 ) toast.error(err.response.data);
        }
        
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setMobileNo('');
        setUserType('');
        setPassword('');
    }

    return(
        <>
                <div className="card border-info mt-5 col-md-6 offset-3" >
                    <h5 className="card-header">Create Account</h5>
                    <div className ="card-body">

                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-8 offset-md-2">
                                    <RegisterForm 
                                        handleSubmit = { handleSubmit }
                                        handleReset = { handleReset }
                                        name = { name }
                                        setName = { setName }
                                        email = { email }
                                        setEmail = { setEmail }
                                        mobileNo = { mobileNo }
                                        setMobileNo = { setMobileNo }
                                        userType = { userType }
                                        setUserType = { setUserType }
                                        password = { password }
                                        setPassword = { setPassword }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
        
    )
};

export default Register;