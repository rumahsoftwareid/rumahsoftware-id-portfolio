/**
 * Real projects only. Every entry here must be something that actually
 * exists and whose `status`/`liveUrl` was verified (an HTTP check, or
 * firsthand build/test knowledge), not assumed. Do not add an entry you
 * cannot verify, and do not invent a liveUrl for a repo that doesn't have
 * one — leave it undefined instead.
 */

export type ProjectStatus = 'live' | 'in-development' | 'private-tool'

export interface Project {
  id: string
  name: string
  category: 'web' | 'ai'
  status: ProjectStatus
  tagline: { id: string; en: string }
  description: { id: string; en: string }
  stack: string[]
  liveUrl?: string
  /** Only set for a repo that is public -- never link a private repo, it
   * just 404s for a visitor and leaks nothing useful. */
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'alfagenskul',
    name: 'AlfaGenSkul',
    category: 'web',
    status: 'live',
    tagline: {
      id: 'Platform SaaS manajemen sekolah multi-tenant',
      en: 'Multi-tenant school management SaaS platform',
    },
    description: {
      id: 'Laravel 12 + React SPA dengan 6 portal berbeda (Platform, Organisasi, Sekolah, Guru, Siswa, Wali) dan lebih dari 90 API controller — akademik, presensi, ujian online, nilai & rapor, PPDB, hingga billing paket/langganan. Diuji lewat 1700+ automated test di backend.',
      en: 'Laravel 12 + React SPA with 6 distinct portals (Platform, Organization, School, Teacher, Student, Parent) and 90+ API controllers — academics, attendance, online exams, grading & report cards, admissions, and package/subscription billing. Backed by 1,700+ automated backend tests.',
    },
    stack: ['Laravel 12', 'React', 'TypeScript', 'PostgreSQL', 'TanStack Query', 'Tailwind CSS'],
    liveUrl: 'https://alfagenskul.rumahsoftwareindonesia.com',
  },
  {
    id: 'mirage302',
    name: 'Mirage 302',
    category: 'web',
    status: 'live',
    tagline: {
      id: 'Platform SaaS multi-produk berbasis lokasi',
      en: 'Multi-product location-based SaaS platform',
    },
    description: {
      id: 'Monorepo produksi: Laravel API + panel admin Filament, dashboard member Next.js, dan client Android (Flutter + Java native) untuk dua produk — simulasi GPS dan paket utilitas jaringan/perangkat. Mencakup sistem membership & billing, notifikasi push (FCM), serta feed komunitas real-time.',
      en: 'Production monorepo: a Laravel API + Filament admin panel, a Next.js member dashboard, and Android clients (Flutter + native Java) serving two products — a GPS simulation tool and a network/device utility suite. Includes a membership & billing system, push notifications (FCM), and a real-time community feed.',
    },
    stack: ['Laravel', 'Next.js', 'Flutter', 'Android (Java/Kotlin)', 'MySQL', 'Redis', 'Laravel Reverb'],
    liveUrl: 'https://302.oprekandroidx.com',
  },
  {
    id: 'apk-studio-pro',
    name: 'APK Studio Pro',
    category: 'ai',
    status: 'private-tool',
    tagline: {
      id: 'Desktop IDE untuk rekayasa balik APK, dibantu AI',
      en: 'AI-assisted APK reverse-engineering desktop IDE',
    },
    description: {
      id: 'Aplikasi desktop Python/PyQt6 yang mengorkestrasi apktool, jadx, zipalign, apksigner, dan adb ke dalam satu workspace terstruktur — editor manifest visual, pembanding APK, dan plugin AI assistant (terintegrasi Claude) untuk membantu membaca dan menjelaskan hasil dekompilasi. Untuk APK yang dimiliki atau berwenang dianalisis sendiri.',
      en: 'A Python/PyQt6 desktop app that orchestrates apktool, jadx, zipalign, apksigner, and adb into one structured workspace — a visual manifest editor, an APK comparison tool, and an AI assistant plugin (Claude-integrated) that helps read and explain decompiled output. Built for APKs you own or are authorized to analyze.',
    },
    stack: ['Python', 'PyQt6', 'apktool', 'jadx', 'Claude API'],
  },
  {
    id: 'marketplace-engine',
    name: 'Marketplace Engine',
    category: 'web',
    status: 'in-development',
    tagline: {
      id: 'Engine marketplace/e-commerce berbasis Laravel',
      en: 'Laravel-based marketplace/e-commerce engine',
    },
    description: {
      id: 'Backend Laravel untuk platform marketplace multi-toko, masih dalam pengembangan aktif — belum dirilis ke production.',
      en: 'A Laravel backend for a multi-store marketplace platform, still under active development — not yet released to production.',
    },
    stack: ['Laravel', 'MySQL'],
  },
]
