import Image from 'next/image';
import s from './home.module.css';

export default function Home() {
  return (
    <div className={s.hero}>
        <div className={s.heroTextWrapper}>
          <div>
            <h1 className={s.heroTitle}>
              FOP calculating tool
            </h1>
            <p className={s.description}>
              Are you looking way to easy calculate taxes for your FOP?
              <br />
              You are in!
            </p>
          </div>
        </div>

        <div className={s.heroImageWrapper}>
          <Image
            src="/heroBg.png"
            alt="FOP calculating tool"
            width={300}
            height={500}
            className={s.heroImage}
          />
        </div>
    </div>
  );
}
