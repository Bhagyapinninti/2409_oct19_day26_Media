import logo from "./logo.svg";
import movieposter from "./images/ala_vaikunthapurramuloo_poster.jpg";
import omg from "./audio/OMG Daddy.mp3";
import buttabomma from "./video/Butta Bomma.mp4";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Ala Vaikuntapuramuloo</h1>
      <hr></hr>
      <div>
        <h2>Images</h2>
        <img
          src="https://teluguone.com/photos/uploadsExt/uploads/Ala%20Vaikunthapurramloo%20Wallpapers/Ala%20Vaikunthapurramuloo%20Movie%20Poster/Ala-Vaikunthaspurramuloo-Mov.jpg"
          alt=""
        ></img>
        <img src="./images/Ala-Vaikunthapurramuloo.jpg" alt=""></img>
        <img src={movieposter}></img>
      </div>
<hr></hr>
      <div>
        <h2>Audios</h2>
        <audio
          src="https://services.brninfotech.com/tws/media2\/songs\/Ala Vaikuntapuram lo\/01 - Samajavaragamana.mp3"
          controls
        ></audio>

        <audio
          src="./audio/Sittharala Sirapadu - SenSongsMp3.Co.mp3"
          controls
        ></audio>
        <audio src={omg} controls></audio>
      </div>
<hr></hr>
      <div>
        <h2>Videos</h2>
        <video
          src="https://services.brninfotech.com/tws//media2\/trailers\/AlaVaikuntapuramloo.mp4"
          controls
        ></video>
        <video src="./video/ala.mp4" controls></video>
        <video src={buttabomma} controls></video>
      </div>
    </div>
  );
}

export default App;
