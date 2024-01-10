import Link from "next/link";

interface ISectionButton {
    to: string,
    type?: "instagram" | "twitter" | "whatsapp",
    label?: string,
    fixWidth?: boolean
}

import InstagramSVG from "@/assets/instagram.svg"
import TwitterSVG from "@/assets/twitter.svg"
import WhatsappSVG from "@/assets/whatsapp.svg"
import Image from "next/image";

const typesInfo = {
    "whatsapp": {
        svg: WhatsappSVG,
        color: "#c4ffc2"
    },
    "instagram": {
        svg: InstagramSVG,
        color: "#ffc2f2"
    },
    "twitter": {
        svg: TwitterSVG,
        color: "#c2f3ff"
    }
}

export default function SectionButton({ to, type, label, fixWidth } : ISectionButton) {
    if(!type) return <Link style={{width: fixWidth ? "100%" : undefined}} className="next-button" href={to}>{label || "Próximo"}</Link>

    let typeInfo = typesInfo[type];

    return <a target="_blank" style={{ background: typeInfo.color }} id="social" className="next-button" href={to}>
        <Image id="social-image" src={typeInfo.svg} alt={type} />
        <p>{type == "whatsapp" ? "Entrar" : "Seguir"}</p>
    </a>
}