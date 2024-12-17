import { useState } from 'react'
 
 import Musics from './components/Musics'
import Navbar from './components/Navbar'

function App() {
 
const data = [
  {image: "https://m.media-amazon.com/images/I/41VxldIM9UL._SX354_SY354_BL0_QL100__UXNaN_FMjpg_QL85_.jpg", name: "Knife Brows", artist: "dhandha nyoliwala", added:false},
  {image: "https://i1.sndcdn.com/artworks-X3ogSUEuD8zROnRH-Q59gUw-t500x500.jpg", name: "Born to shine", artist: "Diljit Dosanjh", added:false},
  {image: "https://cdn-images.dzcdn.net/images/cover/bdcf70737dc185ef7ec866fb29591137/0x1900-000000-80-0-0.jpg", name: "Husn", artist: "Anuv Jain", added: false},
  {image: "https://i.scdn.co/image/ab67616d0000b27372a77d038887cdc425f5ee55", name: "Jo tu mere ho", artist: "Anuv Jain", added:false},
  {image: "https://i.scdn.co/image/ab67616d0000b273c7b32b2ebd1ed948c9e7e5c5", name: "Apna bna le", artist: "Arjit singh", added:false},
  {image: "https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/1GWwwaxpWp/size_m.webp", name: "Gulabi aankhe", artist: "Sanam", added:false},
  {image: "https://i.scdn.co/image/ab67616d0000b273865c8db3cbe7293861942aa2", name: "On top", artist: "KAran aujla", added:false},
  {image: "https://c.saavncdn.com/922/Run-This-Town-Haryanvi-2023-20230706051255-500x500.jpg", name: "Run this town", artist: "Dhandha nyoliwala", added:false},
];

const [songData, setsongData] = useState(data)

const buttonHandler = (index)=>{
 setsongData ((prev)=>{
  return prev.map ((item, itemIndex)=>{
     if(itemIndex === index){
       return {...item, added:!item.added}
     }
     return item;  // return the item if its not the one we are currently updating
  })
 })
  
}
  return (
   <div className='w-full h-screen  bg-zinc-300 '>
    <Navbar data={songData}/>
    <div className='px-14 gap-10 flex flex-wrap mt-10'>
   {songData.map((obj, index)=>{
    return  <Musics  data={obj} buttonHandler={buttonHandler} index={index} key={index} />
   })}
    </div>

   </div>
   
  )
}

export default App
