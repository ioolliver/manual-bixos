"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import backgroundIMG from "@/assets/background-esportes.jpg"
import esportes1IMG from "@/assets/esportes1.png"
import esportes2IMG from "@/assets/esportes2.jpg"
import esportes3IMG from "@/assets/esportes3.jpg"
import esportes4IMG from "@/assets/esportes4.jpg"
import esportes5IMG from "@/assets/esportes5.jpg"
import esportes6IMG from "@/assets/esportes6.jpg"
import esportes7IMG from "@/assets/esportes7.jpg"
import esportes8IMG from "@/assets/esportes8.jpg"

import SectionButton from "@/components/SectionButton";
import Image from "next/image";

export default function Page() {
    return <div className="main">
        <Navbar previous="sarau" next="luta" />
        <div className="content">
            <TitleSection 
            title="⚽ Esportes"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>🏐 A ETESP é uma escola em que os alunos AMAM esportes. Para organizar tudo da melhor forma possível, os alunos criaram a Atlética etespiana.</p>
            </ContentSection>
            <ContentSection animationType="rotate-delay">
                <Image src={esportes1IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🐦 Pica-pau</h1> 
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Anos atrás um amigo peculiar voava sobre a praceta etespiana: o Ipecuati, o pica-pau amarelo. Essa espécie rara marcou os etespianos e foi escolhida para representar a imagem da nossa escola. Não se sabe por onde eles voam hoje, mas temos certeza que sua raridade passou para nossos atletas, que fazem mágica dentro de quadra.</p>
                <p style={{textAlign: "center", fontSize: "0.9rem"}}><i>Eu já sei o seu segredo: é do pica-pau marombado que vocês têm medo!"</i></p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🏆 TECSESP</h1> 
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Esse é o campeonato que os etespianos mais esperam durante o ano. Vencer o TECSESP é como ganhar uma copa do mundo.</p>
                <p>O TECSESP (você já deve ter visto como "Interetecs" por aí) é o campeonato que junta todas as ETECS do Estado de São Paulo e coloca elas para disputarem diversas modalidades: Futsal, Vôlei, Handebol, Xadrez, Corrida, Floorball e qualquer outro esporte que você imaginar (até mesmo e-sports, como League of Legends).</p>
                <p>Nós levamos o campeonato muito a sério e sempre buscamos montar os melhores times possíveis para cada modalidade. Por isso, todo ano a Atlética organiza as peneiras, que visam buscar bixos habilidosos em algum esporte. Por isso, se você joga alguma coisa, fique esperto nas peneiras e não deixe de participar!</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>💪 Tradição</h1> 
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Nós não somos a melhor ETEC de São Paulo apenas nos vestibulares, somos também gigantes no TECSESP.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <h2>🥈 2º LUGAR - FUTSAL MASCULINO - 2023</h2>
                <Image src={esportes2IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="fade">
                <h2>🥈 2º LUGAR - HANDEBOL MASCULINO - 2023</h2>
                <Image src={esportes3IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="fade">
                <h2>🥇 CAMPEÕES - FLOORBALL MISTO - 2023</h2>
                <Image src={esportes4IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h3>🏆 Outros:</h3>
                <p>🥇 - Campeão - Handebol Masculino - 2019</p>
                <p>🥈 - 2º Lugar - Handebol Feminino - 2019</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🤝 Amistosos</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Durante o ano, a Atlética marca amistosos contra outras ETECS para preparar o time para o TECSESP. Quando esses amistosos acontecem, todos os alunos, até os que não vão jogar, costumam ir para torcer. O ambiente é sempre muito agradável e descontraido, sendo sempre muito marcante tanto para os jogadores quanto torcedores.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={esportes5IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🏟️ Centro Esportivo</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>O Centro Esportivo Tietê (chamamos de CE) é um parque a 15 minutos da escola que conta com diversas quadras. Os etespianos costumam ir lá frequentemente para descontrair jogando vôlei, futsal ou basquete. É o seu principal local de treino na época do Interclasses.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={esportes6IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🏆 Interclasses</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>O evento mais emocionante, que os etespianos aguardam ansiosamente 6 meses por cada edição. Os preparados (ou ansiosos?) já começam a treinar muitos meses antes pois almejam o tão sonhado troféu do Interclasses.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={esportes7IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Acontecem sempre 2 edições (se a gente fizer muita coisa errada durante o ano talvez não) do Interclasses durante o ano: a edição de Inverno (antes das férias do meio do ano) e a edição de Verão (em dezembro). As modalidades que são disputadas normalmente são: Futsal (masculino e feminino), Handebol (masculino e feminino), Vôlei misto, Basquete (masculino e feminino) e o recentemente introduzido tênis de mesa.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={esportes8IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p><b>🎽 É importante construir o escudo e uniforme da sua sala bem no começo do ano para vocês já irem se impondo nessa competição tão acirrada.</b></p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Siga o Instagram da atlética etespiana para ficar por dentro de eventos, estatísticas e qualquer coisa envolvendo esportes da Escola.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://www.instagram.com/ecoetespiano/" type="instagram" />
                <SectionButton to="/luta" />
            </ContentSection>
        </div>
    </div>
}