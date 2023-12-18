import Link from 'next/link'
import Image from 'next/image'
import HeaderWeb from '../components/Header'
import EdenGarden from '../components/Edengarden'
import pfp from "../pages/assets/img/pfp.png"
export default function index(){
  return(
    <>
    <div className=''>
      <HeaderWeb/>
      <div className='flex justify-around  text-2xl h-96 bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className='flex flex-col justify-center align-left'>
          <a className='flex justify-center my-4 font-bold'>ClochettesGames.fr</a>
          <div className='max-sm:text-center'>
            <a>ClochettesGames est un site regroupant les jeux de </a>
            <Link className='font-bold' href="https://clochettes.me/">Clochettes</Link>
            <a> !</a>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center font-bold my-14 text-2xl'>
          <a>Contributeurs</a>
        </div>
        <div className='flex justify-evenly'>
          <div>
            <Image
            src={pfp}
            width={150}
            height={150}
            alt="Charlotte's pfp"
            />
            <Link className='font-bold justify-center' href="https://clochettes.me/" >Charlotte !</Link>
          </div>
          <div>
            <Image
            src={pfp}
            width={150}
            height={150}
            alt="Charlotte's pfp"
            />
            <Link className='font-bold' href="https://clochettes.me/">Charlotte !</Link>
          </div>
        </div>

      </div>
        <EdenGarden/>

    </div>

    </>
  )
}