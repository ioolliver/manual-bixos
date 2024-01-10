"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-coletivos.jpg"
import SectionButton from "@/components/SectionButton";

import coletivos1IMG from "@/assets/coletivos1.jpg"
import coletivos2IMG from "@/assets/coletivos2.jpg"
import coletivos3IMG from "@/assets/coletivos3.png"
import coletivos4IMG from "@/assets/coletivos4.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="luta" next="sexta" />
        <div className="content">
            <TitleSection 
            title="🧑‍🤝‍🧑 Coletivos"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>Como todos dizem e a maioria sabe, a ETESP nos marca! Não poderia ser diferente nesse sentido… Nossa escola é responsável por seu protagonismo e inserção em assuntos de resistência, para que seja promovida a igualdade e respeito. Nossos coletivos possuem o objetivo de acolher e reafirmar nossas minorias que fazem parte da escola.</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>👩 Roda das mina</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Toda mulher sabe bem como é difícil desenvolver-se na adolescência, devido a casos de assédio, boatos, traumas e injustiças. Assim, a roda das minas é formada para trazer apoio para qualquer mulher que precisa de acolhimento, além disto aprender a falar sobre nós mesmas, amarmos do jeito que somos, superando traumas assim.</p>
                <p>Qualquer preconceito contra as mulheres não será tolerado, e qualquer um que tenha uma ação inconveniente sofrerá as consequências!</p>
            </ContentSection>
            <ContentSection center animationType="from-left-delay">
                <a target="_blank" href="https://buzzfeed.com.br/post/a-atitude-dessas-estudantes-mostrou-como-o-feminismo-pode-mudar-uma-escola">Clique aqui para ler mais sobre a roda</a>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={coletivos1IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://chat.whatsapp.com/C9SvB0tX2hUCjFSBTetoNo" type="whatsapp" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>👨🏿 Nkongo Nkosi</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Nós, integrantes do coletivo negro Nkongo Nkosi, parabenizamos todos os novos negros e negras etespianos.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Uma das coisas que você vai perceber ao entrar na sala de aula é que a maioria dos etespianos são brancos e a presença negra por aqui é quase nula, por fatores que nesse momento não nos cabe destacar. Exatamente por essa presença reduzida, em meados de 2015, o conjunto de estudantes negros da nossa escola decidiu fundar um coletivo que pudesse manter a nossa união politica e afetiva e nos fortificar para reagir a esse ambiente elitizado e racista.</p>
                <p>A origem do nome Nkongo Nkosi e da lingua africana suaili e significa em tradução livre "O Território que é Soberano”</p>
                <p>Convidamos a todos negros e negras para somar e lutar junto conosco para a construção de um espaço aconchegante para todos nós e com atitudes combativas a todos os atos racistas que venham a ocorrer (e quase sempre eles ocorrem, fiquem sabendo).</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={coletivos2IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://chat.whatsapp.com/LYeb0emhAcCCTUdIXAqRmz" type="whatsapp" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🌈 Roda LGBTQIA+</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Tudo começa com uma dúvida "esta forma de se sentir é normal?", muitas vezes esta pergunta vem de nós, outras vezes de nossos pais e em casos ruins de pessoas sem amor. Independente do caso, compartilhar nossos sentimentos nos permite conhecer e denunciar a homofobia.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={coletivos3IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://chat.whatsapp.com/LYeb0emhAcCCTUdIXAqRmz" type="whatsapp" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>🙏 ABS</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>A Aliança Bíblica Secundarista, ou só ABS, é o coletivo para os etespianos que buscam contato religioso com Jesus. A galera da ABS se reúne de maneira descontraída para conversar sobre temas bíblicos, sobre a importância da fé cristã e, claro, sobre Jesus. Além disso, há também células para terem seus momentos de palavra, comunhão e louvor. Fora isso a ABS se organiza em idas ao parque, visitas, cultos e retiros.</p>
                <p>ABS está sempre aberta a receber novos membros e aos curiosos também.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={coletivos4IMG} alt="Café dos bixos 2023" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="https://www.instagram.com/abs.etesp" type="instagram" />
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/sexta" />
            </ContentSection>
        </div>
    </div>
}