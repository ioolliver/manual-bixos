"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-nomenclatura.jpg"
import tweetIMG from "@/assets/tweet-verme.jpg"
import SectionButton from "@/components/SectionButton";

import Home1IMG from "@/assets/home1.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="" next="mapa" />
        <div className="content">
            <TitleSection 
            title="📝 Nomenclatura"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>🥱 Primeiro, segundo e terceiro ano são nomes muito chatos. Por isso, aqui na ETESP usamos nomes especiais para se referir a cada ano.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>🐛 Bixos</h1>
            </ContentSection>
            <ContentSection animationType="fade">
                <p>Agora você provavelmente está se perguntando, “Manual dos Bixos? O que é isso?” Vem aqui que nós te explicamos:</p>
                <p>Bixo não é nada mais que você! O título de “Bixos” pertencem à vocês, alunos do 1° ano. Novos etespianos, tão novos, tão inocentes… Aqueles que ainda não tem a dimensão do que é ser ETESP, mas fiquem calmos! Esse manual vai esclarecer tudo aquilo que vocês precisam entender antes de entrar na famigerada ETESP. Lembrando que <b>BIXO NÃO TEM VEZ!</b></p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🐞 Vermes</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Em uma pirâmide hierárquica, os vermes estariam na segunda posição, mas quem liga pro segundo lugar, não é? Vermes são os alunos do segundo ano, apenas pobres coitados que estão no meio dos melhores/piores três anos que um aluno secundarista pode ter. Uma transição social quase que insignificante. Vocês os verão esgueirados pelas paredes, dormindo pelos lugares mais inusitados possíveis e cheios de olheiras. Maffei, cansaço, insignificância e tudo mais que a ETESP pode te proporcionar, os Vermes são e tem. Não se cresçam bixos, vermes ainda tem mais moral que vocês!</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>😎 Veteranos</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Somos nós! Os escritores desse manual. Já passamos por todas as experiências etespianas que vocês podem imaginar, então nos escutem, somos a voz da sabedoria. Mesmo com a correria dos vestibulares e as crises pré-vida adulta, nós somos os encarregados por fazer vocês, bixos, participarem de todas as tradições etespianas. Café, Sarau, Festa dos bixos, etc… Somos nós que organizamos. Provavelmente um veterano vai te adotar e será seu pai/mãe etespiano. Escutem sempre seus Vets e lembrem-se: <b>VERME NÃO ADOTA BIXO.</b></p>
            </ContentSection>
            <ContentSection animationType='fade'>
                <Image src={Home1IMG} alt="Bem-vindo a ETESP"/>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p><b>Lembrete: os nomes não tem objetivo de ofender ninguém. É apenas um costume, então se acostume. Nos poupe de coisas assim:</b></p>
                <Image src={tweetIMG} alt="Tweet de um verme em 2022 falando que não usaria as nomenclaturas." />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/mapa" />
            </ContentSection>
        </div>
    </div>
}