"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import backgroundIMG from "@/assets/background-sexta.jpg"
import sexta1IMG from "@/assets/sexta1.jpg"
import sexta2IMG from "@/assets/sexta2.jpg"
import sexta3IMG from "@/assets/sexta3.jpg"
import sexta4IMG from "@/assets/sexta4.jpg"

import SectionButton from "@/components/SectionButton";
import Image from "next/image";

export default function Page() {
    return <div className="main">
        <Navbar previous="coletivos" next="fdb" />
        <div className="content">
            <TitleSection 
            title="🦸 Sexta temática"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>🤴 Seja muito bem-vindo à ETESP, o lugar onde as sextas-feiras ganham um toque especial!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={sexta1IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Imagine só: a cada determinada sexta do mês, uma temática diferente invade os corredores, praceta e até mesmo as salas de aula. É a chance dos veteranos mostrarem todo o seu estilo e criatividade, transformando a ETESP em um verdadeiro palco de diversão.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={sexta2IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Então, bixos, preparem-se para se surpreender e se encantar com as loucuras que os veteranos são capazes de inventar. Se você ainda está se perguntando o que é uma Sexta Temática, a resposta é simples: é um dia em que tudo pode acontecer, desde a temas mais inusitada até os trajes mais fora do comum.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={sexta3IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Mas atenção: Nesse trote só os mais experientes têm o passaporte garantido, vulgo nós, veteranos.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={sexta4IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/fdb" />
            </ContentSection>
        </div>
    </div>
}