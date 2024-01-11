"use client";

import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import ContentSection from '@/components/ContentSection';

export default function Home() {
  return (
      <main className={styles.home}>
        <ContentSection animationType='fade'>
          <Image
          src="/etesp-icon.jpg"
          alt='ETESP'
          width={500}
          height={500}
          />
        </ContentSection>
        <ContentSection animationType='from-top'>
          <h1>📖 Manual dos Bixos 2024</h1>
        </ContentSection>
        <ContentSection animationType='from-left-delay'>
          <p>🎉 Parabéns novo etespiano! Sabemos a emoção que é chegar na ETESP, esse novo mundo de ensino médio se torna ainda mais desafiador quando vamos para um lugar totalmente desconhecido e diferente de tudo que já vivemos até então. Por isso, preparamos um manual de sobrevivência completo para você. Leia com atenção pois temos informações valiosas para sua adaptação que nós, veteranos, fizemos com muito carinho para você.</p>
        </ContentSection>
        <ContentSection animationType='from-left'>
          <p><i>Bolsominions, fascistinhas, projetos de Nazistas ou netos de avós liberais (sim, já tivemos o desprazer de esbarrar com alguns por aqui...) só vindos msm!</i></p>
        </ContentSection>
        <ContentSection animationType='fade'>
          <Link className='next-button' href={"/nomenclatura"}>Acessar manual</Link>
        </ContentSection>
      </main>
  )
}
