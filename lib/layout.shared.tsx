import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { BookIcon, University } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="/wethvn.svg"
          alt="WETH"
          width={30}
          height={30}
          priority
        />
      ),
    },
    links: [
      {
        icon: <BookIcon />,
        text: 'Tài liệu',
        url: '/tai-lieu',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <University />,
        text: 'Giáo trình',
        url: '/tai-lieu/giao-trinh-blockchain-ethereum',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        type: 'icon',
        icon: <Image src="/facebook.svg" alt="Facebook" className="dark:invert" width={20} height={20} />,
        text: 'Facebook',
        url: 'https://www.facebook.com/wethvn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/youtube.svg" alt="Youtube" className="dark:invert" width={20} height={20} />,
        text: 'Youtube',
        url: 'https://www.youtube.com/@wethvn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/x.svg" alt="X" className="dark:invert" width={20} height={20} />,
        text: 'X',
        url: 'https://x.com/wethvnx',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/github.svg" alt="Github" className="dark:invert" width={20} height={20} />,
        text: 'Github',
        url: 'https://github.com/wethvn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
    ],
  };
}
