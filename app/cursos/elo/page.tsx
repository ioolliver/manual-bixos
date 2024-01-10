"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SectionButton from "@/components/SectionButton";

import elo1IMG from "@/assets/elo1.png"
import elo2IMG from "@/assets/elo2.png"
import elo3IMG from "@/assets/elo3.jpg"
import elo4IMG from "@/assets/elo4.jpg"
import elo5IMG from "@/assets/elo5.png"
import elo6IMG from "@/assets/elo6.png"
import elo7IMG from "@/assets/elo7.png"
import elo8IMG from "@/assets/elo8.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="cursos" next="fim" />
        <div id="cursos-content" className="content">
            <ContentSection animationType="from-left">
                <h1>⚙️ Eletrônica</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Posso dizer com toda certeza que cada turma da escola é diferente, masss os eletrônicos tem certas coisas que outros cursos não têm em tanta evidência (além de ser o melhor curso, claro):</p>
            </ContentSection>
            <ContentSection center animationType="from-left-delay">
                <h3>😂 Zoar com ABSOLUTAMENTE TUDO, o céu é o limite.</h3>
                <iframe style={{width: "100%", height: "auto"}} width="560" height="315" src="https://www.youtube.com/embed/EIjtDINiS3k?si=d3_FVzuCkTESg8je" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <Image src={elo1IMG} alt="Eletrônica" />
                <Image src={elo2IMG} alt="Eletrônica" />
            </ContentSection>
            <ContentSection center animationType="from-left-delay">
                <h3>📖 Estudar de última hora, mas dar um jeitinho com as outras turmas (se você tiver um bom vet descobrirá uma maneira mais fácil de estudar, porque a ETESP é foda).Adoro a maneira como os professores querem sempre um diálogo com a gente nessas horas de provas</h3>
                <Image src={elo3IMG} alt="Eletrônica" />
            </ContentSection>
            <ContentSection center animationType="from-left-delay">
                <h3>🧑‍🏫 Os professores sempre conseguirem se irritarem ou se distraírem durante nossas aulas, mas sempre temos aquele molho de turma divertida que NINGUÉM tem, sendo em fazer perguntas inesperadamente inteligentes ou simplesmente conseguir convencer que vale a pena uma pausa na aula para jogar dominó (vamos relembrar que estou generalizando, okay? Nunca passamos do limite, mas não somos os mocinhos).</h3>
                <Image src={elo4IMG} alt="Eletrônica" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>Tradições</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Rolê na Santa</h3>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Os vets marcam um dia para levar bixetes/bixos e vermes para conhecerem o caminho até a Santa Efigênia, mas por que ir na Santa Efigênia? Bom, ao longo do ano ocorrerá vários projetos onde vocês precisam comprar materiais para fazer placas, circuitos, carrinhos, luminárias…</p>
                <p>Algumas matérias vocês já vão ter que comprar neste role, mas sem afobação não precisa comprar o mundo, porque tudo tem seu tempo.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={elo5IMG} alt="Eletrônica" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Oficina de ELO</h3>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>O famigerado curso de eletrônica (vulgo o melhor!!!) tem a tradição de gerir a oficina de elo, popularmente conhecida como ateliê elo, um espaço onde bixos, vermes e vets tem a liberdade de apresentar um pouquinho do curso, geralmente com projetos descontraídos que vão desde sala de espionagem com a laser até lutinhas de robôs…</p>
                <p>Se vc não tem um lado criativo tão aflorado mas deseja ajudar não se preocupe, sempre existe a possibilidade de queimar a mão de algum amiguinho de outro curso (sem querer querendo kkkkk) ao ensina-lo a soldar. Enfim... Toda e qualquer contribuição é sempre bem-vinda e esse é exatamente o espaço que vc jovem eletrônico dispõe pra colocar alguma ideia doida da tua cachola em prática com teus amigos.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <Image src={elo6IMG} alt="Eletrônica" />
                <a target="blank" href="https://photos.google.com/share/AF1QipO6Yc6PnANKfQYZUtIC2d5MUf3eQoWuuhzb0tnU9B4Df6vyfP-iaj_7tnvsw5qGRw?key=bWZ6RTIzcGl3YVVTU19oTlFtbmxBSlE1RTEwUmNR">Clique aqui para ver mais fotos da oficina de ELO</a>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Grito de torcida</h3>
            </ContentSection>
            <ContentSection center animationType="fade">
                <Image src={elo7IMG} alt="Eletrônica" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Durante o interclasse temos um grito muito importante…</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <Image src={elo8IMG} alt="Eletrônica" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Tem muito mais sobre o curso de eletrônica que só é possível descobrir na prática, então não se esqueçam, SOMOS OS MELHORES!!!</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/fim" />
            </ContentSection>
        </div>
    </div>
}