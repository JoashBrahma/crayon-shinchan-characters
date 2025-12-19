import "./App.css"
import Card from "/src/components/Card.jsx";
import hiroshiImage from "./assets/hiroshi.jpg"
import masaeImage from "./assets/masae.jpg"
import shinchanImage from "./assets/shinchan.webp"
import actionKamenImage from "./assets/action-kamen.jpg"
import aiImage from "./assets/ai-suotome.jpg"
import boImage from "./assets/bo.jpg"
import himawariImage from "./assets/himawari.jpg"
import masaoImage from "./assets/masao.jpg"
import micchiImage from "./assets/micchi.jpg"
import midoriImage from "./assets/midori.jpg"
import mimikoImage from "./assets/mimiko.jpg"
import moekoImage from "./assets/moeko.jpg"
import neneImage from "./assets/nene.jpg"
import principalImage from "./assets/principal.jpg"
import shiroImage from "./assets/shiro.jpg"
import tooruImage from "./assets/tooru.jpg"
import umeImage from "./assets/ume.webp"
import atsukoImage from "./assets/atsuko.jpg"
import atsumiImage from "./assets/atsumi.jpg"
import buriburiImage from "./assets/buriburizaemon.webp"
import ginnosukeImage from "./assets/ginnosuke.jpg"
import bunnyImage from "./assets/happiness-bunny.jpg"
import hisaeImage from "./assets/hisae.jpg"
import junichiImage from "./assets/junichi.jpg"
import kentaImage from "./assets/kenta.jpg"
import kitamotoImage from "./assets/kitamoto.jpg"
import kuntamImage from "./assets/kuntam-robo.webp"
import kuroisoImage from "./assets/kuroiso.jpg"
import masumiImage from "./assets/masumi.jpg"
import minekoImage from "./assets/mineko.jpg"
import nanakoImage from "./assets/nanako.jpg"
import nushiyoImage from "./assets/nushiyo.jpg"
import robertImage from "./assets/robert.jpg"
import sydneyImage from "./assets/sydney.jpg"
import yasuoImage from "./assets/yasuo.webp"
import yonroImage from "./assets/yonro.jpg"
import yoshijiImage from "./assets/yoshiji.jpg"
import yuuImage from "./assets/yuu.jpg"

const characters = [
  { image: hiroshiImage, name: "hirosihi nohara", type: "main" },
  { image: masaeImage, name: "masae nohara", type: "main" },
  { image: shinchanImage, name: "shinnosuke nohara", type: "main" },
  { image: actionKamenImage, name: "action kamen", type: "secondary" },
  { image: aiImage, name: "ai suotome", type: "secondary" },
  { image: boImage, name: "bo", type: "secondary" },
  { image: himawariImage, name: "himawari noharo", type: "secondary" },
  { image: masaoImage, name: "masao sato", type: "secondary" },
  { image: micchiImage, name: "micchi hatogaya", type: "secondary" },
  { image: midoriImage, name: "midori yoshinaga", type: "secondary" },
  { image: mimikoImage, name: "mimiko sakura", type: "secondary" },
  { image: moekoImage, name: "moeko sakurada", type: "secondary" },
  { image: neneImage, name: "nene sakurada", type: "secondary" },
  { image: principalImage, name: "principal Ench", type: "secondary" },
  { image: shiroImage, name: "shiro", type: "secondary" },
  { image: tooruImage, name: "tooru kazama", type: "secondary" },
  { image: umeImage, name: "ume matsuzaka", type: "secondary" },
  { image: atsukoImage, name: "atsuko kutsuzoko", type: "minor" },
  { image: atsumiImage, name: "atsumi kutsuzoko", type: "minor" },
  { image: buriburiImage, name: "buriburizaemon", type: "minor" },
  { image: ginnosukeImage, name: "ginnosuke nohara", type: "minor" },
  { image: bunnyImage, name: "happiness bunny", type: "minor" },
  { image: hisaeImage, name: "hisae koyama", type: "minor" },
  { image: junichiImage, name: "junichi ishizaka", type: "minor" },
  { image: kentaImage, name: "kenta musashino", type: "minor" },
  { image: kitamotoImage, name: "kitamoto", type: "minor" },
  { image: kuntamImage, name: "kuntam robo", type: "minor" },
  { image: kuroisoImage, name: "kuroiso", type: "minor" },
  { image: masumiImage, name: "masumi ageo", type: "minor" },
  { image: minekoImage, name: "mineko kazama", type: "minor" },
  { image: nanakoImage, name: "nanako oohora", type: "minor" },
  { image: nushiyoImage, name: "nishiyo ooya", type: "minor" },
  { image: robertImage, name: "robert mcguire", type: "minor" },
  { image: sydneyImage, name: "sydney togo", type: "minor" },
  { image: yasuoImage, name: "yasuo kawamura", type: "minor" },
  { image: yonroImage, name: "yonro", type: "minor" },
  { image: yoshijiImage, name: "yoshiji koyama", type: "minor" },
  { image: yuuImage, name: "yuu yakutsukuri", type: "minor" },
]

function App() {
  return (
    <>
      <h1>Characters</h1>
      <div className="cards">
        {
          characters.map((character, idx) => {
            return <Card key={idx} image={character.image} name={character.name} type={character.type} />
          })
        }
      </div>
    </>
  )
}

export default App