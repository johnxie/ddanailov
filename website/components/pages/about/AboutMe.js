import dynamic from '@ddanailov/components/Pages/about/next/dynamic'

import Slogan from '@ddanailov/components/Pages/about/@ddanailov/styled/Slogan'

const SocialIcons = dynamic(() =>
  import('@ddanailov/components/Pages/about/@ddanailov/components/SocialIcons'),
)

function AboutMe() {
  return (
    <>
      <Slogan>Dimitar Danailov</Slogan>

      <SocialIcons />

      <p>
        Remote consultant / Full stack Web Developer with more than 10 years of
        profesional experience
      </p>

      <ul>
        <li>
          Fine with both front-end (React.js, Native web components, D3.js,
          Polymer and SPA) and back-end(Nodejs, Go)
        </li>
        <li>Amazon web services, Azure and Google Cloud are my best friends</li>
        <li>Creating software is my hobby</li>
        <li>Mentorship: I love to share my experience with the world</li>
        <li>I love open source and Stackoverflow</li>
        <li>I'm a guy with good self - education discipline</li>
      </ul>
    </>
  )
}

export default AboutMe
