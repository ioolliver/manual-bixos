"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-redes.jpg"
import SectionButton from "@/components/SectionButton";

export default function Page() {
    return <div className="main">
        <Navbar previous="pj" next="cursos" />
        <div className="content">
            <TitleSection 
            title="🗣️ Redes sociais"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>Como toda boa escola, a ETESP conta com algumas redes sociais de aluno para aluno.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>💻 Spotted</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Quem não gosta de uma fofoca né? Assim como em um clássico filme de Ensino Médio, não poderia faltar a página de fofoca que repercute na escola toda. O Spotted da ETESP está lá para nos gerar entretenimento, o perfil conta com um link em que você acessa e escreve uma mensagem (anonimamente) e o ADM (que também é anônimo) posta o seu relato. Lembrando, o Spotted não serve para difamar ou expor as pessoas, use com bom senso.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <SectionButton to="https://twitter.com/EtespSpotted" type="twitter" />
            </ContentSection> 
            <ContentSection animationType="from-left-delay">
                <h1>💤 Dormindo na ETESP</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Olha, você pode até ter sido o aluno modelo no seu colégio antigo, mas aqui isso muda. O dormindo na ETESP serve para mostrar os dorminhocos de plantão, convenhamos que do mais fraco ao mais forte, ninguém aguenta uma aula de literatura na 16T!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <SectionButton to="https://www.instagram.com/dormindo_na_etesp/" type="instagram" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/cursos" />
            </ContentSection>
        </div>
    </div>
}