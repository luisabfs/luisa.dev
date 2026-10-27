import Link from 'next/link';

import {
  AboutLink,
  Cards,
  Eyebrow,
  InterestCard,
  Intro,
  Lead,
  Section,
  Title,
} from './styles';

const interests = [
  { title: 'Reading', description: 'Always another book on my list.' },
  { title: 'Off the clock', description: 'Board games, crochet & crafts.' },
  { title: 'Keep exploring', description: 'Languages, curiosity & learning.' },
];

export default function HomeAbout() {
  return (
    <Section id="about" aria-labelledby="home-about-title">
      <div className="about-inner">
        <Eyebrow>02 / A little about me</Eyebrow>
        <Lead>
          <Title id="home-about-title">More than code.</Title>
          <Intro>
            I&apos;m a frontend and mobile engineer who loves the intersection of technology and design. Outside work, I&apos;m usually reading something, learning a language, playing board games, or making something with my hands.
          </Intro>
        </Lead>

        <Cards aria-label="Personal interests">
          {interests.map((interest) => (
            <InterestCard key={interest.title}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </InterestCard>
          ))}
        </Cards>

        <AboutLink>
          <Link href="/about">A little more about me <span aria-hidden="true">↗</span></Link>
        </AboutLink>
      </div>
    </Section>
  );
}
