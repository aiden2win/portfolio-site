import { createContext, useContext, useState, useCallback, useEffect } from 'react';

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
      heading: 'AI로 비즈니스 협업 툴을 직접 만드는 기획자, Aiden',
      copy: '시장·경쟁 신호를 구조화하고, 그 인사이트를 바탕으로 사업 기회를 검토한 뒤, 실행 가능한 액션까지 연결하는 비즈니스 협업 툴을 직접 설계하고 만듭니다.',
      cta: '프로젝트 보기',
    },
    about: {
      title: '소개',
      p1: '비개발자 배경에서 출발했지만, 전략기획과 사업개발 실무에서 반복적으로 발생하는 문제를 AI와 함께 경량 제품 MVP 형태로 구조화하고 구현해보고 있습니다.',
      p2: '목표는 하나입니다.',
      p2bold: '"전략적 판단에 필요한 도구를 직접 만들어 팀의 실행력을 높이는 것."',
      p2suffix: '',
    },
    projects: {
      title: 'AI 기반 전략·사업개발 의사결정 지원 도구',
      desc: '전략기획과 사업개발 업무에서 반복적으로 발생하는 정보 수집, 기회 해석, 아이디어 검증, 실행 관리 과정을 AI 기반 MVP로 구조화한 프로젝트들입니다.',
      descSuffix: '각 프로젝트는 독립적으로 동작하지만, 함께 보면 시장 신호를 읽고 → 사업 기회를 해석하고 → 우선순위를 검증한 뒤 → 실행으로 연결하는 하나의 의사결정 흐름을 구성합니다.',
    },
    flow: [
      { step: '1단계', label: '시장·경쟁 신호 수집' },
      { step: '2단계', label: '사업 기회·아이디어 검증' },
      { step: '3단계', label: '우선순위 기반 실행 관리' },
    ],
    suiteFooter: '세 프로젝트는 각각 독립적인 MVP이지만, 함께 보면 전략기획/사업개발 조직이 실제로 수행하는 시장 탐색, 기회 판단, 실행 관리의 흐름을 제품 관점에서 연결한 도구 세트입니다.',
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
      intro: '편하게 연락 주세요.',
      email: '이메일',
      linkedin: '링크드인',
      github: '깃허브',
    },
    footer: '이 사이트는 AI를 활용한 제품 개발 경험을 바탕으로 제작되었습니다.',
    featuredProjects: [
      {
        title: 'Market & Competitor Intelligence Dashboard',
        subtitle: '시장·경쟁사 인텔리전스 대시보드',
        details: [
          '시장 및 경쟁사 업데이트를 구조화해 중요한 신호를 빠르게 포착',
          '전략기획/사업개발 팀이 어떤 기회를 볼지 판단할 수 있도록 인텔리전스 제공',
          'AI 자동 분석으로 리서치와 브리핑 준비 시간을 절감',
        ],
        stack: ['시장 분석', '데이터 시각화', 'AI 인사이트'],
      },
      {
        title: 'New Business Idea Evaluation Dashboard',
        subtitle: '신사업 아이디어 평가 대시보드',
        details: [
          '신사업 및 신규 아이디어를 시장성, 전략 적합도, 경쟁 강도, 실행 가능성 기준으로 비교·검증',
          '다차원 스코어링으로 왜 지금 이 기회를 봐야 하는지 우선순위화 지원',
          'AI 기반 Go/No-Go 리포트로 다음 판단을 빠르게 정리',
        ],
        stack: ['사업 평가', '스코어링 프레임워크', 'AI 분석'],
      },
      {
        title: 'Strategic Action Tracker',
        subtitle: '전략 실행 추적 대시보드',
        details: [
          '시장 신호와 아이디어 검토 결과를 실제 전략 액션으로 연결',
          '우선순위·리스크·다음 단계를 함께 관리하며 실행력을 높임',
          '팀 정렬 상태를 확인하고 병목 구간을 조기에 발견',
        ],
        stack: ['전략 실행', '우선순위 관리', '리스크 추적'],
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
      heading: 'Hi, I\'m Aiden — I build AI-powered strategic collaboration tools',
      copy: 'I design and ship AI-powered collaboration tools that turn market and competitor signals into evaluated business opportunities, then connect those decisions to clear execution.',
      cta: 'View Projects',
    },
    about: {
      title: 'About',
      p1: 'Although my professional background is not software engineering, I use AI-assisted product building to structure and prototype recurring problems from strategy planning and business development workflows.',
      p2: 'My goal is simple:',
      p2bold: '"Give teams the tools they need to make better strategic decisions — and follow through."',
      p2suffix: '',
    },
    projects: {
      title: 'AI-powered Strategy & Business Development Decision Support Tools',
      desc: 'A set of lightweight AI-assisted MVPs that structure recurring strategy and business development workflows: signal gathering, opportunity interpretation, idea validation, and execution management.',
      descSuffix: 'Each product works independently, but together they form one connected decision flow: read the market → interpret opportunities → validate priorities → execute.',
    },
    flow: [
      { step: 'Step 1', label: 'Capture market and competitor signals' },
      { step: 'Step 2', label: 'Validate business opportunities and ideas' },
      { step: 'Step 3', label: 'Manage execution by priority' },
    ],
    suiteFooter: 'While each project is an independent MVP, together they represent a productized toolkit for how strategy and business development teams actually work: exploring the market, judging opportunities, and driving execution.',
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
      intro: 'Feel free to reach out.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: 'Built with hands-on AI-assisted product development.',
    featuredProjects: [
      {
        title: 'Market & Competitor Intelligence Dashboard',
        subtitle: 'Strategy & BD intelligence dashboard',
        details: [
          'Structures market and competitor updates so teams can quickly identify important signals',
          'Provides actionable intelligence for planning and briefing workflows',
          'Reduces research time with AI-powered automated analysis',
        ],
        stack: ['Market Analysis', 'Data Visualization', 'AI Insights'],
      },
      {
        title: 'New Business Idea Evaluation Dashboard',
        subtitle: 'Business idea evaluation & prioritization',
        details: [
          'Compares and prioritizes new business opportunities based on market attractiveness, strategic fit, competitive intensity, and execution feasibility',
          'Drives objective decisions with a multi-dimensional scoring framework',
          'Auto-generates Go/No-Go reports powered by AI',
        ],
        stack: ['Business Evaluation', 'Scoring Framework', 'AI Analysis'],
      },
      {
        title: 'Strategic Action Tracker',
        subtitle: 'Execution-focused strategy dashboard',
        details: [
          'Turns market signals and idea evaluation outcomes into structured strategic actions',
          'Manages priority, risks, and next steps in one view',
          'Keeps teams aligned and surfaces bottlenecks early',
        ],
        stack: ['Strategy Execution', 'Priority Management', 'Risk Tracking'],
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

  const setLanguage = useCallback((next) => {
    setLang(next);
    localStorage.setItem('portfolio-lang', next);
    document.documentElement.lang = next;
  }, []);

  const toggleLang = useCallback(() => {
    setLanguage(lang === 'ko' ? 'en' : 'ko');
  }, [lang, setLanguage]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
