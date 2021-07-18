import React, {useState} from "react";
import Header from "./major/Header";
import Footer from "./major/Footer";
import BottomBar from "./major/BottomBar";
import {connect} from "react-redux";
import {Login, PushUserData} from "../redux/actions/actions";


interface IProps {
    PushUserData: Function,
    Login: Function
}


const Authorization: React.FC<IProps> = (props: IProps): JSX.Element => {
    //Register
const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
const onRegisterSubmit = (): void => {
    props.PushUserData(username, password, email);
}



//Auth
    const [login, setLogin] = useState("")
    const [Authpassword, setAuth] = useState("")
const onLoginSubmit = () => {
        props.Login(login, Authpassword)
}

    return (
        <>
        <Header />
            <BottomBar />
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">Login & Register</li>
                    </ul>
                </div>
            </div>
            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="register-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name"</label>
                                        <input className="form-control" type="text" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}  type="text" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input className="form-control" value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="UserName"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Retype Password</label>
                                        <input className="form-control"  type="text" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-12">
                                        <button onClick={onRegisterSubmit} className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>E-mail / Username</label>
                                        <input value={login} onChange={e => setLogin(e.target.value)} className="form-control" type="text" placeholder="E-mail / Username"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input value={Authpassword} onChange={e => setAuth(e.target.value)} className="form-control" type="text" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                                <label className="custom-control-label" htmlFor="newaccount">Keep me signed in</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button onClick={onLoginSubmit} className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps, {PushUserData, Login})(Authorization)