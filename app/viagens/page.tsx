"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-viagens.jpg"
import SectionButton from "@/components/SectionButton";

import viagens1IMG from "@/assets/viagens1.jpg"
import viagens2IMG from "@/assets/viagens2.jpg"
import viagens3IMG from "@/assets/viagens3.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="arraial" next="correio" />
        <div className="content">
            <TitleSection 
            title="✈️ Viagens"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>O ensino medio é composto de diversas memórias incríveis, e as viagens proporcionadas pela ETESP vão gerar inúmeras memórias inesquecíveis para você. Aqui temos três viagens ‘tradionais’, uma para cada ano, proporcionadas pela rainha Soraia, professora de Geografia</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <h1>🚂 1º ano - Paranapiacaba</h1>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={viagens1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Esse bate volta para a cidade histórica de Paranapiacaba pode até parecer desinteressante, mas é a primeira viagem da sua sala, vai unir demais vocês, principalmente quando forem mergulhar na água de um rio congelante e depois ter que se trocar com seus amigos no meio do mato. Vai ser um dia inteiro rindo e consequentemente aprendendo coisas que você não esquece mais.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <h1>🏖️ 2º ano - Cananéia</h1>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={viagens2IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Agora sim começa a ficar mais interessante… 3 dias na região de Cananéia, na Ilha do Cardoso, num alojamento para estudantes, essa é uma experiência que você só poderá viver uma vez. Vale a pena cada centavo, tem trilha, mergulho no rio, ir pra praia, mergulhar no mangue, sarau de noite a beira mar, toda turma volta cheia de histórias pra contar e sempre um casalzinho ou outro. Quando forem vermes, não percam essa oportunidade!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <h1>🪨 3º ano - Petar</h1>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={viagens3IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>O último passeio da jornada do etespiano, Petar. Um lugar incrivel com diversas cavernas para serem exploradas.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/correio" />
            </ContentSection>
        </div>
    </div>
}