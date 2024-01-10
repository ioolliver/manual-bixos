"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SectionButton from "@/components/SectionButton";

import adm1IMG from "@/assets/adm1.jpg"
import adm2IMG from "@/assets/adm2.jpg"
import adm3IMG from "@/assets/adm3.jpg"
import adm4IMG from "@/assets/adm4.jpg"
import adm5IMG from "@/assets/adm5.jpg"
import adm6IMG from "@/assets/adm6.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="cursos" next="fim" />
        <div id="cursos-content" className="content">
            <ContentSection animationType="from-left">
                <h1>🏦 Administração</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>BEM VINDO, ADMER! De duas uma, ou seu pai tem uma empresa ou você não sabia o que fazer, certo? Sabe qual a melhor coisa de ser ADMER? Planilhas de excel? Não. Balancetes de contabilidade? Não. A nossa carga horária. Para alguns sair 12h50 em um dia da semana é vagabundagem, mas a verdade é que todos querem ser a gente.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={adm1IMG} alt="ADM" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>✍️ Fatos sobre o curso</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>1 - Brigas são constantes na turma de ADM, não se assuste com a gritaria para resolver um simples projeto, pois ela vai acontecer (com muita frequência)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>2 - Falando em projetos, já se preparem, algo que vai perseguir vocês para o resto de todo o curso são os trabalhos em grupo. (Dica de veterano: escolham bem seus grupos, eles vão te causar muita dor de cabeça)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>3 - NÃO CHEGE ATRASADO NA AULA DO ELIEZER</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>4 - O nome do nosso digníssimo professor, Eliezer (Eli pros mais chegados) se pronuncia eliezÉr! não errem!</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>5 - Tentem fazer a X gostar de ADM 😭😭😭 (nós veteranos falhamos nessa missão)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>6 - A professora Marcela é um anjo na terra, arrume problema com ela que você arruma briga com todo o curso!</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>7 - Siga as leis do Borgismo, vivemos numa ditadura, o Borges manda, a gente obedece!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={adm2IMG} alt="ADM" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>8 - NÃO LIGUEM O PC ANTES DO PROFESSOR PINHEIRO MANDAR (sério, apenas não façam isso)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>9 - Se forem dormir, escolham bem as aulas (nunca, em hipótese alguma durma na aula do Eli ou do Pinheiro)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>10 - ADM é conhecido por serem salas comunicativas, extrovertidas, barulhentas… Levem seus protetores de ouvido </p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>🏫 Trabalhos</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Com certeza os trabalhos de ADM são os mais divertidos, segue agora os principais:</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h2>Jornal do Borges</h2>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Um jornal completo organizado pela sala ao comando do professor Luis Borges (vocês vão ouvir muito esse nome). Um jornal completo e com tudo que há direito, repórter, intervalo, âncoras etc… Vai dar MUITA dor de cabeça, mas tenham em mente que o resultado com certeza compensa </p>
                <a target="_blank" href="https://www.youtube.com/watch?v=okdmXB6hohY">Assista o Jornal 2023 aqui.</a>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h2>Documentário do Borges</h2>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>O professor Borges passa um tema (que ele decide) e fala “Façam um documentário” Basicamente isso ❤️ Se virem e deem o melhor de vocês. Mais uma vez, da MUITO trabalho, mas o resultado compensa!</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=QqiKA7lhYZE">Assista o Documentário 2023 aqui.</a>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>🤵 ExpoADM</h1>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={adm4IMG} alt="ADM" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Nossa Expo (melhor evento da etesp cof cof)  é um evento organizado pelos vermes para todo o curso, conta com palestras, dinâmicas, premiações e o melhor de tudo, comes e bebes.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={adm3IMG} alt="ADM" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Representa a nata de um administrador etespiano:</p>
                <p>🤵 - Roupas caras</p>
                <p>🥊 - Brigas</p>
                <p>🎤 - Palestras</p>
                <p>😡 - Mais brigas</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={adm5IMG} alt="ADM" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Fiquem preparados, pois ano que vem, quando forem vermes, vocês é que vão organizar e a Expo é com certeza uma experiência que vai ficar marcada em vocês para sempre! Apreciem que da trabalho pra fazer (boa sorte vermes 2024!)</p>
                <p>Dica de veterano: NÃO DURMA NAS PALESTRAS!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={adm6IMG} alt="ADM" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>É isso galera, aproveitem demais esses três anos que vocês viverão aqui na ETESP, a administração te prepara para o mundo. Aguentem firme, sejam fortes e preparem seus looks de pinguim (roupa social) para essa jornada.</p>
                <p>Contem com os veteranos para tudo!!</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/fim" />
            </ContentSection>
        </div>
    </div>
}