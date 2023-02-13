import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import PlayArea from './components/PlayArea'
import song1 from './components/audios/song.mp3'
import song2 from './components/audios/song_2.mp3'
import song3 from './components/audios/song_3.mp3'
import song4 from './components/audios/song_4.mp3'
import song5 from './components/audios/song_5.mp3'
import song6 from './components/audios/song_6.mp3'
import song7 from './components/audios/song_7.mp3'
import song8 from './components/audios/song_8.mp3'
import song9 from './components/audios/song_9.mp3'
import song10 from './components/audios/song_10.mp3'
import song11 from './components/audios/song_11.mp3'
import song12 from './components/audios/song_12.mp3'
import song13 from './components/audios/song_13.mp3'
import song14 from './components/audios/song_14.mp3'
import song15 from './components/audios/song_15.mp3'
import song16 from './components/audios/song_16.mp3'
import song17 from './components/audios/song_17.mp3'
import song18 from './components/audios/song_18.mp3'
import song19 from './components/audios/song_19.mp3'
import song20 from './components/audios/song_20.mp3'
import song21 from './components/audios/song_21.mp3'
import song22 from './components/audios/song_22.mp3'
import song23 from './components/audios/song_23.mp3'
import song24 from './components/audios/song_24.mp3'
import song25 from './components/audios/song_25.mp3'
import song26 from './components/audios/song_26.mp3'
import song28 from './components/audios/Thoda_Thoda_Pyar.mp3'
import song29 from './components/audios/Bad Boy_320.mp3'
import song30 from './components/audios/Ed_Sheeran.mp3'
import song31 from './components/audios/kehna_galat_galat.mp3'
import song27 from './components/audios/song_27.mp3'
import song32 from './components/audios/Ra_Ra_Rakkamma.mp3'


function App() {
 let obj = [{
    url: "https://e0.pxfuel.com/wallpapers/437/975/desktop-wallpaper-zindagi-carryminati-x-wily-frenzy.jpg",
    name: "Zindagi- CarryMinati",
    song: new Audio(song1)
  },
  {
    url: "https://wallpapercave.com/wp/wp6374574.jpg",
    name: "Khamoshiyan",
    song: new Audio(song2)
  },
  {
    url: "https://i.ytimg.com/vi/h-ile9tMNM0/maxresdefault.jpg",
    name: "Bing Bing Boo!",
    song: new Audio(song3)
  },
  {
    url: "https://i.ytimg.com/vi/O3Uf0UaTO2I/maxresdefault.jpg",
    name: "Kahani Suno-2.0",
    song: new Audio(song4)
  },
  {
    url: "https://i.ytimg.com/vi/s53T9gWI9b4/hqdefault.jpg",
    name: "OOPS",
    song: new Audio(song5)
  },
  {
    url: "https://i.pinimg.com/736x/6b/04/4a/6b044ae626e9eef153979a5a61734f5a.jpg",
    name: "Cold Hours",
    song : new Audio(song6)
  },
  {
    url: "https://i.ytimg.com/vi/Iyfes7gPvcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gUSgTMA8=&rs=AOn4CLA5J-PABTP2f4WlCsI1giCdJ-PtIA",
    name: "Jaadugar-Paradox",
    song : new Audio(song7)
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/114/751/814/naruto-kakashi-hatake-hd-wallpaper-preview.jpg",
    name: "Ram Ram-MCSQUARE",
    song : new Audio(song8)
  },
  {
    url: "https://i.ytimg.com/vi/1P9IiygnPDE/maxresdefault.jpg",
    name: "Maan Meri Jaan-King",
    song: new Audio(song9)
  },
  {
    url: "https://www.teahub.io/photos/full/179-1797704_demon-slayer-wallpaper-4k.jpg",
    name: "Tere Ishq Mein",
    song : new Audio(song10)
  },
  {
    url: "https://mobstatus.com/wp-content/uploads/2021/12/no-lie.jpg",
    name: "No Lie!",
    song : new Audio(song11)
  },
  {
    url: "https://i.ytimg.com/vi/mRennvAX2Cg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFsgWyhbMA8=&rs=AOn4CLClG_wJwiUSo7UVHYKyotrllSEX5w",
    name: "Unholy!!",
    song : new Audio(song12)
  },
  {
    url: "https://i.kym-cdn.com/entries/icons/original/000/038/207/industrialbaby.jpg",
    name: "Industry BABY",
    song : new Audio(song13)
  },
  {
    url: "https://4.bp.blogspot.com/-1-mooHIUvDs/W5tv-ieLXPI/AAAAAAAAERs/sAiaynH5IHIEtylWVb4YGFPrI-II1uoSQCLcBGAs/s1600/PicsArt_09-14-01.47.01.jpg",
    name: "Pal",
    song : new Audio(song14)
  },
  {
    url: "https://lastfm.freetls.fastly.net/i/u/500x500/42b0417598824ff7e10c629db234c382.jpg",
    name: "Tera Chera",
    song : new Audio(song15)
  },
  {
    url: "https://i.ytimg.com/vi/SdxSQlk4Bws/maxresdefault.jpg",
    name: "AATMA RAAMA Brodha V",
    song :new Audio(song16)
  },
  {
    url: "https://wallpapercave.com/wp/wp11887585.png",
    name: "Bones",
    song : new Audio(song17)
  },
  {
    url: "https://wallpaperaccess.com/full/8103099.jpg",
    name: "Meri Jaan",
    song: new Audio(song18)
  },
  {
    url: "https://c.saavncdn.com/605/Jo-Tu-Na-Mila-Hindi-2018-20190924060933-500x500.jpg",
    name: "Jo Tu Na Mila",
    song : new Audio(song19)
  },
  {
    url: "https://pagalfree.com/images/128Such%20Keh%20Raha%20Hai%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.jpg",
    name: "Saach Keh raha Hai",
    song :new Audio(song20)
  },
  {
    url: "https://www.quirkybyte.com/wp-content/uploads/2020/05/Manjha-Song-Download-Mp4.jpg",
    name: "Manjha",
    song : new Audio(song21)
  },
  {
    url: "https://wallpaperaccess.com/full/672473.jpg",
    name: "Talking To the Moon",
    song :new Audio(song22)
  },
  {
    url: "https://wallpaperaccess.com/full/1087735.jpg",
    name: "Peaky Blinder",
    song : new Audio(song23)
  },
  {
    url: "https://i.pinimg.com/originals/2d/79/b8/2d79b85394fd2ce78128460c4365697b.jpg",
    name: "Astronaut in the Ocean",
    song : new Audio(song24)
  },
  {
    url: "https://i.pinimg.com/originals/b2/5b/5f/b25b5f585ab8e5850f0ce0aa21efd70a.jpg",
    name: "Cradles",
    song : new Audio(song25) 
  },
  {
    url: "https://i.ytimg.com/vi/lvntC5lItBA/maxresdefault.jpg",
    name: "Jab Se Tere Naina",
    song :  new Audio(song26)
  },
  {
    url: "https://media.lyricsmint.com/photos/436/varundvnatifaslam-jeenajeena-1_cover.jpg",
    name: "Jeena Jeena",
    song : new Audio(song27)
  },
  {
    url: "https://wallpapercave.com/wp/wp8762197.jpg",
    name: "Thoda Thoda Pyaar Hua",
    song : new Audio(song28)
  },
  {
    url: "https://www.teahub.io/photos/full/76-762422_tungevaag-raaban-bad-boy.jpg",
    name: "Bad Boy!",
    song : new Audio(song29)
  },
  {
    url: "https://wallpapercave.com/wp/wp3537459.jpg",
    name: "Shape Of You",
    // song: 
    song : new Audio(song30)
  },
  {
    url: "https://i.scdn.co/image/ab67616d0000b2735843c07e504728fcc7562319",
    name: "Kehna Galat Galat",
    song: new Audio(song31)
  },
  {
    url: "https://i.ytimg.com/vi/qM8n41GR1rk/maxresdefault.jpg",
    name: "Ra Ra Rakkama",
    song : new Audio(song32)
  }
  ]
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // return scrolled
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  window.onscroll = function() {myFunction()}
  return (
    <>
    <Router>
      <Navbar />
      <hr />
      
      <div class="progress-container fixed-top">
        <div class="progress-bar" id="myBar"></div>
      </div>
      <br />
      <br />
      <Routes>
        <Route exact path='/' element={<PlayArea arrayobj={obj}/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
