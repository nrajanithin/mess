import React from 'react'
import fire from '../../config/fire'
class Login extends React.Component
{
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:'',
        user:null,
        message:'',
        chat:[],
        loginpage:true
        }
       }
       
    authListner = ()=>{
        fire.auth().onAuthStateChanged((user)=>{
          if(user)
          {
            console.log(user.email);
            this.setState({user:user});
          }
          else
          {
            this.setState({user:null});
          }
        })
      }
    componentDidMount = ()=>
    {
        this.authListner();
        fire.database().ref().child('messages').on('value',snapshot =>
        {
            console.log('msg snapshot loki vacham');
            if(snapshot.val()!=null)
            {
                this.setState({chat: {...snapshot.val()}});
                console.log(this.state);
                this.forceUpdate();
            }
        });
        
    }
    handleLogin = (e)=>
    {
        e.preventDefault();
        if(this.state.username!='' && this.state.password!='')
        {
            fire.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((u)=>{
                console.log(u);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
    addmsg = (obj)=>
    {
        fire.database().ref().child('messages').push(
            obj,
            err=>
            {
                if(err)
                {
                    console.log(err);
                }
            }
        )
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          var ob = {username:this.state.user.email,message:this.state.message};
          this.addmsg(ob);
          this.setState({message:''});
          window.setInterval(function() {
            var elem = document.getElementById('chatt');
            elem.scrollTop = elem.scrollHeight;
          }, 1000);
        }
      }
    sendmsg = (e)=>{
        var ob = {username:this.state.user.email,message:this.state.message};
          this.addmsg(ob);
          this.setState({message:''});
          window.setInterval(function() {
            var elem = document.getElementById('chatt');
            elem.scrollTop = elem.scrollHeight;
          }, 1000);
      }
    handleChange = (e)=>
    {
       this.setState({[e.target.name]: e.target.value});
       console.log(this.state);
    }
    logout = ()=>
    {
        fire.auth().signOut();
    }
    render()
    {
        return(

            this.state.user==null?
            <div>
                <form style={{width:'60%',marginLeft:'20%',marginTop:'2%'}}>
                    <div class="form-group">
                        <label for="email" style={{fontFamily:'Cursive'}}>Email address:</label>
                        <input type="email" name="username" onChange={this.handleChange} class="form-control" id="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="pwd" style={{fontFamily:'Cursive'}}>Password:</label>
                        <input type="password" name="password" onChange={this.handleChange}  class="form-control" id="pwd" required/>
                    </div>
                    <div>
                      <button style={{marginLeft:'10px'}} type="submit" class="btn btn-primary" onClick={this.handleLogin}>Signup</button>
                    </div>
                    
                 </form>
            </div> :
            <div style={{width:'100%',height:'100vh',color:'black'}}>
                <div>
                   <header style={{color:'white',backgroundColor:'green',width:'100%',height:'60px',display:'flex'}}><h1>NITHIN CHAT</h1><button style={{marginLeft:'auto'}} onClick={this.logout} class="btn btn-danger">Logout</button></header>
                </div>
        
                <div id="chatt" style={{marginLeft:'50px',height:'80%',overflow:'scroll',scrollBehavior:'smooth'}}>
               
               {
                   
                   Object.keys(this.state.chat).map(id=>{
                       if(this.state.chat[id].username == this.state.user.email)
                       {
                        return <div key={id} style={{display:'block',position:'relative',float:'right',padding:'20px',marginBottom:'5px',backgroundColor:'blue',flexWrap:'wrap',width:'50%',borderRadius:'100px'}}>
                        <small style={{color:'white'}}>{this.state.chat[id].username}</small>
                        <h5 style={{color:'white'}}>{this.state.chat[id].message}</h5>
                           </div>
                       }
                       else{
                        return <div key={id} style={{display:'block',marginRight:'30%',position:'relative',float:'left',padding:'20px',marginBottom:'5px',backgroundColor:'black',flexWrap:'wrap',width:'50%',borderRadius:'100px'}}>
                        <small style={{color:'white'}}>{this.state.chat[id].username}</small>
                        <h5 style={{color:'white'}}>{this.state.chat[id].message}</h5>
                         </div>
                       }
                       
                            
                   })
               }
           
               </div>
               
              
                <footer style={{marginLeft:'50px'}}>
                  <input style={{width:'80%',float:'left'}} value={this.state.message} onKeyPress={this.handleKeyPress} type="text" name="message" onChange={this.handleChange} class="form-control" required/>
                  <button class="btn btn-primary" onClick={this.sendmsg}>Send</button>
                </footer>
            </div>
            
        );
    }
}
export default Login;