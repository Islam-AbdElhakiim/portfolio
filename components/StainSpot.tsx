import Image from "next/image";

const StainSpot = () => {
    return ( 
        <div  className="absolute top-0 left-0 mix-blend-color-dodge opacity-50 w-[300px] xl:w-[400px] z-10 ">
            <Image draggable="false" alt="Spot Image" width={400} height={400} src='/top-left-img.png'  className="relative z-0"/>
        </div>
     );
}
 
export default StainSpot;