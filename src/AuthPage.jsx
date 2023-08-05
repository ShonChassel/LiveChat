import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'https://chat-backend-vmgq.onrender.com/authenticate',
        {username: value}
      )
      .then(r => props.onAuth({...r.data, secret: value}))
      .catch(e=> console.log('error', e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
        <img className='pageImg' src="https://res.cloudinary.com/dirvusyaz/image/upload/v1690735022/live-chat-app.3af9d5f6b2c73c1f7423f18402165d0a53dd6641ceda488c71627cf1f4f93454_zpd3tb.png" alt="" />
      </div>
    );
  };
  
  export default AuthPage;