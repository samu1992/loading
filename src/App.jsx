/* eslint-disable react/self-closing-comp */
// import { useEffect, useState } from 'react'
import '../style.css'
import Logo from './Logo'
import Card from './Card'
export function App () {
  /* const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const CAT_PREFIX = 'https://cataas.com/'
  const ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  useEffect(() => {
    fetch(ENPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ').slice(0, 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(response => response.json())
          .then(res => {
            const { url } = res
            setImageUrl(url)
          })
        /*  const firstWord = fact.split(' ', 3).join(' ')
      })
  }, [])
useEffect(() => {
      async function getFact () {
        const response = await fetch(ENPOINT_RANDOM_FACT)
        const data = await response.json()
        setFact(data.fact)
      }
  }, []) */

  return (
    <main>
      <section className='container'>
        <Logo />
        <div className='container-loading'>
          <div className='loading'></div>
        </div>
      </section>
      <section className='container-cards'>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}

// eslint-disable-next-line spaced-comment
/*<h1>app de gatitos</h1>
      {fact && <p>{fact}</p>}
      // eslint-disable-next-line eol-last
      {imageUrl && <img src={`${CAT_PREFIX}${imageUrl}`} alt='cat' />} */
