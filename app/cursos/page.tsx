"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-redes.jpg"
import SectionButton from "@/components/SectionButton";

export default function Page() {
    return <div className="main">
        <Navbar previous="redes" next="fim" />
        <div className="content">
            <ContentSection animationType="from-left">
                <h1>🧑‍🔬 Técnicos</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>A ETESP conta com 5 cursos técnicos integrado ao ensino médio. Preparamos uma sessão especifica para cada um. Escolha o seu curso abaixo:</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton fixWidth to="/cursos/ds" label="Desenvolvimento de Sistemas" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton fixWidth to="/cursos/elo" label="Eletrônica" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton fixWidth to="/cursos/edi" label="Edificações" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton fixWidth to="/cursos/ma" label="Meio-ambiente" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton fixWidth to="/cursos/adm" label="Administração" />
            </ContentSection>
        </div>
    </div>
}