import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  ko: {
    langLabel: 'English',
    nav: {
      about: '소개',
      projects: '전략 프로젝트',
      sideProjects: '사이드 프로젝트',
      strengths: '강점',
      contact: '연락처',
    },
    hero: {
      eyebrow: '전략 기획 & 비즈니스 개발',
      heading: 'AI로 전략 도구를 직접 만드는 기획자, Aiden',
      copy: '시장 분석부터 사업성 평가, 전략 실행 관리까지 — AI를 활용해 의사결정에 필요한 도구를 직접 설계하고 만듭니다. 복잡한 판단을 데이터로 풀어내는 실용적인 제품을 지향합니다.',
      cta: '전략 프로젝트 보기',
    },
    about: {
      title: '소개',
      p1: '전략 기획과 사업 개발 현장에서 실제로 쓰이는 의사결정 도구를 AI로 만듭니다. 경쟁사 분석, 신사업 평가, 전략 과제 관리 등 현업의 과제를 대시보드와 트래커로 해결해 왔습니다.',
      p2: '목표는 하나입니다.',
      p2bold: '"전략적 판단에 필요한 도구를 직접 만들어 팀의 실행력을 높이는 것."',
      p2suffix: '',
    },
    projects: {
      title: '전략 & BD 프로젝트',
      desc: '전략 기획과 비즈니스 개발 실무를 위해 만든 AI 기반 의사결정 도구입니다.',
    },
    sideProjects: {
      title: '사이드 프로젝트',
      desc: '기획부터 개발, 운영까지 직접 수행한 프로젝트입니다.',
    },
    strengths: {
      title: '핵심 역량',
      desc: '전략적 사고와 AI 실행력을 결합해 비즈니스 가치를 만듭니다.',
    },
    contact: {
      title: '연락처',
      placeholder: '연락처는 곧 업데이트됩니다.',
      note: 'Email / LinkedIn / GitHub 링크가 여기에 추가될 예정입니다.',
    },
    footer: '이 사이트는 AI를 활용한 제품 개발 경험을 바탕으로 제작되었습니다.',
    featuredProjects: [
      {
        title: 'Market & Competitor Intelligence Dashboard',
        subtitle: '시장·경쟁사 인텔리전스 대시보드',
        details: [
          '시장 트렌드와 경쟁사 동향을 실시간으로 시각화',
          '전략 의사결정에 필요한 데이터 기반 인사이트 제공',
          'AI 자동 분석으로 리서치 소요 시간 절감',
        ],
        stack: ['시장 분석', '데이터 시각화', 'AI 인사이트'],
      },
      {
        title: 'New Business Idea Evaluation Dashboard',
        subtitle: '신규 사업 아이디어 평가 대시보드',
        details: [
          '시장성·실현 가능성·수익성을 정량 평가',
          '다차원 스코어링으로 객관적인 의사결정 지원',
          'AI 기반 Go/No-Go 리포트 자동 생성',
        ],
        stack: ['사업 평가', '스코어링 프레임워크', 'AI 분석'],
      },
      {
        title: 'Strategic Action Tracker',
        subtitle: '전략 실행 추적 시스템',
        details: [
          '전략 과제별 진행 현황을 실시간 모니터링',
          'OKR·KPI 연동으로 실행 상태 한눈에 파악',
          '팀 정렬 확인 및 병목 구간 조기 발견',
        ],
        stack: ['전략 실행', 'OKR/KPI 추적', '팀 얼라인먼트'],
      },
    ],
    sideProjectsList: [
      {
        title: 'TOEIC Daily',
        subtitle: '영어 학습 텔레그램 봇',
        details: [
          '토익·토스·오픽 학습 플로우 설계 및 운영',
          'AI 음성 평가와 레벨 테스트 기능 구축',
          '실사용자 대상 라이브 서비스 운영 경험',
        ],
        stack: ['텔레그램 봇', 'AI 음성 평가', '서비스 운영'],
      },
      {
        title: 'Solo Survival',
        subtitle: '뱀서라이크 웹 게임',
        details: [
          '나 혼자만 레벨업 세계관 기반 게임 기획',
          'Phaser + TypeScript로 전투·성장 시스템 구현',
          '아이디어에서 플레이 가능 상태까지 빠른 프로토타이핑',
        ],
        stack: ['Phaser', 'TypeScript', '웹 게임'],
      },
    ],
    strengthsList: [
      {
        title: '전략 기획',
        text: '시장과 경쟁 환경을 체계적으로 분석하고, 데이터에 기반한 의사결정 프레임워크를 설계해 실행 가능한 전략으로 전환합니다.',
      },
      {
        title: 'AI 활용 제품화',
        text: 'AI를 활용해 전략 인사이트를 실제 사용할 수 있는 대시보드·도구로 빠르게 구현합니다. 설계부터 배포까지 전 과정을 직접 수행합니다.',
      },
      {
        title: '비즈니스 개발',
        text: '신규 사업 기회를 발굴하고, 시장성·실현 가능성·수익성을 정량 분석해 Go/No-Go 의사결정을 지원합니다.',
      },
      {
        title: '실행 중심 사고',
        text: '전략이 문서에 머무르지 않도록 추적·관리 체계를 구축하고, 팀 정렬과 병목 해소로 실행 완결성을 높입니다.',
      },
    ],
  },
  en: {
    langLabel: '한국어',
    nav: {
      about: 'About',
      projects: 'Strategy Projects',
      sideProjects: 'Side Projects',
      strengths: 'Strengths',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Strategy & Business Development',
      heading: 'Hi, I\'m Aiden — I build AI-powered tools for strategic decision-making',
      copy: 'Market analysis, business evaluation, strategy execution tracking — I design and ship AI-driven decision support tools that help teams plan smarter and move faster.',
      cta: 'See My Projects',
    },
    about: {
      title: 'About',
      p1: 'I build hands-on decision-support tools for strategy and business development, powered by AI. Competitor dashboards, new-business scorecards, execution trackers — I turn real business problems into products people actually use.',
      p2: 'My goal is simple:',
      p2bold: '"Give teams the tools they need to make better strategic decisions — and follow through."',
      p2suffix: '',
    },
    projects: {
      title: 'Strategy & BD Projects',
      desc: 'AI-powered decision support tools built for strategic planning and business development.',
    },
    sideProjects: {
      title: 'Side Projects',
      desc: 'End-to-end projects I planned, built, and operated from scratch.',
    },
    strengths: {
      title: 'Core Strengths',
      desc: 'I combine strategic thinking with hands-on AI execution to deliver business value.',
    },
    contact: {
      title: 'Contact',
      placeholder: 'Contact details coming soon.',
      note: 'Email / LinkedIn / GitHub links will be added here.',
    },
    footer: 'Built with hands-on AI-assisted product development.',
    featuredProjects: [
      {
        title: 'Market & Competitor Intelligence Dashboard',
        subtitle: 'Real-time market & competitor intelligence',
        details: [
          'Visualize market trends and competitor moves in real time',
          'Surface data-driven insights for strategic decisions',
          'Cut research time with AI-powered automated analysis',
        ],
        stack: ['Market Analysis', 'Data Visualization', 'AI Insights'],
      },
      {
        title: 'New Business Idea Evaluation Dashboard',
        subtitle: 'Quantitative new-business evaluation',
        details: [
          'Score ideas on market fit, feasibility, and profitability',
          'Drive objective decisions with a multi-dimensional scoring framework',
          'Auto-generate Go/No-Go reports powered by AI',
        ],
        stack: ['Business Evaluation', 'Scoring Framework', 'AI Analysis'],
      },
      {
        title: 'Strategic Action Tracker',
        subtitle: 'Strategy execution tracking system',
        details: [
          'Monitor strategic initiative progress in real time',
          'Visualize execution status through OKR & KPI integration',
          'Spot bottlenecks early and keep teams aligned on priorities',
        ],
        stack: ['Strategy Execution', 'OKR/KPI Tracking', 'Team Alignment'],
      },
    ],
    sideProjectsList: [
      {
        title: 'TOEIC Daily',
        subtitle: 'English learning Telegram bot',
        details: [
          'Designed learning flows for TOEIC, TOEIC Speaking, and OPIc',
          'Built AI voice assessment and level-testing features',
          'Operated as a live service with real users',
        ],
        stack: ['Telegram Bot', 'AI Voice Assessment', 'Service Operations'],
      },
      {
        title: 'Solo Survival',
        subtitle: 'Vampire Survivors-style web game',
        details: [
          'Designed game concept based on Solo Leveling universe',
          'Built combat and progression systems with Phaser + TypeScript',
          'Rapidly prototyped from idea to playable state',
        ],
        stack: ['Phaser', 'TypeScript', 'Web Game'],
      },
    ],
    strengthsList: [
      {
        title: 'Strategic Planning',
        text: 'Systematically analyze markets and competitive landscapes, then build data-driven decision frameworks that translate into actionable strategy.',
      },
      {
        title: 'AI-Driven Product Building',
        text: 'Turn strategic insights into usable dashboards and tools fast — owning the full cycle from design to deployment using AI.',
      },
      {
        title: 'Business Development',
        text: 'Source and evaluate new business opportunities, running quantitative feasibility and profitability analyses to support Go/No-Go decisions.',
      },
      {
        title: 'Execution-First Mindset',
        text: 'Build the tracking systems that keep strategy from staying on paper — driving team alignment and clearing bottlenecks to ensure follow-through.',
      },
    ],
  },
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') || 'ko';
    }
    return 'ko';
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko';
      localStorage.setItem('portfolio-lang', next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
