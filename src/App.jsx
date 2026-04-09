const projects = [
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
    title: 'JLPT Daily',
    subtitle: '일본어 학습 텔레그램 봇',
    details: [
      'JLPT + OPIc 일본어 통합 학습 경험 기획',
      '500개 단어 + 300개 표현 커리큘럼 구성',
      '학습 지속을 위한 반복 학습 흐름 설계',
    ],
    stack: ['Telegram Bot', 'JLPT', 'OPIc 일본어'],
  },
  {
    title: 'TOPIK Daily',
    subtitle: '한국어 학습 텔레그램 봇',
    details: [
      'TOPIK + 회화를 연결한 단계형 학습 구조',
      '영어·일본어·중국어 다국어 UI 지원',
      '초급 학습자 온보딩 중심 사용자 여정 설계',
    ],
    stack: ['Telegram Bot', '다국어 UI', 'TOPIK'],
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
    title: '기획력',
    text: '학습자 행동을 기준으로 문제를 정의하고, 서비스 플로우를 문서화해 빠르게 실행 가능한 형태로 전환합니다.',
  },
  {
    title: 'AI 활용',
    text: '코딩 경험이 제한된 환경에서도 AI 도구를 활용해 설계, 구현, 개선 사이클을 짧게 만듭니다.',
  },
  {
    title: '실행력',
    text: '아이디어 단계에서 멈추지 않고 실제 서비스 출시까지 끌고 가며, 필요한 기능을 우선순위 중심으로 완성합니다.',
  },
  {
    title: '운영 경험',
    text: '출시 후 사용자 반응을 기반으로 콘텐츠와 기능을 반복 개선하며, 운영 관점에서 제품을 안정화합니다.',
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
            <a href="#projects">프로젝트</a>
            <a href="#strengths">강점</a>
            <a href="#contact">연락처</a>
          </div>
        </nav>
        <div className="hero-content reveal reveal-1">
          <p className="eyebrow">Career Transition Portfolio</p>
          <h1>비개발자 출발점에서 AI를 활용해 제품을 끝까지 만드는 사람, Aiden</h1>
          <p className="hero-copy">
            기획부터 개발, 운영까지 직접 연결하며 교육형 디지털 제품을 실제 사용자에게 전달해왔습니다.
            복잡한 기술보다 문제 해결과 실행 속도를 중시합니다.
          </p>
          <a className="cta" href="#projects">
            프로젝트 보기
          </a>
        </div>
      </header>

      <main>
        <section id="about" className="section card reveal reveal-2">
          <h2>About</h2>
          <p>
            저는 커리어 전환 과정에서 AI 도구를 적극 활용해 제품 제작 역량을 확장해왔습니다.
            단순한 아이디어 제안이 아니라, 사용자 경험을 설계하고 MVP를 만들고 운영 지표를 확인하며 개선하는
            전 과정을 직접 수행합니다.
          </p>
          <p>
            목표는 명확합니다. <strong>"필요한 제품을 빠르게 만들어, 실제로 쓰이게 하는 것"</strong>입니다.
          </p>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal reveal-1">
            <h2>Projects</h2>
            <p>학습 서비스와 게임 프로젝트를 통해 AI 기반 제품 개발/운영 역량을 검증해왔습니다.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
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
            <p>기획자 관점과 실행자 관점을 함께 가져가며 프로젝트 완성도를 높입니다.</p>
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
    </div>
  );
}

export default App;
