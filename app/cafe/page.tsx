"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import backgroundIMG from "@/assets/background-cafe.jpg"
import cafe1IMG from "@/assets/cafe1.jpg"
import cafe2IMG from "@/assets/cafe2.jpg"
import cafe3IMG from "@/assets/cafe3.jpg"

import SectionButton from "@/components/SectionButton";
import Image from "next/image";

export default function Page() {
    return <div className="main">
        <Navbar previous="mapa" next="sarau" />
        <div className="content">
            <TitleSection 
            title="☕ Café dos Bixos"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>🍰 Participar do café é uma tradição etespiana que você, como bixo, não pode perder. É uma oportunidade de ser recebido pelos veteranos e vermes com muita comida gostosa nas primeiras semanas de aula. Durante o café, além de comer e conversar com seus novos colegas, ainda são realizados alguns jogos e gincanas para que vocês possam se enturmar com mais facilidade.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={cafe1IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>O objetivo é que vocês se familiarizem com os seus vermes, veteranos e a galera de outros cursos. Quem sabe você não acha um crush na praceta para enviar um correio elegante?!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={cafe2IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={cafe3IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/sarau" />
            </ContentSection>
        </div>
    </div>
}