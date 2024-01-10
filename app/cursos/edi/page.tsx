"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SectionButton from "@/components/SectionButton";

import edi1IMG from "@/assets/edi1.jpg"
import edi2IMG from "@/assets/edi2.jpg"
import edi3IMG from "@/assets/edi3.jpg"
import edi4IMG from "@/assets/edi4.png"
import edi5IMG from "@/assets/edi5.jpg"
import edi6IMG from "@/assets/edi6.jpg"
import edi7IMG from "@/assets/edi7.jpg"
import edi8IMG from "@/assets/edi8.png"
import edi9IMG from "@/assets/edi9.png"
import edi10IMG from "@/assets/edi10.png"
import edi11IMG from "@/assets/edi11.png"
import edi12IMG from "@/assets/edi12.png"


export default function Page() {
    return <div className="main">
        <Navbar previous="cursos" next="fim" />
        <div id="cursos-content" className="content">
            <ContentSection animationType="from-left">
                <h1>🔨 Edificações</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Só alunos de edificações sabem quanto sangue, suor e lágrimas são derramados a cada bimestre, é desenho pra entregar, planta no Cad pra finalizar, relatórios da Lucishow e resumos do Duda… se você vir uma pessoa com cara de sono levemente desesperada e uma maleta preta da mão, melhor não chegar nem perto.</p>
                <p>Sabendo que essa pessoa desesperada somos nós e futuramente pode ser você esse guia foi criado pra tentar facilitar, na medida do possível, a sua vida como edier (apelido carinhoso). Presta atenção, bixo!</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>🤚 Não compre os materiais agora.</h3>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>É possível que você esteja muito empolgado em sair comprando todos os materiais pra dar aquele sentimento de aluno de edificações, mas calma!! Em algum momento o seu professor de desenho vai passar uma lista do que é realmente necessário comprar. De início uma lapiseira 0.5 já tá bom.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>💰 Trident é caro!</h3>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Surpreendendo um total de 0 pessoas, sim, o material costuma ser caro, ainda mais quando você quer das marcas profissionais como Trident, Desetec ou Pentel, mas tem saída. A lapiseira da cis tem a mesma precisão da pentel com um preço muito mais acessível, por exemplo. Só sugerimos que o escalímetro seja da Trident porque isso realmente faz diferença, e os esquadros devem ser sem marcação de régua.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>💿 Tenha um pendrive!</h3>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Parece desnecessário em tempos de OneDrive, mas confia, a internet da escola tem seus dias e ela vai decidir cair bem quando sua planta tá recém finalizada, não dá sorte pro azar e ande com um pendrive.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>💻 Paciência com os computadores</h3>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Sim, vocês vão ter aula de autocad e vai ser muito legal até seu computador travar, ou aquele dia que você precisa terminar o projeto e o computador demora uma aula toda pra conseguir rodar o cad… toda semana tem isso, atura ou surta mesmo.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>📒 Pranchetas</h3>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Cuidem das nossas salas de desenho por favor! As pranchetas são antigas, mas funcionam e vocês vão ver como elas são importantes para o seu desenho. Só tenham cuidado.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>👷 Aulas práticas</h3>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Eu sei que parece loucura, mas insistam com os professores para que eles façam aulas práticas. A ETESP em si não tem muitos laboratórios, mas os professores podem pedir para usar os da FATEC, então mostrem aos professores que vocês se interessam. Ano passado como vermes fizemos concreto, só pedreiro pra se empolgar com essas coisas.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi1IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>🏪 Onde comprar material?</h3>
            </ContentSection>
            <ContentSection center animationType="from-left">
                <p>Alguns lugares que nós recomendamos para a compra de material. Clique para ser redirecionado para o respectivo website da loja, contendo o endereço.</p>
                <a href="https://www.oprojetista.com.br/">Papelaria O Projetista</a>
                <a href="https://www.papelariauniversitaria.com.br/">Papelaria Universitária</a>
                <a href="https://acasadoartista.com.br/">Casa do artista</a>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h2>🧑‍🏫 Professores</h2>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Não queremos influenciar ninguém ao julgar os professores, mas vamos com dicas de sobrevivência com cada um:</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Luciana</h3>
                <p>Lucishow para os mais próximos. Apenas façam os trabalhos manuscritos dela, é uma merda ser manuscrito, sim, mas ela é assim, não discute. As vezes vai parecer que você não tá entendendo nada, as vezes você vai dormir, mas por incrível que pareça a gente aprende bastante no processo.</p>
                <Image src={edi2IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Rosana</h3>
                <p>Rosaninhaaa, se você não gosta dela você está morto por dentro. A senhora mais fofa que vai te ensinar a desenhar, é só você ter todos os desenhos que ela passou no fim do bimestre que tá tudo bem. Se ela der alguma aula de teoria como viabilidade, se prepare pra sonequinha.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Elder</h3>
                <p>1,65m de boa vontade. Apenas apreciem ele começar a ficar de saco cheio de dar aula nos primeiros 40 minutos dando aula. Ele não faz o L assim como o best dele.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Eduardo</h3>
                <p>O Duda, best do Elder. Ele é o ponto fora da curva na ETESP, se você faz a mãozinha ✊ talvez não vá muito com a cara dele, mas não tem como negar que ele é um ótimo professor, se você entrar na brisa dele você aprende muito. Nas aulas com ele você pode morrer de rir ou morrer de raiva. Sugiro que você anote tudo no caderno porque provavelmente ele vai pedir um resumo do bimestre como avaliação. Se prepare, ele vai falar sim da ponte estaiada, e muito. Só peço pra que no primeiro dia de aula você peça pra ele fazer o L. (Lembrem-se, concreto não seca, ele endurece)</p>
                <Image src={edi3IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Lembrando que esses são os professores que nós, veteranos, tivemos aula, pode ser que vocês tenham professores diferentes, nada é fixo. Também não julguem eles pela nossa fala, cada experiência é diferente.</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>⚽ Esportes</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Ediers tem uma grande reputação no mundo esportivo da ETESP, os vermes já têm vários títulos, nós veteranos então nem se fala né, especialmente no vôlei. Existe um legado que tem passado de geração em geração de bixos de edi em que os bixos derrotam seus veteranos em algum esporte no interclasse… mas acho difícil.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi4IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi5IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi6IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi7IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>😡 "O curso mais odiado"</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Pode ser difícil acreditar, mas Edi não tem uma fama muito boa na ETESP, especialmente quando bixos, todos os anos têm muita polêmica e spotteds, então não se assustem se em algum momento vocês se tornarem “a sala mais odiada”, depois ninguém nem lembra. Ah, a Márcia X também não gosta muito de Edi, mas isso se explica na próxima imagem.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi8IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi9IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi10IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi11IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={edi12IMG} alt="Edificações"/>
            </ContentSection>
            <ContentSection animationType="from-left">
                <h1>📉 Reputação</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Tá bom, podemos ser o curso mais odiado em alguns momentos, mas na moral, o nosso é o mais legal. A grande maioria das pessoas são legais, comunicativas e muito resenha. Esperamos que essa nova geração de bixos e bixetes dê continuidade a nossa reputação.</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Novos Ediers, esperamos que vocês tenham lido tudo, óbvio que tem muito mais coisa a ser aprendida, mas se pudermos ajudar vocês em alguma coisa já é gratificante. Modéstia parte, vocês têm muita sorte de entrar nessa época da ETESP, nós estamos realmente empenhados em ser bons veteranos pra vocês! Aproveitem cada momento.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/fim" />
            </ContentSection>
        </div>
    </div>
}