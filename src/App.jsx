const featuredProjects = [
  {
    title: 'Market & Competitor Intelligence Dashboard',
    subtitle: '시장·경쟁사 인텔리전스 대시보드',
    details: [
      '실시간 시장 트렌드 및 경쟁사 동향 시각화',
      '전략 의사결정을 위한 데이터 기반 인사이트 제공',
      'AI 기반 자동 분석으로 리서치 시간 단축',
    ],
    stack: ['Market Analysis', 'Data Visualization', 'AI Insights'],
    github: 'https://github.com/aiden2win/competitor-intelligence-dashboard',
    demo: 'https://competitor-intelligence-dashboard-lake.vercel.app/',
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
    github: 'https://github.com/aiden2win/new-business-idea-evaluation-dashboard',
    demo: 'https://new-business-idea-evaluation-dashbo.vercel.app/',
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
    github: 'https://github.com/aiden2win/strategic-action-tracker',
    demo: 'https://strategic-action-tracker.vercel.app/',
  },
];

const sideProjects = [
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
];

const strengths = [
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
];

function App() {
  return (
    <div className="site">
      <header className="hero section">
        <nav className="top-nav">
          <span className="brand">Aiden Portfolio</span>
          <div className="nav-links">
            <a href="#about">소개</a>
            <a href="#projects">전략 프로젝트</a>
            <a href="#side-projects">기타 프로젝트</a>
            <a href="#strengths">강점</a>
            <a href="#contact">연락처</a>
          </div>
        </nav>
        <div className="hero-content reveal reveal-1">
          <p className="eyebrow">Strategy & Business Development</p>
          <h1>AI로 전략 의사결정 도구를 직접 만드는 기획자, Aiden</h1>
          <p className="hero-copy">
            시장 분석, 사업 평가, 전략 실행 추적까지 — 전략 기획과 비즈니스 개발에 필요한
            의사결정 지원 도구를 AI를 활용해 직접 설계하고 구축합니다.
            복잡한 판단을 데이터 기반으로 단순화하는 실용적 제품을 만듭니다.
          </p>
          <a className="cta" href="#projects">
            전략 프로젝트 보기
          </a>
        </div>
      </header>

      <main>
        <section id="about" className="section card reveal reveal-2">
          <h2>About</h2>
          <p>
            저는 전략 기획 및 비즈니스 개발 분야에서 AI를 활용해 실무에 바로 쓸 수 있는
            의사결정 지원 도구를 만드는 사람입니다.
            경쟁사 분석, 신규 사업 평가, 전략 과제 관리 등 실제 업무 현장의 문제를
            대시보드와 트래커로 해결합니다.
          </p>
          <p>
            목표는 명확합니다. <strong>"전략적 판단에 필요한 도구를 직접 만들어, 팀의 실행력을 높이는 것"</strong>입니다.
          </p>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal reveal-1">
            <h2>Strategy & BD Projects</h2>
            <p>전략 기획과 비즈니스 개발 실무를 위한 AI 기반 의사결정 지원 도구입니다.</p>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className={`project-card featured-card reveal reveal-${(index % 3) + 1}`}>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="btn btn-demo" href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a className="btn btn-github" href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="side-projects" className="section">
          <div className="section-head reveal reveal-1">
            <h2>Other Projects</h2>
            <p>AI 활용 제품 기획·개발·운영 역량을 보여주는 부가 프로젝트입니다.</p>
          </div>
          <div className="project-grid">
            {sideProjects.map((project, index) => (
              <article key={project.title} className={`project-card reveal reveal-${(index % 3) + 1}`}>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="strengths" className="section card">
          <div className="section-head reveal reveal-1">
            <h2>Strengths</h2>
            <p>전략적 사고와 AI 실행력을 결합해 비즈니스 가치를 만듭니다.</p>
          </div>
          <div className="strength-grid">
            {strengths.map((strength, index) => (
              <article key={strength.title} className={`strength-item reveal reveal-${(index % 3) + 1}`}>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section card contact reveal reveal-2">
          <h2>Contact</h2>
          <p>연락처 섹션은 추후 업데이트 예정입니다.</p>
          <p className="contact-placeholder">Email / LinkedIn / GitHub 링크를 이곳에 추가하세요.</p>
        </section>
      </main>
      <footer className="site-footer">
        <p>이 사이트는 AI 보조 제품 제작 경험으로 만들어졌습니다.</p>
      </footer>
    </div>
  );
}

export default App;
