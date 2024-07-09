import { useState } from "react"; 
import Image from "next/image";
import EdenScreen from "@/pages/assets/img/sda.png";
import EdenScreenCity from "@/pages/assets/img/City.png";
import EdenScreenHouse from "@/pages/assets/img/LivingRoom.png";
export default function EdenGarden() {
    const [imageSrc, setImageSrc] = useState(EdenScreen);

    return (
        <div>
            <div className='flex justify-center font-bold my-24 text-2xl'>
                <a>Projets</a>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-center">
                    <a className="font-bold text-3xl">EdenGarden</a>
                </div>
                <div className="flex justify-around align-center my-14">
                    <div>
                        <Image
                            src={imageSrc} 
                            width={900}
                            height={600}
                            alt="EdenGarden Dev Screen"
                            onMouseOver={() => setImageSrc(EdenScreenCity)}
                            onMouseOut={() => setImageSrc(EdenScreenHouse)} 
                        />
                    </div>
                    <div className="flex flex-col ">
                        <a>To add </a>
                    </div>
                </div>
            </div>
        </div>
    );
}