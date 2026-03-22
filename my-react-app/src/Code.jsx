import profilePic from './assets/photo.png'

function Code(){
    return (
        <div className="Code">
            <img className="mypic" src = {profilePic} alt = "my image" style= {{width:"300px",height: "300px"}}/>
           
            <h2 className="title">I am Good person</h2>
            <p>I am good</p>
        </div>
    );
}

export default Code
