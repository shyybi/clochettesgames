import Link from "next/link";
import Image from "next/image"
import darkIcon from "../pages/assets/img/darkIcon.png"


export default function Headerweb() {
  return (
    <ul className="max-sm:flex-col flex flex-row justify-around my-2 my-4">
      <li className=" flex inline flex-row text-lg my-0.2 ">
        <a>ClochettesGames.fr</a>
      </li>
      <div className="max-sm:space-x-4 flex inline flex-row text-xl space-x-10">
        <a>Accueil</a>
        <a>Nos Jeux</a>
        <a>Social</a>
        <a>Crédit</a>
        <Image
            src={darkIcon}
            width={25}
            height={25}
            alt="Dark Theme Icon"
            onClickCapture={() => console.log('coucou')}

            />
      </div>
    </ul>
  );
}