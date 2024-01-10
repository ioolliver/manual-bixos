"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-pp.jpg"
import SectionButton from "@/components/SectionButton";

import PP1IMG from "@/assets/pp1.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="hallowen" next="arraial" />
        <div className="content">
            <TitleSection 
            title="📕 Projeto Progressão"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>O Projeto Progressão é um cursinho gratuito feito <b>exclusivamente para estudantes do 9° ano de escolas públicas</b> de São Paulo que desejam ingressar nas ETEC’s.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Apelidado carinhosamente de “PP”, o projeto foi fundado em 2012 e é uma iniciativa voluntária dos alunos da ETESP. E adivinha? Quem ministra as aulas do cursinho são os próprios alunos e ex-alunos da nossa escola!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={PP1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://www.instagram.com/projetoprogressao/" type="instagram" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>💡 Mas é válido lembrar que dentro do Projeto Progressão existem também as “áreas internas”, que basicamente administram a parte burocrática do PP (matricular os futuros alunos, fazer os posts do Instagram, cuidar do site, etc…). É uma ótima opção para quem quer ajudar, mas não se sente confortável em dar aula.</p>
                <p>O projeto oferece aulas semanais aos sábados das 8h às 13h que acontecem lá na ETESP, e contam com todas as matérias cobradas pelo vestibulinho. Além é claro de simulados preparatórios, biblioteca, orientação pedagógica individual, materiais de apoio.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/arraial" />
            </ContentSection>
        </div>
    </div>
}