import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  ko: {
    nav: {
      about: '소개',
      projects: '전략 프로젝트',
      sideProjects: '기타 프로젝트',
      strengths: '강점',
      contact: '연락처',
    },
    hero: {
      eyebrow: 'Strategy & Business Development',
      heading: 'AI로 전략 의사결정 도구를 직접 만드는 기획자, Aiden',
      copy: '시장 분석, 사업 평가, 전략 실행 추적까지 — 전략 기획과 비즈니스 개발에 필요한 의사결정 지원 도구를 AI를 활용해 직접 설계하고 구축합니다. 복잡한 판단을 데이터 기반으로 단순화하는 실용적 제품을 만듭니다.',
      cta: '전략 프로젝트 보기',
    },
    about: {
      title: 'About',
      p1: '저는 전략 기획 및 비즈니스 개발 분야에서 AI를 활용해 실무에 바로 쓸 수 있는 의사결정 지원 도구를 만드는 사람입니다. 경쟁사 분석, 신규 사업 평가, 전략 과제 관리 등 실제 업무 현장의 문제를 대시보드와 트래커로 해결합니다.',
      p2: '목표는 명확합니다.',
      p2bold: '"전략적 판단에 필요한 도구를 직접 만들어, 팀의 실행력을 높이는 것"',
      p2suffix: '입니다.',
    },
    projects: {
      title: 'Strategy & BD Projects',
      desc: '전략 기획과 비즈니스 개발 실무를 위한 AI 기반 의사결정 지원 도구입니다.',
    },
    sideProjects: {
      title: 'Other Projects',
      desc: 'AI 활용 제품 기획·개발·운영 역량을 보여주는 부가 프로젝트입니다.',
    },
    strengths: {
      title: 'Strengths',
      desc: '전략적 사고와 AI 실행력을 결합해 비즈니스 가치를 만듭니다.',
    },
    contact: {
      title: 'Contact',
      placeholder: '연락처 섹션은 추후 업데이트 예정입니다.',
      note: 'Email / LinkedIn / GitHub 링크를 이곳에 추가하세요.',
    },
    footer: '이 사이트는 AI 보조 제품 제작 경험으로 만들어졌습니다.',
    featuredProjects: [
      {
        title: 'Market & Competitor Intelligence Dashboard',
        subtitle: '시장·경쟁사 인텔리전스 대시보드',
        details: [
          '실시간 시장 트렌드 및 경쟁사 동향 시각화',
          '전략 의사결정을 위한 데이터 기반 인사이트 제공',
          'AI 기반 자동 분석으로 리서치 시간 단축',
        ],
        stack: ['Market Analysis', 'Data Visualization', 'AI Insights'],
      },
      {
        title: 'New Business Idea Evaluation Dashboard',
        subtitle: '신규 사업 아이디어 평가 대시보드',
        details: [
          '사업 아이디어의 시장성·실현가능성·수익성 정량 평가',
          '다차원 스코어링 프레임워크로 객관적 의사결정 지원',
          'AI 분석 기반 Go/No-Go 판단 리포트 자동 생성',
        ],
        stack: ['Business Evaluation', 'Scoring Framework', 'AI Analysis'],
      },
      {
        title: 'Strategic Action Tracker',
        subtitle: '전략 실행 추적 시스템',
        details: [
          '전략 과제별 진행 현황 실시간 모니터링',
          'OKR·KPI 연동 기반 실행력 가시화',
          '팀 단위 전략 정렬 및 병목 구간 조기 식별',
        ],
        stack: ['Strategy Execution', 'OKR/KPI Tracking', 'Team Alignment'],
      },
    ],
    sideProjectsList: [
      {
        title: 'TOEIC Daily',
        subtitle: '영어 학습 텔레그램 봇',
        details: [
          '토익·토스·오픽 학습 플로우 설계',
          'AI 음성 평가와 레벨테스트 기능 구축',
          '실사용자 대상 서비스 운영 경험 보유',
        ],
        stack: ['Telegram Bot', 'AI 음성 평가', '서비스 운영'],
      },
      {
        title: 'Solo Survival',
        subtitle: '뱀서라이크 웹게임',
        details: [
          '나혼자만 레벨업 세계관 기반 게임 기획',
          'Phaser + TypeScript로 전투·성장 시스템 구현',
          '아이디어를 빠르게 프로토타이핑해 플레이 가능 상태로 전환',
        ],
        stack: ['Phaser', 'TypeScript', 'Web Game'],
      },
    ],
    strengthsList: [
      {
        title: '전략 기획',
        text: '시장 분석과 경쟁 환경을 체계적으로 파악하고, 데이터 기반 의사결정 프레임워크를 설계하여 실행 가능한 전략으로 전환합니다.',
      },
      {
        title: 'AI 활용 제품화',
        text: 'AI 도구를 활용해 전략 인사이트를 실제 사용 가능한 대시보드·도구로 빠르게 구현하며, 설계부터 배포까지 전 과정을 직접 수행합니다.',
      },
      {
        title: '비즈니스 개발',
        text: '신규 사업 기회를 발굴·평가하고, 실현 가능성과 수익성을 정량적으로 분석하여 Go/No-Go 의사결정을 지원합니다.',
      },
      {
        title: '실행 중심 사고',
        text: '전략이 문서에 머무르지 않도록 추적·관리 체계를 구축하고, 팀 정렬과 병목 해소를 통해 실행 완결성을 높입니다.',
      },
    ],
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Strategy Projects',
      sideProjects: 'Other Projects',
      strengths: 'Strengths',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Strategy & Business Development',
      heading: 'Aiden — a strategist who builds AI-powered decision-making tools',
      copy: 'From market analysis and business evaluation to strategy execution tracking — I design and build AI-driven decision support tools for strategic planning and business development. I turn complex judgments into practical, data-driven products.',
      cta: 'View Strategy Projects',
    },
    about: {
      title: 'About',
      p1: 'I build practical decision-support tools for strategy and business development using AI. From competitor analysis and new business evaluation to strategic initiative management, I solve real-world business challenges with dashboards and trackers.',
      p2: 'My goal is clear:',
      p2bold: '"Build the tools teams need to make strategic decisions — and drive execution."',
      p2suffix: '',
    },
    projects: {
      title: 'Strategy & BD Projects',
      desc: 'AI-powered decision support tools designed for strategic planning and business development.',
    },
    sideProjects: {
      title: 'Other Projects',
      desc: 'Side projects showcasing end-to-end product planning, development, and operations with AI.',
    },
    strengths: {
      title: 'Strengths',
      desc: 'Combining strategic thinking with AI execution to create business value.',
    },
    contact: {
      title: 'Contact',
      placeholder: 'Contact section coming soon.',
      note: 'Email / LinkedIn / GitHub links will be added here.',
    },
    footer: 'This site was built through hands-on AI-assisted product development.',
    featuredProjects: [
      {
        title: 'Market & Competitor Intelligence Dashboard',
        subtitle: 'Real-time market & competitor intelligence',
        details: [
          'Visualize market trends and competitor movements in real time',
          'Deliver data-driven insights for strategic decision-making',
          'Reduce research time with AI-powered automated analysis',
        ],
        stack: ['Market Analysis', 'Data Visualization', 'AI Insights'],
      },
      {
        title: 'New Business Idea Evaluation Dashboard',
        subtitle: 'Quantitative new business evaluation',
        details: [
          'Score business ideas on market fit, feasibility, and profitability',
          'Support objective decisions with a multi-dimensional scoring framework',
          'Auto-generate Go/No-Go assessment reports powered by AI',
        ],
        stack: ['Business Evaluation', 'Scoring Framework', 'AI Analysis'],
      },
      {
        title: 'Strategic Action Tracker',
        subtitle: 'Strategy execution tracking system',
        details: [
          'Monitor progress of strategic initiatives in real time',
          'Visualize execution through OKR and KPI integration',
          'Identify bottlenecks early and align teams on strategic priorities',
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
          'Built AI voice assessment and level testing features',
          'Operated as a live service with real users',
        ],
        stack: ['Telegram Bot', 'AI Voice Assessment', 'Service Operations'],
      },
      {
        title: 'Solo Survival',
        subtitle: 'Vampire Survivors-style web game',
        details: [
          'Planned game design based on Solo Leveling universe',
          'Implemented combat and progression systems with Phaser + TypeScript',
          'Rapidly prototyped from concept to playable state',
        ],
        stack: ['Phaser', 'TypeScript', 'Web Game'],
      },
    ],
    strengthsList: [
      {
        title: 'Strategic Planning',
        text: 'Systematically analyze markets and competitive landscapes, then design data-driven decision frameworks that translate into actionable strategies.',
      },
      {
        title: 'AI-Driven Product Building',
        text: 'Leverage AI tools to rapidly turn strategic insights into usable dashboards and tools — owning the entire process from design to deployment.',
      },
      {
        title: 'Business Development',
        text: 'Identify and evaluate new business opportunities, quantitatively analyzing feasibility and profitability to support Go/No-Go decisions.',
      },
      {
        title: 'Execution-First Mindset',
        text: 'Build tracking and management systems that keep strategy from staying on paper — driving team alignment and removing bottlenecks to ensure follow-through.',
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
