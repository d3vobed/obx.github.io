import whoamiImgLarge from '~/assets/whoami-large.jpg';
import whoamiImgPlaceholder from '~/assets/whoami-placeholder.jpg';
import whoamiImg from '~/assets/whoami.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from '../home/katakana.svg';
import styles from './whoami.module.css';


const WhoamiText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Obed, currently I live in Nigeria working part-time as a Mobile Developer & Security Engineer  at{' '}
      <Link href="https://www.gigafro.com">Gigafro</Link>. My fields include Web & mobile developement, application security, devops(AWS,Azure & cloudfront), low level software & unreal-engine dev, arduino/hardware enthusiast, drone piloting, windows internals, photography & 3d visual effects. Being comfortable with code allows me to rapidly
      prototype and validate experiences. If you’re interested what i do check out my portfolio page <Link href="/uses">click me(xss)</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to practice hacking with ctfs, bug hunting, storyboard for my short movies , play FC25, and{' '}
      <Link href="/projects/volkihar-knight">research on AGIs & ML</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text>
  </Fragment>
);

export const whoami = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.whoami}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <WhoamiText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={whoamiImgPlaceholder}
                  srcSet={`${whoamiImg} 480w, ${whoamiImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-whoami`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
