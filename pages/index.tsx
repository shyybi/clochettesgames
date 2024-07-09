import Link from 'next/link'
import Head from "next/head";
import Image from 'next/image'
import HeaderWeb from '../components/Header'
import EdenGarden from '../components/Edengarden'
import pfp from "../pages/assets/img/pfp.png"
import Senshi from "../pages/assets/img/senshi.png"
import kurowne from "../pages/assets/img/ezgif.com-resize_1.gif"
import CacheMisere from "../pages/assets/img/cm.png"
const myWeakMap = new WeakMap();
const key = {}; // Make sure the key is an object
myWeakMap.set(key, 'some value');
import Footer from '../components/Footer'

export default function index(){
  return(
    <>
      <Head>
        <title>ClochettesGames</title>
        <meta property="og:title" content="ClochettesGames !" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://clochettesgames.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpp.4a9aa79a.png&w=256&q=75"/>
        <meta property="og:url" content="https://clochettesgames.fr/"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="Just a little Game Developpment Studio"/>
        <meta name="twitter:image:alt" content="Image failed to load..."/>
      </Head>
    <div className=''>
      <HeaderWeb/>
      <div className='flex justify-around  text-2xl h-96 bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className='flex flex-col justify-center align-left '>
          <a className='flex justify-center my-4 font-bold '>ClochettesGames.fr</a>
          <div className='max-sm:text-center'>
            <a>ClochettesGames est un site regroupant les jeux de </a>
            <Link className='font-bold' href="https://clochettes.itch.io/">Clochettes</Link>
            <a> !</a>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center font-bold my-14 text-2xl'>
          <a>L'équipe !</a>
        </div>

        <div className='flex justify-evenly max-sm:flex-col max-sm:align-center'>
          <div className='flex  flex-col max-sm:mx-28 max-sm:mb-10'>
            <Image
            src={pfp}
            width={200}
            height={200}
            alt="Charlotte's pfp"
            />
            <a className='flex justify-center'>Developper</a>
            <Link className='font-bold flex justify-center' href="https://gateaulune.fr" target='_blank' >GateauLune !</Link>
          </div>
          <div className='flex flex-col max-sm:mx-28 max-sm:mb-10'>
            <Image  
            src={kurowne}
            width={200}
            height={200}
            alt="Kurowne's pfp"
            />
            <a className='flex justify-center'>Artist</a>
            <Link className='font-bold flex justify-center' href="https://x.com/vyb3du">Kurowne !</Link>
          </div>
          <div className='flex flex-col max-sm:mx-28 max-sm:mb-10'>
            <Image
            src={CacheMisere}
            width={200}
            height={200}
            alt="Cache Misère's pfp"
            />
            <a className='flex justify-center'>Characters Designer</a>
            <Link className='font-bold flex justify-center' href="https://x.com/TTA_Misere">Cache Misère !</Link>
          </div>
          <div className='flex flex-col max-sm:mx-28 max-sm:mb-10'>
            <Image
            src={Senshi}
            width={200}
            height={200}
            alt="Senshi's pfp"
            />
            <a className='flex justify-center'>Sound Designer</a>
            <a className='font-bold flex justify-center' >Senshi !</a>
          </div>
        </div>

      </div>
        <EdenGarden/>

    </div>
      <Footer />
    </>
  )
}
