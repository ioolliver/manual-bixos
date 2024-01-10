"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-hallowen.jpg"
import SectionButton from "@/components/SectionButton";

import hallowen1IMG from "@/assets/hallowen1.jpg"
import hallowen2IMG from "@/assets/hallowen2.jpg"
import hallowen3IMG from "@/assets/hallowen3.jpg"
import hallowen4IMG from "@/assets/hallowen4.jpg"
import hallowen5IMG from "@/assets/hallowen5.jpg"
import hallowen6IMG from "@/assets/hallowen6.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="fdb" next="pp" />
        <div className="content">
            <TitleSection 
            title="🎃 Hallowen"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>Aqui na ETESP, todo dia 31 de outubro os etespianos resolvem se fantasiar. As fantasias sempre são muito criativas e divertidas. Confira algumas do ano passado:</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>3ºMA vestidos de 101 Dálmatas</h3>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={hallowen1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>MA2021 vestidos de Minions</h3>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={hallowen2IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>E outros...</h3>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={hallowen3IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={hallowen4IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={hallowen5IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={hallowen6IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/pp" />
            </ContentSection>
        </div>
    </div>
}