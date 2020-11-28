import './App.css';
import Profile from "./profile/Profile"
import pfp from "./pfp.jpg"


function App() {
  const handleName= name => alert(name);
  const profile ={fullName:"Mariem Selmi", bio:'bio', profession:'profession'} 
  return (
    <div>
      <div>
  <Profile fullName={profile.fullName} bio={profile.bio} profession={profile.profession} handleName={handleName}>{pfp}</Profile>
      </div>
      
    </div>
  );
}

export default App;