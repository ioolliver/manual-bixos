"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SectionButton from "@/components/SectionButton";

import ma1IMG from "@/assets/ma1.jpg"
import ma2IMG from "@/assets/ma2.jpg"
import ma3IMG from "@/assets/ma3.jpg"
import ma4IMG from "@/assets/ma4.jpg"
import ma5IMG from "@/assets/ma5.jpg"
import ma6IMG from "@/assets/ma6.jpg"
import ma7IMG from "@/assets/ma7.jpg"
import ma8IMG from "@/assets/ma8.jpg"
import ma9IMG from "@/assets/ma9.jpg"

export default function Page() {
    return <div className="main">
        <Navbar previous="cursos" next="fim" />
        <div id="cursos-content" className="content">
            <ContentSection animationType="from-left">
                <h1>🌳 Meio-ambiente</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Escutou alguma cantoria na escola? Uma salva de palmas aleatória? Ou tem algum grupo de pessoas dançando no meio da praceta? De boas vindas a MA!</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>Aqui começa sua jornada não somente pela fama de abraçador de árvores e pela obrigatoriedade de salvar qualquer inseto, mas também por uma quantidade absurda de relatórios, crises em plena luz do dia e muitas (MUITAS!) amostras de solo e água. Não somente isso, mas você ingressa agora no curso mais unido dessa escola, e saiba que não importa o que aconteça, seu patriotismo por MA só vai aumentar.</p>
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>A tradição de alegria e companheirismo que as turmas de MA compartilham estão por toda parte. Então, para conhecer um pouco melhor nosso solo, fica uma lista de coisas especiais que você só encontra em MA</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>1 - Aquela ajudinha no período de provas 📝</h3>
                <p>É com mais orgulho do que provavelmente deveria ser anunciado que os Vets de MA confirmam ter dominado a arte da cola coletiva, que na verdade é só mais um exemplo de como as turmas estão dispostas a sempre se ajudar entre si. O mesmo vale para trabalhos e lições, MA nunca vai deixar alguém que precisa de uma mãozinha para trás.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma1IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>2 - Protagonistas do Praceta Day 🌿</h3>
                <p>Não da para falar sobre MA sem comentar sobre uma das tradições mais antigas do curso, o dia de cuidado da Praceta, o local mais importante para todos na escola - tirando lixo, podando árvores, arando o solo e mais. Embora esse dia tenha nascido com o curso, é essencial mencionar que ele é para todos, afinal, compartilhamos o espaço da praceta e temos um dever de o manter agradável!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma2IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma3IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>3 - Semana de MA 📆</h3>
                <p>Assim como os outros cursos tem suas próprias maneiras de comemorar seus cursos, MA tem sua própria semana, promovida pelos alunos e professores. Unicamente, porém, essa semana é aberta para todos na escola, sendo uma oportunidade de mostrar nosso estudo e compartilhar o que aprendemos com todos. Cada ano é marcado por dinâmicas diferentes e super criativas - com feirinhas de produtos reutilizados ou reciclados, jogos, vídeos e prendas.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma4IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma5IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma6IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>4 - Felicidade, cantoria e solidariedade 💃</h3>
                <p>Talvez não possa ser considerado exclusivo de MA, mas se tem um curso mais alegre nessa escola ele ainda não se manifestou. Não somente o pessoal desse curso tende a ser super criativos e muitas vezes artísticos, a energia toda desse curso sempre desafia a depressão que devia vir com um bilhão de atividades por dia. MA é puxar aplausos para absolutamente tudo, fazer amigos secretos, dias temáticos e estar junto para o que der e vier.</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma7IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>🏝️ Dicas de sobrevivência</h1>
                <p>Agora que vocês já conhecem um pouco mais do curso, fica aqui algumas dicas para os bixos de 2024, para garantir talvez um pouco menos de estresse nessa escola caótica:</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>1 - Sempre atentos às regras do laboratório</h3>
                <p>As aulas práticas no laboratório são obviamente as mais esperadas e divertidas - nos primeiros dias vocês serão introduzidos as regras mais importantes para garantir a segurança de vocês… mas principalmente dos aparelhos, que são mais caros que os salários da maioria dos professores</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>1.1 - Nunca comer ou beber no laboratório</h3>
                <p>O Cristian está te vendo, ein!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma8IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>2 - Não se afobem em comprar material</h3>
                <p>Nas primeiras aulas práticas vocês provavelmente serão pedidos para comprar Jalecos - enquanto muitas pessoas acabam nunca comprando, o que também não é um grande problema, é legal ter essa roupa tanto por motivos de segurança como de lembrança.</p>
                <p>Antes de comprar, porém, verifique se nenhum veterano consegue passar para frente um usado. Além disso, vocês precisam de testes de solo e água no qual provavelmente não serão usados nos anos de vocês como vermes e vets - sempre pecam para nós antes de comprar, porque provavelmente alguém terá guardado em algum lugar tudo o que vocês precisam!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <Image src={ma9IMG} alt="MA" />
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>3 - Registrem tudo!</h3>
                <p>Essa dica vem não somente porque vocês vão precisar para a quantidade ridícula de relatórios e laudos que vão fazer, mas porque os anos passam muito rápido e memórias guardadas nunca são demais!</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>4 - Deem sempre o melhor, mas não se esqueçam de curtir!</h3>
                <p>O cotidiano de aulas integrais é exaustivo, às vezes uma noite de sono boa ou um passeio com os amigos vale mais a pena que um MB.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>5 - Não contrariem muito a Natália...</h3>
                <p>só não.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h1>🧑‍🏫 Professores</h1>
                <p>Por fim, como já mencionamos duas personalidades de MA, é hora de apresentar os professores que farão vocês ficarem com cabelos brancos e rugas com 17 anos (carinhosamente, óbvio!)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Cristian</h3>
                <p>O sapinho! Cara dos maiores memes de MA, vocês estão próximos de conhecer um literal gênio - se preparem para as aulas mais difíceis e impressionantes que vocês já tiveram. O Cristian pode te recitar todos os códigos ambientais e fórmulas químicas de cabeça, mas não tente receber uma resposta direta dele… e boa sorte tentando acompanhar porque o nome da Wandinha do nada está do lado dos sistemas hídricos na lousa caótica que ele escreve.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Natalia</h3>
                <p>Coordenadora do curso e extra-oficial mãe adotiva de todos os de MA literalmente! A Nat (como chamamos ela) vai tratar a todos como filhos dela, e isso também inclui as broncas e puxões de orelha mandatórios. Uma dica dos vets: estejam presentes nas atividades que ela organizar - a Nat não esquece, nem perdoa. Ela vai ser a primeira a ensinar as coisas mais importantes que todo técnico em Meio Ambiente deve saber e será também a orientadora de TCC de vocês (provavelmente)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Eltiza</h3>
                <p>O que dizer da mulher que parece estar em pura necessidade de cafeína constante? Ela é o tipo de professora calma e compreensiva, mas tome cuidado para não passar dos limites na aula dela. Enquanto vocês terão uma quantidade razoável de atividades em sala, ela, felizmente, é uma das únicas professoras que não passa atividade para casa (aleluia)</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Yara</h3>
                <p>Professora de biologia e alguns cursos do técnico… não podemos garantir nada a não ser que chegou a hora de virar profissionais em criação de vídeos - que é o método preferido da professora de passar tarefas. Como bixos, vocês terão a oportunidade de criar um sistema com plantas que ainda será fruto de muitas discussões de quem irá levar para casa no fim do ano.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Matheus</h3>
                <p>Além de ser responsável pelo laboratório, professor de diversos cursos, promover várias saídas com MA, e fazer, bom, quase tudo na ETESP, o Matheus também é o tipo de professor que realmente lê tudo que os alunos entregam e se importa em deixar as aulas dinâmicas e compreensíveis para todos. Ele vai ser a mão direita em formato de professor que muitas vezes vocês vão precisar.</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <h3>Fefão</h3>
                <p>Não tem uma aula desse cara que não seja extremamente explicativa e fácil de compreender, uma benção depois dos traumas adquiridos nas aulas do Cristian. Ex-punk e parte do grande grupo de professores de humanas da escola, aproveitem essa figura ao máximo no primeiro ano de vocês!</p>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>🍃 Agora, bixo de MA, chegou sua hora de fazer história como o curso mais amado e carismático dessa escola. Cada experiência é uma, mas não se esqueça de aproveitar tudo que a ETESP pode te dar, que vai muito além de conhecimento para vestibular e para trabalho - conheçam as pessoas, participem das rodas saraus, das festas e do cotidiano na escola. Vocês tem um grupo de vetores especialmente dedicado em adotar vocês!</p>
                <p>P.S: Não esqueçam de seguir os vets de vocês em @ma.ravilhosos no instagram!</p>
            </ContentSection>
            <ContentSection animationType="fade">
                <SectionButton to="https://www.instagram.com/ma.ravilhosos" type="instagram" />
            </ContentSection>
            <ContentSection animationType="from-left">
                <p>P.S.S: Nada pode ser feito com a fama de maconheiro, só aceite.</p>
            </ContentSection>
            <ContentSection center animationType="fade">
                <SectionButton to="/fim" />
            </ContentSection>
        </div>
    </div>
}