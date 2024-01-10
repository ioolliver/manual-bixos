"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-pj.jpg"
import SectionButton from "@/components/SectionButton";

import parque1IMG from "@/assets/parques1.jpg"
import parque2IMG from "@/assets/parques2.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="correio" next="redes" />
        <div className="content">
            <TitleSection 
            title="⛲ Parques"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <h1>👶 Parque da juventude</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Por tradição, após o café dos bixos e também no final dos bimestres, os alunos vão para o PJ (parque da juventude) para continuar continuar a curtir o dia com jogos, vôlei,danças, bebida... Um rolê realmente útil para conhecer novas pessoas de fora do seu grupinho e até mesmo para dar uns beijinhos. Este rolê vai normalmente até as 18h, mas tenha cuidado, pois o parque fica localizado no Carandiru, região perigosa ao escurecer.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={parque1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🌳 Centro Esportivo</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Algumas pessoas optam por ir ao Centro Esportivo Tietê, um local que fica mais próximo da escola e oferece mais segurança. É recomendado para pessoas que os pais não deixem ir para o PJ. Este parque é um pouco mais conservador e as pessoas não costumam beber por lá. Mas ainda tem quadras, beijos e muita conversa!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={parque2IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/redes" />
            </ContentSection>
        </div>
    </div>
}