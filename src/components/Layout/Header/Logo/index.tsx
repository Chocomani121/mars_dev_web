import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/marsdevlogo.png"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src="/images/logo/marsdev.png"
        alt="logo"
        width={160}
        height={50}
        style={{ width: '60px', height: 'auto' }}
        quality={100}
        className='dark:block hidden drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]'
      />
    </Link>
  );
};

export default Logo;
