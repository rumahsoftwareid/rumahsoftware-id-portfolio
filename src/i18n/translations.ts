export type Lang = 'id' | 'en'

export interface TranslationShape {
  nav: {
    about: string
    web: string
    ai: string
    stack: string
    projects: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    ctaProjects: string
    ctaContact: string
  }
  about: {
    title: string
    body: string[]
  }
  web: {
    title: string
    body: string
  }
  ai: {
    title: string
    body: string
  }
  stack: {
    title: string
  }
  projects: {
    title: string
    viewLive: string
    status: {
      live: string
      'in-development': string
      'private-tool': string
    }
  }
  contact: {
    title: string
    body: string
    github: string
  }
  footer: {
    rights: string
  }
  langSwitch: string
}

export const translations: Record<Lang, TranslationShape> = {
  id: {
    nav: {
      about: 'Tentang',
      web: 'Web Development',
      ai: 'AI Systems',
      stack: 'Tech Stack',
      projects: 'Proyek',
      contact: 'Kontak',
    },
    hero: {
      eyebrow: 'RUMAH SOFTWARE ID',
      title: 'Web Developer & AI Systems Builder',
      subtitle: 'Orchestrator',
      description:
        'Membangun platform SaaS production-ready dan mengorkestrasi agent AI (Claude Code) sebagai bagian nyata dari alur kerja pengembangan — mulai dari kode, infrastruktur server, sampai rilis Android.',
      ctaProjects: 'Lihat Proyek',
      ctaContact: 'Hubungi Saya',
    },
    about: {
      title: 'Tentang',
      body: [
        'Saya membangun dan mengoperasikan sistem perangkat lunak production — backend Laravel, frontend React/Next.js, aplikasi Android, sampai konfigurasi server (Apache, PostgreSQL, PHP-FPM, SSL) di VPS yang sama tempat platform-platform itu benar-benar berjalan.',
        'Bagian yang membedakan cara kerja saya: agent coding AI (Claude Code) dipakai sebagai kolaborator nyata di seluruh siklus itu — menulis kode, menjalankan test, mendiagnosis crash lewat log perangkat, sampai build & sign APK rilis — dengan saya sebagai pengambil keputusan dan reviewer di setiap langkah.',
      ],
    },
    web: {
      title: 'Web Development',
      body: 'Platform SaaS multi-tenant yang benar-benar live — bukan prototipe. Backend Laravel teruji, frontend React/Next.js modern, dan infrastruktur server yang saya konfigurasi sendiri.',
    },
    ai: {
      title: 'AI Systems',
      body: 'AI bukan sekadar fitur tambahan — ini bagian dari cara saya bekerja. Mulai dari tool desktop dengan AI assistant terintegrasi, sampai praktik mengorkestrasi coding agent untuk mengirim dan merawat sistem production sungguhan.',
    },
    stack: {
      title: 'Tech Stack',
    },
    projects: {
      title: 'Proyek',
      viewLive: 'Buka Situs',
      status: {
        live: 'Live',
        'in-development': 'Dalam Pengembangan',
        'private-tool': 'Tool Privat',
      },
    },
    contact: {
      title: 'Kontak',
      body: 'Terbuka untuk kolaborasi, proyek freelance, atau sekadar diskusi soal SaaS dan AI-assisted engineering.',
      github: 'Lihat di GitHub',
    },
    footer: {
      rights: 'Seluruh hak cipta dilindungi.',
    },
    langSwitch: 'EN',
  },
  en: {
    nav: {
      about: 'About',
      web: 'Web Development',
      ai: 'AI Systems',
      stack: 'Tech Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'RUMAH SOFTWARE ID',
      title: 'Web Developer & AI Systems Builder',
      subtitle: 'Orchestrator',
      description:
        'Building production-ready SaaS platforms and orchestrating AI agents (Claude Code) as a real part of the development workflow — from code and server infrastructure to Android releases.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
    },
    about: {
      title: 'About',
      body: [
        "I build and operate production software systems — Laravel backends, React/Next.js frontends, Android apps, and the server configuration (Apache, PostgreSQL, PHP-FPM, SSL) on the same VPS those platforms actually run on.",
        'What sets my workflow apart: an AI coding agent (Claude Code) is a real collaborator across that whole cycle — writing code, running tests, diagnosing crashes from device logs, building and signing release APKs — with me as the decision-maker and reviewer at every step.',
      ],
    },
    web: {
      title: 'Web Development',
      body: "Multi-tenant SaaS platforms that are genuinely live — not prototypes. Tested Laravel backends, modern React/Next.js frontends, and server infrastructure I configure myself.",
    },
    ai: {
      title: 'AI Systems',
      body: "AI isn't a bolt-on feature here — it's part of how I work. From a desktop tool with a built-in AI assistant, to the practice of orchestrating coding agents to ship and maintain real production systems.",
    },
    stack: {
      title: 'Tech Stack',
    },
    projects: {
      title: 'Projects',
      viewLive: 'Visit Site',
      status: {
        live: 'Live',
        'in-development': 'In Development',
        'private-tool': 'Private Tool',
      },
    },
    contact: {
      title: 'Contact',
      body: 'Open to collaboration, freelance work, or just a conversation about SaaS and AI-assisted engineering.',
      github: 'View on GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    langSwitch: 'ID',
  },
}
