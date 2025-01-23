import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import styles from './tags.module.css';

export const meta = () => {
  return baseMeta({
    title: 'tags',
    description:
      'Quickly find portfolios related to a specific topic.',
  });
};

export const tags = () => {
  const initDelay = tokens.base.durationS;

  const tagNames = [
    "Application Security", "Mobile & Website dev", "Low Level Code & Exploit", "Hardware", "AD", 
    "Cryptography", "Networking", "VFX", "Cloud", "Reversing", "Gaming", "CTFs", "AI", 
    "Web3", "Research", "Languages, Life & Sciences", "Project", "Youtube & Writing", "kernel security & Dev"
  ];

  return (
    <Section className={styles.tags}>
      <Transition unmount in={true} timeout={1600}>
        {({ status, nodeRef }) => (
          <Heading
            className={styles.title}
            data-status={status}
            level={3}
            as="h1"
            style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
          >
            <DecoderText text="Quick Tags" start={status !== 'exited'} delay={300} />
          </Heading>
        )}
      </Transition>

      <div className={styles.tagContainer}>
        {tagNames.map((tagName, index) => (
          <Button
            key={index}
            className={styles.tagButton}
            style={{
              ...getDelay(tokens.base.durationM, initDelay, index * 0.1),
              margin: '10px', // Add equal spacing between buttons
            }}
            icon="tag"
            onClick={() => window.location.href = `/tags/${tagName.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {tagName}
          </Button>
        ))}
      </div>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
