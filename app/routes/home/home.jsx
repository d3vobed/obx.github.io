import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import iphoneTexture2Placeholder from '~/assets/blender-short.jpg';
import iphoneTexture2 from '~/assets/blender-short.jpg';
import iphoneTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import iphoneTexture from '~/assets/blender-short.jpg';
import NintendoslideTexture from '~/assets/slice-game.jpg';
import NintendoslideTextureLarge from '~/assets/slice-game.jpg';
import NintendoslideTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import spr1TextureLarge from '~/assets/mobile-framework.jpg';
import spr1TexturePlaceholder from '~/assets/gamestack-login.jpg';
import spr1Texture from '~/assets/mobile-framework-set.jpg';
import spr2TextureLarge from '~/assets/mobile-framework.jpg';
import spr2TexturePlaceholder from '~/assets/gamestack-login.jpg';
import spr2Texture from '~/assets/mobile-framework.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Designing the future of real estate interactivity"
        description="A platform to help real estate agents to preview and analyze stonerockers NG services."
        buttonText="View website"
        buttonLink="https://stonerockers.com/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Freelancing mobile platform for africans"
        description="Work from anywhere, Get the freedom you deserve with gigafro.com"
        buttonText="View website"
        buttonLink="https://gigafro.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Scaling frontend UI designs for icondigital edge "
        description="Your Brand, Our Canvas"
        buttonText="View website"
        buttonLink="https://icondigitaledge.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Mobile security framwork & C2 "
        description="Metasploit but for mobile exploits and C2 service to manage your hosts"
        buttonText="Github"
        buttonLink="https://github.com/R3syst/kono_ui"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${spr1Texture} 375w, ${spr1TextureLarge} 750w`,
              placeholder: spr1TexturePlaceholder,
            },
            {
              srcSet: `${spr2Texture} 375w, ${spr2TextureLarge} 750w`,
              placeholder: spr2TexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Unity 3D with AWS integration – 234Games"
        description="WebGL based games on unity, C# & blazor web assembly, 2-3-4 players games simulates the real exictment of playing with friends just as roblux."
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: '234 games console',
          textures: [
            {
              srcSet: `${NintendoslideTexture} 400w, ${NintendoslideTextureLarge} 920w`,
              placeholder: NintendoslideTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="3D animated movie in blender, maya, 3ds max, houdini & sora "
        description="Cybersecurity awareness short movie on IOS & NSO devices"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${iphoneTexture} 1280w, ${iphoneTexture} 2560w`,
              placeholder: iphoneTexture2Placeholder,
            },
            {
              srcSet: `${iphoneTexture2} 375w, ${iphoneTexture} 750w`,
              placeholder: iphoneTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
