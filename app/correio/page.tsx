"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-correio.jpg"
import SectionButton from "@/components/SectionButton";

import correio1IMG from "@/assets/correio1.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="viagens" next="pj" />
        <div className="content">
            <TitleSection 
            title="💋 Correio"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>O amor está no ar etespianos, então vamos nos lembrar da seguinte questão: existe momento mais perfeito para se declarar a alguém por um preço muito baixo (arrecadado para custear os materiais) do que em dia de correio?</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={correio1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>💖 A vergonha não é problema para nós pois muitos casais só existem graças a ele. Além de ser anônimo é versátil, já que você pode usar para mandar um correio para sua amiga aniversariante, juntar um casal ou passar o rodo. O correio ocorre em dias especificos do ano e apenas durante os intervalos, então esteja atento e nunca perca uma oportunidade.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/pj" />
            </ContentSection>
        </div>
    </div>
}