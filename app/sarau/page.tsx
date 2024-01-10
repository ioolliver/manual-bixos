"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import backgroundIMG from "@/assets/background-sarau.jpg"
import sarau1IMG from "@/assets/sarau1.jpg"
import sarau2IMG from "@/assets/sarau2.jpg"

import SectionButton from "@/components/SectionButton";
import Image from "next/image";

export default function Page() {
    return <div className="main">
        <Navbar previous="cafe" next="esportes" />
        <div className="content">
            <TitleSection 
            title="🎤 Sarau"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>😴 A ETESP pode ser bem exaustiva as vezes, mas nada como um sarau no final no bimestre para aliviar a barra.</p>
                <p>🖼️ O sarau é um local para reunir talentos: cante, dance, interprete, toque um instrumento, faça mágica... Seja lá o que for, se apresente com prazer, porque a ETESP está de braços abertos para te ver brilhar do seu jeitinho.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={sarau1IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>📝 As inscrições para o sarau sempre são abertas algum tempo antes do evento e são divulgadas no instagram e no Grupo dos Bixos. Não tenham vergonha, amamos ver as apresentações de vocês! Durante a pandemia, o sarau rolou virtualmente lá no @ecoetespiano (recomendo fortemente dar uma olhadinha no talentos dos nossos ex-alunos).</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={sarau2IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://www.instagram.com/ecoetespiano/" type="instagram" />
            </ContentSection>
            <ContentSection center animationType="from-left-delay">
                <p>Confira um dos talentos que surgiram ano passado, em 2023. Amanda, do 2ºADM:</p>
                <iframe style={{width: "80%", height: "auto"}} width="560" height="315" src="https://www.youtube.com/embed/PlbCZh2CIMM?si=Q02xNb4kZ1fKR2sF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/esportes" />
            </ContentSection>
        </div>
    </div>
}