import Link from 'next/link'
import HeaderWeb from '../components/Header'
export default function index(){
  return(
    <>
      <HeaderWeb/>
      <div className=''>
        <div className=''>
          <a className=''>ClochettesGames.fr</a>
          <div>
            <a className=''>ClochettesGames est un site regroupant les jeux de </a>
            <Link className='text-cyan-600' href="https://x.com/its_charlottees">Clochettes</Link>
            <a className=''> !</a>
          </div>
        </div>
      </div>
    </>
  )
}