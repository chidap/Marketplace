const RegisterForm = ({ 
        handleSubmit, 
        handleReset,
        name, setName, 
        email, setEmail, 
        mobileNo, setMobileNo, 
        userType, setUserType, 
        password, setPassword}) => (
            <form className  = "mt-3" onSubmit = { handleSubmit } > 
                <div className = "form-group mb-3">
                    <label className = "form-label">Your Name </label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        placeholder = "Enter your Name" 
                        value = { name} 
                        onChange = {e => setName(e.target.value)}
                    />
                </div>

                <div className = "form-group mb-3">
                    <label className = "form-label" >Email </label>
                    <input 
                        type = "email" 
                        className = "form-control" 
                        placeholder = "Enter Email" 
                        value = { email} 
                        onChange = {e => setEmail(e.target.value)}
                    />
                </div>

                <div className = "form-group mb-3">
                    <label className = "form-label" >Mobile No. </label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        placeholder = "Enter Mobile No" 
                        value = { mobileNo } 
                        onChange = {e => setMobileNo(e.target.value)}
                    />
                </div>

                <div className = "form-group mb-3">
                    <label className = "form-label" >User Type</label>
                    <select 
                        className = "form-control" 
                        id = "userType" 
                        onChange = { e => setUserType(e.target.value)}
                    >
                        <option value = ""> Select User Tpe</option>
                        <option value = "Buyer"> Buyer</option>
                        <option value = "Seller"> Seller</option>
                    </select>
                </div>

                <div className = "form-group mb-3">
                    <label className = "form-label" >Password</label>
                    <input 
                        type = "password" 
                        className = "form-control"  
                        placeholder = "Enter Password" 
                        value = { password } 
                        onChange = {e => setPassword(e.target.value)}
                    />
                </div>

                <button className = "btn btn-primary" >Submit</button>
                <button className = "btn btn-dark" type = "button" onClick = { handleReset }>Reset</button>
            </form>
);

export default RegisterForm;