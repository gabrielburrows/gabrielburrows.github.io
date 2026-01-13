export const translations = {
  en: {
    nav: { 
      about: "About", 
      education: "Education", 
      projects: "Projects", 
      stack: "Stack", 
      contact: "Contact" 
    },
    hero: {
      greeting: "Hi, I'm Gabriel",
      titles: ["a Software Engineer.", "a Full Stack Developer.", "a Problem Solver."],
    },
    about: {
      title: "About Me",
      description: "I am a passionate developer dedicated to building scalable and user-friendly web applications. I thrive on solving complex problems and learning new technologies.",
      resumeBtn: "Download Resume",
    },
    education: {
      title: "Education",
      degree: "Bachelor's of Computer Science with Specialization in Biomedical Computing",
      uni: "Queen's University",
      date: "September 2021 – December 2025",
      location: "Kingston, Canada",
      desc: "Focused on Software Engineering within the Biomedical Computing specialization. Graduated with Honors.",
    },
    stack: {
      title: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
    },
    projects: {
      title: "Selected Projects",
      view: "View Project",
      items: {
        dbstargetlocator: {
          name: "DBS Therapy Target Locator Module",
          date: "Sep 2025 – Nov 2025",
          location: "Kingston, Canada",
          description: "Developed an automated 3D Slicer module for personalized DBS targeting. Engineered a Python pipeline for 4D fMRI registration and Z-score analysis, identifying high-value neural regions in 75% of test cases. Improved surgical planning accuracy for Treatment-Resistant Depression through Otsu’s thresholding and MNI152 template registration.",
        },
        housingmarket: {
          name: "Ames Housing: Predictive Modeling",
          date: "Sep 2025 – Nov 2025",
          location: "Kingston, Canada",
          description: "Achieved a Kaggle score of 0.13392 (Top 44%) by engineering domain-specific aggregate features. Implemented a Scikit-Learn pipeline with degree-2 polynomial interactions and automated hyperparameter tuning via GridSearchCV, increasing R² from 0.74 to 0.82 while minimizing predictive bias.",
        },
        portfolio: {
          name: "Portfolio Website",
          date: "January 2026",
          location: "Kingston, Canada",
          description: "A high-performance personal portfolio built with Next.js 15, Tailwind CSS, and Framer Motion. Features multi-language support (EN/JP), dynamic theme switching, and optimized responsive design.",
        },
      },
    },
    contact: {
      title: "Contact",
      location: "Kingston, Canada",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      captcha: "Security Verification",
      send: "Send Message",
      success: "Message Sent!",
      error: "Please fill all fields correctly.",
      captchaError: "Please complete the reCAPTCHA verification.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  jp: {
    nav: { 
      about: "私について", 
      education: "学歴", 
      projects: "プロジェクト", 
      stack: "技術", 
      contact: "連絡先" 
    },
    hero: {
      greeting: "こんにちは、ガブリエルです。",
      titles: [
        "ソフトウェアエンジニアです。", 
        "フルスタック開発者です。", 
        "問題解決者です。"
      ],
    },
    about: {
      title: "私について",
      description: "スケーラブルで使いやすいWebアプリケーションの構築に専念する情熱的な開発者です。複雑な問題の解決と新しい技術の習得にやりがいを感じています。",
      resumeBtn: "履歴書をダウンロード",
    },
    education: {
      title: "学歴",
      degree: "コンピュータサイエンス学士（生物医学コンピューティング専攻）",
      uni: "クインズ大学",
      date: "2021年9月 – 2025年12月",
      location: "カナダ、キングストン",
      desc: "生物医学コンピューティング専攻においてソフトウェア工学に注力。優等で卒業。",
    },
    stack: {
      title: "技術スタック",
      frontend: "フロントエンド",
      backend: "バックエンド",
      database: "データベース",
      tools: "ツール",
    },
    projects: {
      title: "プロジェクト",
      view: "詳細を見る",
      items: {
        dbstargetlocator: {
          name: "DBS治療ターゲットロケーター",
          date: "2025年9月 – 11月",
          location: "カナダ、キングストン",
          description: "個別化されたDBSターゲット選定のための3D Slicerモジュールを開発。4D fMRIレジストレーションとZスコア統計分析用Pythonパイプラインを構築し、テストケースの75%で重要神経領域を特定。大津の二値化とMNI152テンプレート登録により、難治性うつの手術計画精度を向上させました。",
        },
        housingmarket: {
          name: "住宅市場予測モデリング",
          date: "2025年9月 – 11月",
          location: "カナダ、キングストン",
          description: "ドメイン固有の特徴量エンジニアリングにより、Kaggleコンペでスコア0.13392（上位44%）を達成。Scikit-Learnパイプラインを用いて多項式交互作用とGridSearchCVによるハイパーパラメータ調整を実装し、R²値を0.74から0.82に向上させ、予測バイアスを最小限に抑えました。",
        },
        portfolio: {
          name: "ポートフォリオサイト",
          date: "2026年1月",
          location: "カナダ、キングストン",
          description: "Next.js 15、Tailwind CSS、Framer Motionで構築された高性能ポートフォリオ。日英多言語対応、動的テーマ切り替え、レスポンシブデザインの最適化を実装しています。",
        },
      },
    },
    contact: {
      title: "お問い合わせ",
      location: "カナダ、キングストン",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      captcha: "セキュリティ認証",
      send: "送信",
      success: "送信しました！",
      error: "すべての項目を正しく入力してください。",
      captchaError: "reCAPTCHA 認証を完了してください。",
    },
    footer: {
      rights: "全著作権所有。",
    },
  },
};