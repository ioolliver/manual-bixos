import { StaticImageData } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import "./styles/titleSection.scss"

interface ITitleSection {
    title: string,
    backgroundImg: StaticImageData
}

export default function TitleSection({ backgroundImg, title } : ITitleSection) {
    return <div className="titleSection">
        <h1>{title}</h1>
        <Image src={backgroundImg} alt="Background" />
    </div>
}