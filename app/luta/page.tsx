"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-luta.jpg"
import SectionButton from "@/components/SectionButton";

import luta1IMG from "@/assets/luta1.png"
import luta2IMG from "@/assets/luta2.jpg"
import luta3IMG from "@/assets/luta3.jpg"
import luta4IMG from "@/assets/luta4.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="esportes" next="coletivos" />
        <div className="content">
            <TitleSection 
            title="✊ Luta estudantil"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>🏦 Mesmo que seja uma escola com vários privilégios, quando comparada a outras escolas públicas, muitas das coisas que você pode desfrutar hoje durante seu período aqui, foram resultado de MUITA luta. A ETESP sempre foi e continua sendo uma escola com caráter revolucionário, em prol de melhores condições de ensino nas redes públicas de São Paulo.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={luta1IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🍴 Merenda</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Um dos frutos dessa luta é a merenda, conquistada em 2016 após fortes manifestações exercidas pelos alunos das ETECs e outras escolas públicas, com a ETESP sendo um dos pilares desse movimento.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>O grafite “só a luta muda a vida”, foi feito no antigo refeitório do Hipólito após a conquista da merenda, depois de muita luta, em 2016.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={luta2IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>✋ Reformas de 2019</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Em 2019, a ETESP inteira se mobilizou e liderou vários atos, paralisações e manifestações contra a reforma do ensino médio, a reforma da previdência e os cortes de verba nas escolas públicas. Nós lutamos em prol de melhores condições de ensino nas redes públicas de São Paulo.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={luta4IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>📚 Novo E.M</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Os atos mais recentes em que a ETESP marcou presença, aconteceram em 11 de Agosto de 2023 (Dia do Estudante), em uma manifestação enorme em defesa da educação pública e da democracia, lutando principalmente contra a reforma do ensino médio.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={luta3IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/coletivos" />
            </ContentSection>
        </div>
    </div>
}