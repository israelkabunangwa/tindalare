const {useState}=React;
const Login = ()=>{
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isCreatingAccount,setIsCreatingAccount]=useState(false)
    const [errorMessage,setErrorMessage]=useState('')
   

    const handleLogin=()=>{
        if(userName === 'isra' && password==='password'){
            document.querySelector('.vousEstes').style.display='block'
            document.querySelector('.loginForm').style.display='none'
        }else{
            setErrorMessage('"email ou mot de pass incorrect"')
        }
    }
    const handleCreationAccount=()=>{
        setIsCreatingAccount(true)
    }
    const handleRgister=()=>{
        alert('compte creer avec succes')
        setIsCreatingAccount(false)
    };

    return(
        <div>
          {isCreatingAccount ? (
            <div className="signUp">
                <div className="signUpContainer">
                    <h1>Créer un compte</h1>
                    <input type="text" placeholder="enter userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="email" placeholder="enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder="enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button onClick={handleRgister}>creer le compte</button>
                </div>
                
            </div>
            ):(
            <div>
            <div className="loginForm">
                <div className="loginFormContainer">
                    <h1>CONNEXION</h1>
                    {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                    <input type="text" placeholder="enter userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="password" placeholder="enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button onClick={handleLogin}>Se connecter</button>
                    <div className="createAccount">
                        <span className="createAccountText">Vous n'avez pas de compte ? </span>
                        <span onClick={handleCreationAccount} className="createAccountButton">creer le compte</span>
                    </div>
                </div>
                
                
            </div>
            <div className="vousEstes">
                <h1>{userName}vous etes connecters</h1>
            </div>
            </div>
            
            )}
        </div>
    )
}

const Welcome=()=>{
    <div>
        <h1>BIENVENU</h1>
        <p>vous etes connecter</p>
    </div>
}

ReactDOM.render(<Login />,document.querySelector('#root'))
