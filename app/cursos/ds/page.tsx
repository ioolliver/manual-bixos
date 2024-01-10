"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SectionButton from "@/components/SectionButton";

import ds1IMG from "@/assets/ds1.jpg"
import ds2IMG from "@/assets/ds2.jpg"
import ds3IMG from "@/assets/ds3.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="cursos" next="fim" />
        <div id="cursos-content" className="content">
            <ContentSection animationType="from-left">
                <h1>💻 DS</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Parabéns por ter passado no curso mais concorrido dos últimos tempos. Em 2024, o curso de DS na ETESP foi o 7º mais concorrido de TODAS as ETECS! Isso realmente não é para qualquer um, já podemos deduzir que você é uma pessoa muito dedicada e merecedora de estar aqui. Agora, você é oficialmente um(a) garoto(a) de programa!</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>🍫 Bombom</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Assim é chamado nosso querido coordenador, Luiz Ricardo. Ele será uma pessoa polarizada na sua vida: ou você odiará muito ou terá um amor incondicional por ele. Os motivos? Você descobrirá conforme o ano. Esteja preparado!</p>
                <p>Essa é uma foto rara tirada por um veterano do Bombom dormindo no mêtro.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ds1IMG} alt="Bombom dormindo no mêtro" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>Esportes</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>A primeira impressão que o curso passa é que todos são NERDs que ficam o dia inteiro no computador jogando League of Legends. Isso é bastante verdade, mas nos últimos anos DS também tem se provado muito bom em esportes. Ano passado o DS2023 e DS2022 chegaram na semi-final do Futsal Masculino e em 2022 DS2020 era uma dos favoritos em todos os esportes. Por isso, esperamos que vocês continuem lutando contra esse estéreotipo e provando que também somos ótimos atletas!</p>
                <p>Esse somos nós, 3ºDS (camiseta roxo e preto) na semi-final do Futsal masculino ano passado.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ds2IMG} alt="Semi-final entre 3DS e 3EDI" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>"DS MITOU"</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Quando a ETESP estava participando ativamente das manifestações de 2019 contra cortes na educação, uma história engraçada (ou lamentável?) aconteceu... Em um dia, foi marcado uma manifestação e o acordo é sempre muito claro: em dia de manifestação, ninguém vai para a escola. Mas, nesse belo dia, a sala de DS2018 decidiu ir para a escola em dia de manifestação. Logo após esse ato repugnante, eles postaram uma foto com a legenda "DS mitou". Isso não é algo para se orgulhar, mas com certeza entrou para a história de DS.</p>
                <p>Essa é a imagem original:</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ds3IMG} alt="DS mitou" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>Como lidar com o curso?</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Aqui na ETESP as principais tecnologias ensinadas são C# e Java. Você usará C# para desenvolver aplicações WEB e Desktop, e Java para desenvolver aplicações para Android.</p>
                <p>Mas, opinião de veterano: o mundo de TI é um mundo que muda MUITO rápido. A cada ano uma nova tecnologia é lançada e outras ficam obsoletas. Podemos ver isso nos TCCs: lá no final do ano, vocês verão que muitos projetos de TCC nem sequer usarão as tecnologias que o curso ensinou. Por isso, não se prenda a aprender apenas as tecnologias ensinadas em sala de aula. Pesquise e aprenda novas tecnologias por si só. Por exemplo: Java para desenvolvimento mobile pode ser um pouco complicado, visto que já existem novas tecnologias que facilitam muito o desenvolvimento (React Native, Flutter, etc...). Tenha contato com diversas tecnologias e escolha as suas favoritas para se especializar.</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Isso significa que o curso é ruim? Não. O curso serve para você entender como o mundo do software funciona. As tecnologias no mundo de software mudam sim muito rápido, porém os conceitos bases nunca mudam. Aqui na ETESP você aprende os conceitos bases, como a lógica de programação, modelagem de banco de dados, fundamentos da informática, etc. Essas são coisas que, independentemente da tecnologia, continuam o mesmo. Aqui você se tornará um Desenvolvedor de Software e não um Desenvolvedor de Java ou C#.</p>
                <p>Geralmente, quando os professores técnicos estão ensinando a parte <b>prática</b>, ensinam apenas o básico do básico. Muitas pessoas acabam caindo numa cilada aqui. Se você só praticar aqui na escola você não será capaz de produzir nenhum software decente, principalmente no TCC. Por isso, considere (eu diria, obrigatório) aprender fora da escola também.</p>
                <p>Muitas pessoas consideram a ETESP como uma universidade ao invés de escola, pois mostra uma realidade que outras pessoas só vão encontrar na universidade. Por isso, preste atenção em tudo que foi dito aqui.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>Coleguismo</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Termo inventado pelo 3ºDS, o coleguismo é a essência de DS: a sala deve estar junto para tudo, até para fazer m#rd4.</p>
                <p>Então, nunca se esqueça que o trabalho em equipe é fundamental no curso! <s>até mesmo na hora de colar</s></p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>Conclusão</h1>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Aproveite muito esses 3 anos aqui e não tenha medo da sua sala, pois os alunos de DS sempre possuem gostos muito em comum (RPG, coisas Geek, Xadrez, etc). Se precisar de ajuda, conte sempre com nós veteranos (e os vermes também!).</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/fim" />
            </ContentSection>
        </div>
    </div>
}