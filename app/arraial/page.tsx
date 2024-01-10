"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-arraial.jpg"
import SectionButton from "@/components/SectionButton";

import arraial1IMG from "@/assets/arraial1.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="pp" next="viagens" />
        <div className="content">
            <TitleSection 
            title="🕺 Arraial"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>A ETESP tem fama de ser a melhor em tudo que faz, e essa fama se mantem na festa julina. O evento acontece logo depois do recesso de meio do ano e graças a APM acontece uma grande festa (literalmente, são milhares de pessoas que comparecem)! Muita comida, bingo, bazar, brincadeiras, show ao vivo, um arraial de respeito.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={arraial1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Sempre acontece uma competição de quadrilhas entre os anos (1º vs 2º vs 3º) e nós indicamos que você participe, mesmo que seja muito difícil ganhar de nós veteranos (ganhamos ano passado como vermes, boa sorte).</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/viagens" />
            </ContentSection>
        </div>
    </div>
}