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
import { Footer } from '~/components/footer';



const WhoamiText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Abang Obed" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
   
Abang 'obx' Obed is a Mobile Developer and Security Researcher at <Link href="https://www.gigafro.com">Gigafro</Link>. His work spans from software exploit development, hardware prototyping, developer operations and 3d composting. Currently pursuing a B.Tech in Cyber-Security Science, Abang has foundation in computer science, physiology, reverse engineering, chemistry, and cryptography.

</Text>
<Text className={styles.description} data-visible={visible} size="l" as="p">
Abang's contributions to computer research include discovering software vulnerabilities, learning to bypass authorizated networked systems, building softwares and studying NSA code-breaker archives for advanced cryptographic concepts. 

</Text>   
<Text className={styles.description} data-visible={visible} size="l" as="p">
  <em><b>Notable achievements include:</b></em>
  <ul>
    <li>Developing a <strong>Mobile C2 Framework</strong>.</li>
    <li>Created a <strong>Load Balancer C++ with gRPC</strong>.</li>
    <li>Built a <strong>VM hypervisor using the QEMU library</strong>.</li>
    <li>Developed a <strong>Chromium service worker extension in Node.js</strong>.</li>
    <li>Simulated <strong> Matrix Computation with my AMD radeon DDR3</strong>.</li>
    <li>AI Model Deployment on Edge Devices using<strong> Cloudfare</strong>.</li>
    <li>Delivered <strong>six production-grade websites</strong>, an app and multiple SDKs for businesses.</li>
    <li>Big Data ETL Pipeline for <strong>User Behavior Analysis on soccer games</strong>.</li>
    <li>Blockchain powered Dapps for tracking <strong>Agricultural </strong>Items through an inventory.</li>
    <li>Developing a <strong>3D Compositing & storyboard</strong> pipeline for my short film.</li>
    <li>Built a <strong>video stream </strong>server with <strong>rxJs,threejs & tailwind css</strong>.</li>
    <li>Contributed to the setup of a <strong> quadcopter drone simulink model.</strong>.</li>
    <li>Writing automation scripts for <strong>Blender, Houdini, After Effects, godot, and Unity</strong>.</li>
    <li>Assisted in creating a driving simulation game with <strong>C#</strong>.</li>
    <li>Authorization bypass on CodeSandbox<strong>(Traiged)</strong>, IDOR on Coinhako<strong>(Needs more Info) .</strong> </li>

  </ul>
  <Link href="/articles">Find out more(pls)</Link>
</Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
    In his spare time, Abang explores security researching, drone piloting, Windows internals, FC25 and unreal engine development. He also enjoys creating short films, hacking through CTFs, and researching AGI and machine learning.
    {' '}
    Feel free to reach out for collaborations or discussions @ <strong>hitme@obx0x3.tech</strong>
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
<Footer />
