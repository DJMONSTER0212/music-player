import './App.css';
import Navbar from './components/Navbar';
import PlayArea from './components/PlayArea'


function App() {
  // let imageurl = ["https://e0.pxfuel.com/wallpapers/437/975/desktop-wallpaper-zindagi-carryminati-x-wily-frenzy.jpg","https://wallpapercave.com/wp/wp6374574.jpg","https://i.ytimg.com/vi/h-ile9tMNM0/maxresdefault.jpg","https://i.ytimg.com/vi/O3Uf0UaTO2I/maxresdefault.jpg","https://i.ytimg.com/vi/s53T9gWI9b4/hqdefault.jpg","https://images.wallpapersden.com/image/download/roronoa-zoro-hd-one-piece-fight-art_bWpqamWUmZqaraWkpJRobWllrWdma2U.jpg","https://i.ytimg.com/vi/Iyfes7gPvcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gUSgTMA8=&rs=AOn4CLA5J-PABTP2f4WlCsI1giCdJ-PtIA","https://c4.wallpaperflare.com/wallpaper/114/751/814/naruto-kakashi-hatake-hd-wallpaper-preview.jpg","https://i.ytimg.com/vi/1P9IiygnPDE/maxresdefault.jpg","https://www.teahub.io/photos/full/179-1797704_demon-slayer-wallpaper-4k.jpg","https://mobstatus.com/wp-content/uploads/2021/12/no-lie.jpg","https://i.ytimg.com/vi/mRennvAX2Cg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFsgWyhbMA8=&rs=AOn4CLClG_wJwiUSo7UVHYKyotrllSEX5w","https://i.kym-cdn.com/entries/icons/original/000/038/207/industrialbaby.jpg","https://4.bp.blogspot.com/-1-mooHIUvDs/W5tv-ieLXPI/AAAAAAAAERs/sAiaynH5IHIEtylWVb4YGFPrI-II1uoSQCLcBGAs/s1600/PicsArt_09-14-01.47.01.jpg","https://lastfm.freetls.fastly.net/i/u/500x500/42b0417598824ff7e10c629db234c382.jpg","https://i.ytimg.com/vi/SdxSQlk4Bws/maxresdefault.jpg","https://wallpapercave.com/wp/wp11887585.png","https://wallpaperaccess.com/full/8103099.jpg","https://c.saavncdn.com/605/Jo-Tu-Na-Mila-Hindi-2018-20190924060933-500x500.jpg","https://pagalfree.com/images/128Such%20Keh%20Raha%20Hai%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.jpg","https://www.quirkybyte.com/wp-content/uploads/2020/05/Manjha-Song-Download-Mp4.jpg","https://wallpaperaccess.com/full/672473.jpg","https://wallpaperaccess.com/full/1087735.jpg","https://i.pinimg.com/originals/2d/79/b8/2d79b85394fd2ce78128460c4365697b.jpg","https://i.pinimg.com/originals/b2/5b/5f/b25b5f585ab8e5850f0ce0aa21efd70a.jpg","https://i.ytimg.com/vi/lvntC5lItBA/maxresdefault.jpg","https://media.lyricsmint.com/photos/436/varundvnatifaslam-jeenajeena-1_cover.jpg","https://wallpapercave.com/wp/wp8762197.jpg","https://www.teahub.io/photos/full/76-762422_tungevaag-raaban-bad-boy.jpg","https://wallpapercave.com/wp/wp3537459.jpg","https://i.scdn.co/image/ab67616d0000b2735843c07e504728fcc7562319","https://i.ytimg.com/vi/qM8n41GR1rk/maxresdefault.jpg"]
  // let songname =["Zindagi- CarryMinati","Khamoshiyan","Bing Bing Boo!","Kahani Suno-2.0","OOPS","Cold Hours","Jaadugar-Paradox","Ram Ram-MCSQUARE","Maan Meri Jaan-King","Tere Ishq Mein","No Lie!","Unholy!!","Industry BABY","Pal","Tera Chera","AATMA RAAMA Brodha V","Bones","Meri Jaan","Jo Tu Na Mila","Saach Keh raha Hai","Manjha","Talking To the Moon","Peaky Blinder","Astronaut in the Ocean","Cradles","Jab Se Tere Naina","Jeena Jeena","Thoda Thoda Pyaar Hua","Bad Boy!","Shape Of You","Kehna Galat Galat","Ra Ra Rakkama"]
  let obj = [{
    url: "https://e0.pxfuel.com/wallpapers/437/975/desktop-wallpaper-zindagi-carryminati-x-wily-frenzy.jpg",
    name: "Zindagi- CarryMinati"
  },
  {
    url: "https://wallpapercave.com/wp/wp6374574.jpg",
    name: "Khamoshiyan"
  },
  {
    url: "https://i.ytimg.com/vi/h-ile9tMNM0/maxresdefault.jpg",
    name: "Bing Bing Boo!"
  },
  {
    url: "https://i.ytimg.com/vi/O3Uf0UaTO2I/maxresdefault.jpg",
    name: "Kahani Suno-2.0"
  },
  {
    url: "https://i.ytimg.com/vi/s53T9gWI9b4/hqdefault.jpg",
    name: "OOPS"
  },
  {
    url: "https://i.pinimg.com/736x/6b/04/4a/6b044ae626e9eef153979a5a61734f5a.jpg",
    name: "Cold Hours"
  },
  {
    url: "https://i.ytimg.com/vi/Iyfes7gPvcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gUSgTMA8=&rs=AOn4CLA5J-PABTP2f4WlCsI1giCdJ-PtIA",
    name: "Jaadugar-Paradox"
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/114/751/814/naruto-kakashi-hatake-hd-wallpaper-preview.jpg",
    name: "Ram Ram-MCSQUARE"
  },
  {
    url: "https://i.ytimg.com/vi/1P9IiygnPDE/maxresdefault.jpg",
    name: "Maan Meri Jaan-King"
  },
  {
    url: "https://www.teahub.io/photos/full/179-1797704_demon-slayer-wallpaper-4k.jpg",
    name: "Tere Ishq Mein"
  },
  {
    url: "https://mobstatus.com/wp-content/uploads/2021/12/no-lie.jpg",
    name: "No Lie!"
  },
  {
    url: "https://i.ytimg.com/vi/mRennvAX2Cg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFsgWyhbMA8=&rs=AOn4CLClG_wJwiUSo7UVHYKyotrllSEX5w",
    name: "Unholy!!"
  },
  {
    url: "https://i.kym-cdn.com/entries/icons/original/000/038/207/industrialbaby.jpg",
    name: "Industry BABY"
  },
  {
    url: "https://4.bp.blogspot.com/-1-mooHIUvDs/W5tv-ieLXPI/AAAAAAAAERs/sAiaynH5IHIEtylWVb4YGFPrI-II1uoSQCLcBGAs/s1600/PicsArt_09-14-01.47.01.jpg",
    name: "Pal"
  },
  {
    url: "https://lastfm.freetls.fastly.net/i/u/500x500/42b0417598824ff7e10c629db234c382.jpg",
    name: "Tera Chera"
  },
  {
    url: "https://i.ytimg.com/vi/SdxSQlk4Bws/maxresdefault.jpg",
    name: "AATMA RAAMA Brodha V"
  },
  {
    url: "https://wallpapercave.com/wp/wp11887585.png",
    name: "Bones"
  },
  {
    url: "https://wallpaperaccess.com/full/8103099.jpg",
    name: "Meri Jaan"
  },
  {
    url: "https://c.saavncdn.com/605/Jo-Tu-Na-Mila-Hindi-2018-20190924060933-500x500.jpg",
    name: "Jo Tu Na Mila"
  },
  {
    url: "https://pagalfree.com/images/128Such%20Keh%20Raha%20Hai%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.jpg",
    name: "Saach Keh raha Hai"
  },
  {
    url: "https://www.quirkybyte.com/wp-content/uploads/2020/05/Manjha-Song-Download-Mp4.jpg",
    name: "Manjha"
  },
  {
    url: "https://wallpaperaccess.com/full/672473.jpg",
    name: "Talking To the Moon"
  },
  {
    url: "https://wallpaperaccess.com/full/1087735.jpg",
    name: "Peaky Blinder"
  },
  {
    url: "https://i.pinimg.com/originals/2d/79/b8/2d79b85394fd2ce78128460c4365697b.jpg",
    name: "Astronaut in the Ocean"
  },
  {
    url: "https://i.pinimg.com/originals/b2/5b/5f/b25b5f585ab8e5850f0ce0aa21efd70a.jpg",
    name: "Cradles"
  },
  {
    url: "https://i.ytimg.com/vi/lvntC5lItBA/maxresdefault.jpg",
    name: "Jab Se Tere Naina"
  },
  {
    url: "https://media.lyricsmint.com/photos/436/varundvnatifaslam-jeenajeena-1_cover.jpg",
    name: "Jeena Jeena"
  },
  {
    url: "https://wallpapercave.com/wp/wp8762197.jpg",
    name: "Thoda Thoda Pyaar Hua"
  },
  {
    url: "https://www.teahub.io/photos/full/76-762422_tungevaag-raaban-bad-boy.jpg",
    name: "Bad Boy!"
  },
  {
    url: "https://wallpapercave.com/wp/wp3537459.jpg",
    name: "Shape Of You"
  },
  {
    url: "https://i.scdn.co/image/ab67616d0000b2735843c07e504728fcc7562319",
    name: "Kehna Galat Galat"
  },
  {
    url: "https://i.ytimg.com/vi/qM8n41GR1rk/maxresdefault.jpg",
    name: "Ra Ra Rakkama"
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
      <Navbar />
      <hr />
      
      <div class="progress-container fixed-top">
        <div class="progress-bar" id="myBar"></div>
      </div>
      <PlayArea arrayobj={obj} />
      {/* <Musicard/> */}

    </>
  );
}

export default App;
