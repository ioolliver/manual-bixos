"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import backgroundIMG from "@/assets/background-fim.jpg"

import SectionButton from "@/components/SectionButton";

export default function Page() {
    return <div className="main">
        <Navbar previous="cursos" next="fim" />
        <div className="content">
            <TitleSection 
            title="🤗 Conclusão"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>😁 Esses foram os principais temas que nós consideramos que você precisa saber para sobreviver na ETESP.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Lembre-se: participe de todos os eventos, brincadeiras, aproveite a ETESP como um todo. Não seja uma pessoa retraída. A ETESP é mais do que uma escola, aqui você vai fazer amigos que vai levar para a vida toda e você amadurecerá em todos os quesitos possíveis. Pesquise no Twitter por "saudades ETESP" e você achará dezenas de ex-alunos morrendo de saudades da escola (não das lições e trabalhos, mas do ambiente). O tempo passa muito rápido, você ficará apenas 3 anos aqui (1/3 do que você passou no fundamental). Por isso, aproveite ao máximo. Caso contrário, com certeza se arrependerá.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Quando dizemos para você ser uma pessoa proativa na escola, não estamos te dando liberdade para se achar superior a ninguém e muito menos tratar alguém da escola mal, principalmente os funcionários. Muitas vezes acontece de bixos que começam a se achar Deuses pela liberdade que a ETESP proporciona e começam a destratar os outros. Trate a Jana, as tias da limpeza, as tias do CA (as mais queridas da escola!) com o máximo respeito. Isso é o mínimo de um aluno que está na melhor escola técnica de São Paulo.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Muito obrigado por ler até aqui, e bem-vindo novamente à ETESP! Caso você ainda não esteja no Grupo dos Bixos, procure o veterano que te mandou o link deste manual o mais breve possível.</p>
            </ContentSection>
            <ContentSection center animationType="from-left-delay">
                <SectionButton to="/" label="Inicio" />
            </ContentSection>
            <ContentSection animationType="fade">
                <h2>Créditos</h2>
                <p>Agradecimento a todos que ajudaram na construção do manual.</p>
                <h3>Desenvolvimento</h3>
                <p><b>Site desenvolvido por / Mapa desenhado por:</b> Isaque Nascimento 3ºDS</p>
                <h3>Escritores</h3>
                <p><b>Isaque Nascimento 3ºDS escreveu:</b> Esportes, Hallowen, Curso de DS, Conclusão</p>
                <p><b>Débora Rodrigues 3ºELO escreveu:</b> Sarau, Luta estudantil, Coletivos, Festa dos bixos, Correio, Curso de ELO</p>
                <p><b>Beatriz Badini 3ºEDI escreveu:</b> Introdução, Locais do mapa, Arraial, Viagens, Curso de EDI</p>
                <p><b>Mariana Luiza 3ºADM escreveu:</b> Nomenclatura, Redes sociais, Curso de ADM</p>
                <p><b>Wilson Neto 3ºMA escreveu:</b> Café dos bixos, Sexta temática, Projeto progressão</p>
                <p><b>Eli Sanchet 3ºMA escreveu:</b> Curso de MA</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <p>Comissão Manual dos Bixos 2024 &#174; Todos direitos reservados.</p>
                <a href="https://github.com/ioolliver/manual-bixos">Acessar código-fonte</a>
            </ContentSection>
        </div>
    </div>
}