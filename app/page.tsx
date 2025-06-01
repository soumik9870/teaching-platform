import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import React from 'react'

const Page = () => {
  return (
    <main>
    <h1>Popular Companions</h1>
    <section className='home-section'>
      <CompanionCard 
        id = "123"
        name = "Neura the Brainy Explorer"
        topic= "Neural network of the Brain"
        subject = "Science"
        duration = {45}
        color = "#ffda6e"
      />
      <CompanionCard 
        id = "456"
        name = "Countsy the Number wizard"
        topic= "Derivatives and Integrals"
        subject = "Math"
        duration = {30}
        color = "#e5d0ff"
      />
      <CompanionCard 
        id = "789"
        name = "Verba the vocubulary master"
        topic= "language and grammar"
        subject = "English"
        duration = {45}
        color = "#bde7ff"
      />
    </section>
    <section className='home-section'>
      <CompanionsList />
      <Cta />
    </section>
    </main>
  )
}

export default Page