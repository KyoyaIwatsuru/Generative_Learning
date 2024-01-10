export const links = [
  { title: 'Home', href: '/' },
  { title: 'Text', href: '/text' },
  { title: 'Question', href: '/question' },
  { title: 'Explanation', href: '/explanation' },
  { title: 'Summary', href: '/summary' },
  { title: 'Finish', href: '/finish' },
];

export const page = [
  //Main Test1
  { work: '1', id: '1' },//
  { work: '1', id: '2' },//
  { work: '1', id: '3' },//
  { work: '1', id: '4' },//
  { work: '1', id: '5' },//
]

export const works = [
  {
    work_id: 1,

    title: 'Main Test1',

    work: [
      {
        id: 1,

        y_position: [260.0, 450.0, 590.0, 730.0, 870.0],

        paragraph: [
          {
            paragraph_id: 1,

            text: `
            In recent years, the exploration of space has led to the discovery of new planets, each harboring unique energy resources. Scientists have identified substances like crysillium on distant planets, which releases immense energy when activated. This substance is unlike anything found on Earth, offering a potential solution to our energy crisis. The extraction and transportation of crysillium are challenging, yet its promise for sustainable energy makes it a focus of interstellar exploration.`,

            question: `What is the main focus of the first paragraph regarding new energy resources?`,

            choices:`
            A) The high cost of transporting energy resources
            B) The discovery of crysillium on new planets as a sustainable energy source
            C) The immediate availability of new energy resources
            D) The environmental impact of extracting new energy resources
            `,

            answer_id: '2',

            answer: `答え B) The discovery of crysillium on new planets as a sustainable energy source`,

            explanation: `
            第1段落は、新しい惑星でのcrysilliumの発見と、持続可能なエネルギー源としてのその可能性に焦点を当てています（B）。エネルギー資源の輸送コスト（A）、新しいエネルギー資源の即時の利用可能性（C）、新しいエネルギー資源の抽出による環境への影響（D）については触れられていません。
            `,
          },

          {
            paragraph_id: 2,

            text: `
            Another breakthrough is the harnessing of energy from alternate dimensions. Researchers have developed a method to tap into these dimensions, accessing an energy source called etherium. Etherium possesses properties that defy our current understanding of physics, making it a highly efficient power source. This discovery has opened up new possibilities in energy generation, challenging our traditional concepts of energy resources.`,

            question: `What does the second paragraph primarily discuss about alternate dimensions?`,

            choices:`
            A) The difficulties in accessing alternate dimensions
            B) The discovery of etherium as an efficient energy source
            C) The replacement of all traditional energy sources
            D) The increase in space exploration costs
            `,

            answer_id: '2',

            answer: `答え B) The discovery of etherium as an efficient energy source`,

            explanation: `
            第2段落は、代替次元からのetheriumという効率的なエネルギー源の発見について説明しています（B）。代替次元へのアクセスの困難（A）、すべての伝統的なエネルギー源の置き換え（C）、宇宙探査コストの増加（D）は、この段落の主題ではありません。
            `,
          },

          {
            paragraph_id: 3,

            text: `
            The utilization of these new energy sources has significant implications for our environment. Unlike fossil fuels, crysillium and etherium produce minimal environmental impact. Their use has led to a drastic reduction in greenhouse gas emissions, helping combat climate change. This shift marks a critical step towards a more sustainable and ecologically responsible energy strategy.`,

            question: `How are new energy sources portrayed in terms of environmental impact in the third paragraph?`,

            choices:`
            A) As causing significant environmental damage
            B) As contributing to an increase in greenhouse gas emissions
            C) As having a minimal environmental impact compared to fossil fuels
            D) As completely eliminating the need for environmental conservation
            `,

            answer_id: '3',

            answer: `答え C) As having a minimal environmental impact compared to fossil fuels`,

            explanation: `
            第3段落では、新しいエネルギー源が化石燃料と比較して環境への影響が最小限であるとされています（C）。重大な環境被害を引き起こす（A）、温室効果ガスの排出を増加させる（B）、環境保全の必要性を完全になくす（D）という内容は含まれていません。
            `,
          },

          {
            paragraph_id: 4,

            text: `
            The geopolitical landscape has also been reshaped by these energy discoveries. Countries that were once reliant on fossil fuel imports are now turning towards these new energy sources, altering global power dynamics. This change has led to increased cooperation in space exploration and technology sharing, fostering a new era of international collaboration and peace.`,

            question: `What is the central theme of the fourth paragraph concerning global dynamics?`,

            choices:`
            A) The decline of international cooperation in energy development
            B) The geopolitical shift due to new energy sources
            C) The focus on maintaining traditional energy sources
            D) The decrease in technological advancements in energy
            `,

            answer_id: '2',

            answer: `答え B) The geopolitical shift due to new energy sources`,

            explanation: `
            第4段落は、新しいエネルギー源による地政学的な変化に焦点を当てています（B）。エネルギー開発における国際協力の衰退（A）、伝統的なエネルギー源の維持に焦点を当てる（C）、エネルギーにおける技術進歩の減少（D）は、この段落の主要なテーマではありません。
            `,
          },
        ],

        summary: {
          question: `Recent space exploration has unveiled __1__ on distant planets, a significant energy source, and the method to harness __2__ from __3__, offering sustainable solutions and reducing __4__ significantly.`,

          choices:`
          A) Crysillium, an unprecedented extraterrestrial energy substance
          B) Etherium, a revolutionary energy from alternate dimensions
          C) Greenhouse gas emissions, a major environmental concern
          D) Fossil fuels, traditional energy sources
          E) Solar radiation, a conventional form of energy
          F) Quantum particles, the basic units of the universe
          G) Technological advancement, a key factor in space exploration
          H) Alternate dimensions, a new frontier in energy research
          `,

          answer_ids: ['1', '2', '8', '3'],

          answers: `
          1. A) Crysillium, an unprecedented extraterrestrial energy substance
          2. B) Etherium, a revolutionary energy from alternate dimensions
          3. H) Alternate dimensions, a new frontier in energy research
          4. C) Greenhouse gas emissions, a major environmental concern
          `,

          explanation: `
          この問題の解答には、長文の内容を正確に理解することが必須です。1番目の空欄には、新しい惑星で見つかった前例のないエネルギー物質Crysillium（A）が、2番目には、革命的な代替次元からのエネルギー源Etherium（B）が、3番目には、エネルギー研究の新境界である代替次元（H）が、そして4番目には、主要な環境上の懸念事項である温室効果ガスの排出（C）が適切です。他の選択肢（D, E, F, G）は、この文脈に合わないか、長文で扱われていない要素です。
          `,
        },
      },

      {
        id: 2,

        y_position: [260.0, 450.0, 590.0, 730.0, 870.0],

        paragraph: [
          {
            paragraph_id: 1,

            text: `
            In the technologically advanced schools of the future, classrooms are equipped with interactive digital boards and augmented reality (AR) systems. These tools enable students to visualize complex scientific concepts and historical events in a three-dimensional space. Personalized learning is enhanced by AI tutors that adapt to each student's learning style, providing tailored guidance. This technology-rich environment fosters a deeper understanding and engagement in subjects, transforming the traditional learning experience into a dynamic and interactive one.`,

            question: `What characterizes the classrooms in future technologically advanced schools?`,

            choices:`
            A) Exclusive use of traditional blackboards and textbooks  
            B) Interactive digital boards and AR systems with AI tutors  
            C) Sole reliance on physical experimentation for learning  
            D) Focus on lecture-based teaching without technological aids
            `,

            answer_id: '2',

            answer: `答え B) Interactive digital boards and AR systems with AI tutors`,

            explanation: `
            未来の学校の教室は、インタラクティブなデジタルボード、ARシステム、AIチューターが特徴です。A（伝統的な黒板と教科書のみを使用する）、C（学習のために実験にのみ依存する）、D（技術支援なしで講義ベースの教授法に焦点を当てる）はテキストの内容と矛盾します。
            `,
          },

          {
            paragraph_id: 2,

            text: `
            Homework in future schools is designed to be more engaging and personalized. AI algorithms analyze each student's performance, customizing assignments to target individual learning needs and areas of improvement. This approach ensures that homework is not only relevant but also supports the overall learning objectives. Additionally, collaborative online platforms encourage students to work together on projects, promoting teamwork and enhancing problem-solving skills.`,

            question: `How is homework managed in future schools?`,

            choices:`
            A) Through standardized, one-size-fits-all assignments  
            B) Elimination of homework in favor of in-class activities only  
            C) AI-customized assignments with collaborative online platforms  
            D) Emphasis on individual projects without peer interaction
            `,

            answer_id: '3',

            answer: `答え C) AI-customized assignments with collaborative online platforms`,

            explanation: `
            未来の学校では、AIによってカスタマイズされた宿題と協力的なオンラインプラットフォームが使用されます。A（標準化された、全員に合う課題）、B（授業内の活動のみに宿題を置き換える）、D（ピアとの相互作用なしに個人プロジェクトに重点を置く）は文脈に合いません。
            `,
          },

          {
            paragraph_id: 3,

            text: `
            Communication between teachers and students is greatly enhanced by technology. Teachers utilize data analytics to monitor each student's progress, allowing for tailored instruction and timely intervention. This data-driven approach ensures that every student's educational needs are met. Additionally, online communication platforms facilitate continuous interaction between teachers and students, further strengthening the learning process.`,

            question: `What has improved teacher-student communication in future schools?`,

            choices:`
            A) Limiting teacher feedback to written reports only  
            B) Utilizing data analytics for tailored instruction  
            C) Restricting communication to in-person meetings  
            D) Decreasing teacher involvement in student learning
            `,

            answer_id: '2',

            answer: `答え B) Utilizing data analytics for tailored instruction`,

            explanation: `
            教師と生徒間のコミュニケーションは、データ分析を活用した個別指導によって改善されます。A（書面による報告のみにフィードバックを限定する）、C（対面での会話にコミュニケーションを制限する）、D（生徒の学習における教師の関与を減らす）は適切ではありません。
            `,
          },

          {
            paragraph_id: 4,

            text: `
            The physical environment of future schools is designed with the well-being of students in mind. Classrooms are open and adaptable, promoting a collaborative and inclusive atmosphere. Natural elements, like plants and natural lighting, are integrated to create a calming and healthy learning environment. The combination of technology and nature in these spaces contributes to a holistic educational experience, balancing academic learning with emotional and physical well-being.`,

            question: `How is the physical environment of future schools designed?`,

            choices:`
            A) Traditional closed-off classrooms with minimal technology  
            B) Open and adaptable spaces with integration of natural elements  
            C) Complete focus on digital technology, excluding natural elements  
            D) Individual study booths to promote solitary learning
            `,

            answer_id: '2',

            answer: `答え B) Open and adaptable spaces with integration of natural elements`,

            explanation: `
            未来の学校の物理的環境は、オープンで柔軟なスペースと自然要素の統合によって設計されています。A（最小限の技術を備えた伝統的な閉じた教室）、C（自然要素を除外してデジタル技術に完全に焦点を当てる）、D（孤独な学習を促進するための個別学習ブース）は、テキストの内容から外れています。
            `,
          },
        ],

        summary: {
          question: `Recent space exploration has unveiled __1__ on distant planets, a significant energy source, and the method to harness __2__ from __3__, offering sustainable solutions and reducing __4__ significantly.`,

          choices:`
          A) Crysillium, an unprecedented extraterrestrial energy substance
          B) Etherium, a revolutionary energy from alternate dimensions
          C) Greenhouse gas emissions, a major environmental concern
          D) Fossil fuels, traditional energy sources
          E) Solar radiation, a conventional form of energy
          F) Quantum particles, the basic units of the universe
          G) Technological advancement, a key factor in space exploration
          H) Alternate dimensions, a new frontier in energy research
          `,

          answer_ids: ['1', '2', '8', '3'],

          answers: `
          1. A) Crysillium, an unprecedented extraterrestrial energy substance
          2. B) Etherium, a revolutionary energy from alternate dimensions
          3. H) Alternate dimensions, a new frontier in energy research
          4. C) Greenhouse gas emissions, a major environmental concern
          `,

          explanation: `
          この問題の解答には、長文の内容を正確に理解することが必須です。1番目の空欄には、新しい惑星で見つかった前例のないエネルギー物質Crysillium（A）が、2番目には、革命的な代替次元からのエネルギー源Etherium（B）が、3番目には、エネルギー研究の新境界である代替次元（H）が、そして4番目には、主要な環境上の懸念事項である温室効果ガスの排出（C）が適切です。他の選択肢（D, E, F, G）は、この文脈に合わないか、長文で扱われていない要素です。
          `,
        },
      },

      {
        id: 3,

        y_position: [260.0, 450.0, 590.0, 730.0, 870.0],

        paragraph: [
          {
            paragraph_id: 1,

            text: `
            In the future, schools are equipped with advanced technology. Each classroom features interactive holograms for dynamic learning. Students use tablets instead of textbooks, accessing a vast digital library. Lessons are more engaging, with virtual simulations bringing historical events to life. This immersive technology makes learning both effective and enjoyable.`,

            question: `What is a key feature of classrooms in future schools?`,

            choices:`
            A) Traditional teaching methods  
            B) Interactive holograms and digital resources  
            C) Mandatory physical education  
            D) Exclusively lecture-based learning
            `,

            answer_id: '2',

            answer: `答え B) Interactive holograms and digital resources`,

            explanation: `
            未来の学校の教室の特徴として、インタラクティブなホログラムとデジタルリソースが挙げられています。これにより、A（従来の教授法）、C（義務的な体育）、D（講義ベースの学習のみ）は不正解です。
            `,
          },

          {
            paragraph_id: 2,

            text: `
            Homework in these futuristic schools is personalized. AI algorithms analyze each student's learning style, tailoring homework to their needs. This approach ensures that each student is challenged appropriately, enhancing their understanding. Moreover, virtual tutors provide instant feedback, helping students to learn from their mistakes in real time.`,

            question: `How is homework managed in future schools?`,

            choices:`
            A) It is completely eliminated  
            B) Standardized for all students  
            C) Personalized by AI algorithms  
            D) Focused only on science subjects
            `,

            answer_id: '3',

            answer: `答え C) Personalized by AI algorithms`,

            explanation: `
            未来の学校では、AIアルゴリズムによって宿題が個々の学生に合わせてカスタマイズされています。したがって、A（完全に廃止されている）、B（すべての生徒に標準化されている）、D（科学科目にのみ焦点を当てている）は不適切です。
            `,
          },

          {
            paragraph_id: 3,

            text: `
            Communication between teachers and students has been revolutionized. Teachers use real-time data analytics to track student progress, enabling them to offer targeted support. This system allows for a more individualized teaching approach, addressing the specific needs of each student and enhancing the overall educational experience.`,

            question: `What has improved teacher-student communication in future schools?`,

            choices:`
            A) Decreased use of technology  
            B) Real-time data analytics  
            C) Teachers no longer give direct feedback  
            D) Sole reliance on textbooks
            `,

            answer_id: '2',

            answer: `答え B) Real-time data analytics`,

            explanation: `
            先生と生徒間のコミュニケーションは、リアルタイムデータ分析によって改善されています。これにより、A（技術の使用の減少）、C（先生からの直接的なフィードバックのないこと）、D（教科書にのみ依存すること）は不正解となります。
            `,
          },

          {
            paragraph_id: 4,

            text: `
            The school's environment is designed to foster collaboration and creativity. Classrooms are flexible spaces, easily reconfigured for different activities. There are also areas for relaxation and social interaction, acknowledging the importance of mental well-being in education. The emphasis is on creating a holistic learning environment.`,

            question: `What aspect of the school environment is emphasized in future schools?`,

            choices:`
            A) Strict discipline and structure  
            B) Flexibility and mental well-being  
            C) Isolation for focused study  
            D) Uniformity in classroom design
            `,

            answer_id: '2',

            answer: `答え B) Flexibility and mental well-being`,

            explanation: `
            未来の学校の環境では、柔軟性と精神的な健康が重視されています。従って、A（厳格な規律と構造）、C（集中的な学習のための隔離）、D（教室デザインの統一性）は文脈に合わないため、不正解です。
            `,
          },
        ],

        summary: {
          question: `Recent space exploration has unveiled __1__ on distant planets, a significant energy source, and the method to harness __2__ from __3__, offering sustainable solutions and reducing __4__ significantly.`,

          choices:`
          A) Crysillium, an unprecedented extraterrestrial energy substance
          B) Etherium, a revolutionary energy from alternate dimensions
          C) Greenhouse gas emissions, a major environmental concern
          D) Fossil fuels, traditional energy sources
          E) Solar radiation, a conventional form of energy
          F) Quantum particles, the basic units of the universe
          G) Technological advancement, a key factor in space exploration
          H) Alternate dimensions, a new frontier in energy research
          `,

          answer_ids: ['1', '2', '8', '3'],

          answers: `
          1. A) Crysillium, an unprecedented extraterrestrial energy substance
          2. B) Etherium, a revolutionary energy from alternate dimensions
          3. H) Alternate dimensions, a new frontier in energy research
          4. C) Greenhouse gas emissions, a major environmental concern
          `,

          explanation: `
          この問題の解答には、長文の内容を正確に理解することが必須です。1番目の空欄には、新しい惑星で見つかった前例のないエネルギー物質Crysillium（A）が、2番目には、革命的な代替次元からのエネルギー源Etherium（B）が、3番目には、エネルギー研究の新境界である代替次元（H）が、そして4番目には、主要な環境上の懸念事項である温室効果ガスの排出（C）が適切です。他の選択肢（D, E, F, G）は、この文脈に合わないか、長文で扱われていない要素です。
          `,
        },
      },
    ],
  },
]