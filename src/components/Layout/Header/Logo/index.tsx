import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link
      href="/"
      className="relative flex items-center px-8 py-4 -m-1 overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)',
        background: 'white',
        // background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
      }}
    >
      {/* Light mode logo - dark shadow on white header */}
      <Image
        src="/images/logo/marsdevlogo.png"
        alt="Mars Devt Corp"
        width={160}
        height={50}
        style={{ width: '140px', height: 'auto' }}
        quality={100}
        className="dark:hidden"
      />
      {/* Dark mode logo - shadow + subtle bg for contrast on orange */}
      <Image
        src="/images/logo/marsdev.png"
        alt="Mars Devt Corp"
        width={160}
        height={50}
        style={{ width: '80px', height: 'auto' }}
        quality={100}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
