import Image from "next/image";
import EdenScreen from "@/pages/assets/img/sda.png"

export default function EdenGarden(){
    return(
        <div>
            <div className='flex justify-center font-bold my-36 text-2xl'>
                <a>Projets</a>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-center">
                    <a>EdenGarden</a>
                </div>
                <div className="flex justify-around align-center my-14">
                    <div>
                        <Image
                        src={EdenScreen}
                        width={900}
                        height={600}
                        alt="EdenGarden Dev Screen"
                        onClickCapture={() => console.log('coucou')}
                        />
                    </div>
                    <div className="flex flex-col ">
                        <a>To add : Descriptions</a>
                    </div>
                </div>
            </div>
        </div>
    )

}