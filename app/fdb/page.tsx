"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import TitleSection from "@/components/TitleSection";

import Image from "next/image";
import backgroundIMG from "@/assets/background-fdb.jpg"
import SectionButton from "@/components/SectionButton";

import fdb1IMG from "@/assets/fdb1.jpg"
import fdb2IMG from "@/assets/fdb2.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="sexta" next="hallowen" />
        <div className="content">
            <TitleSection 
            title="💃 Festa dos Bixos"
            backgroundImg={backgroundIMG} />
            <ContentSection animationType="from-left">
                <p>Imagina uma festa de adolescente PARA adolescentes (sem vínculo a escola!). Socializar, beijar quem você não esperava, dançar como nunca e MUITO mais? Os alunos fazem exatamente isso duas vezes ao ano, sendo uma no meio do ano e outra no final para aliviar a tensão. Além desta festa ser um evento canônico para todos os alunos, há sempre alguém registrando TUDO para você guardar recordações.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={fdb1IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Vale ressaltar que: machismo, racismo, assédio, lgbtfobia ou qualquer comportamento do tipo NÃO são tolerados. Saiba que a ETESP vai abrir tua mente e desconstruir muita coisa. E atenção: chapar é bom, mas vamos maneirar pra conseguir curtir a noite toda. Bebam sempre com pessoas de confiança e/ou seus vets.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={fdb2IMG} alt="Festa dos bixos 2023" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>A festa sempre dura até tarde então aconselho dormir na casa de um amiga/o que mora perto para poder curtir até o mais tarde possível (ou até de manhã). O Instagram da FDB posta todas as informações lá, então sigam.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/hallowen" />
            </ContentSection>
        </div>
    </div>
}