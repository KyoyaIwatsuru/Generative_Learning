export const links = [
  { title: 'Home', href: '/' },
  { title: 'Text', href: '/text' },
  { title: 'Question', href: '/question' },
  { title: 'Explanation', href: '/explanation' },
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

        text: `
        In a technologically advanced future school, classrooms are transformed into dynamic learning environments. Each student interacts with lessons through augmented reality (AR) and virtual reality (VR) systems, making learning an immersive experience. Interactive whiteboards replace traditional blackboards, enabling real-time collaboration and creativity. These tools bring abstract concepts to life, enhancing students' understanding and engagement.

        Homework is no longer a one-size-fits-all task. Customizable AI algorithms create personalized assignments, adapting to each student's learning pace and style. This technology identifies areas where students need more practice, ensuring that homework is both challenging and relevant. It's a significant shift from the traditional approach, offering a more individualized learning experience.

        Communication between teachers and students in this future setting is more efficient and effective. Teachers use data-driven insights to tailor their teaching strategies to each student's needs. This approach allows for timely intervention and support, bridging gaps in understanding before they widen. The use of technology in communication fosters a more inclusive and responsive educational environment.

        The school's physical environment is designed to encourage collaboration and innovation. Open-plan learning spaces replace traditional classrooms, promoting interaction and group learning. Natural lighting and green spaces are integrated to enhance student well-being. Technology and nature blend to create a learning atmosphere that is both stimulating and calming.
        `,

        question_1: `What key features define the classrooms in future schools?`,
        question_2: `How is homework managed in future schools?`,
        question_3: `What enhances teacher-student communication in future schools?`,
        question_4: `How is the physical environment of future schools designed?`,

        choices_1:`
        A) Continued use of traditional blackboards and focus on lectures  
        B) Implementation of AR and VR systems with interactive whiteboards  
        C) Exclusive use of textbooks for all learning activities  
        D) Emphasis on individual study with minimal teacher interaction
        `,
        choices_2:`
        A) It is entirely eliminated  
        B) Standardized for all students regardless of their level  
        C) Customized by AI to fit each student's learning needs  
        D) Focused only on rote memorization tasks
        `,
        choices_3:`
        A) Reliance solely on email communication  
        B) Use of data-driven insights for tailored teaching strategies  
        C) Limited direct interaction between teachers and students  
        D) Focus on traditional paper-based report systems
        `,
        choices_4:`
        A) To replicate traditional classroom settings strictly  
        B) With open-plan spaces and integration of natural elements  
        C) Focusing on technology with minimal attention to comfort  
        D) Prioritizing competitive sports facilities over learning areas
        `,

        answer_id_1: '2',
        answer_id_2: '3',
        answer_id_3: '2',
        answer_id_4: '2',

        answer_1: `答え B) Implementation of AR and VR systems with interactive whiteboards`,
        answer_2: `答え C) Customized by AI to fit each student's learning needs`,
        answer_3: `答え B) Use of data-driven insights for tailored teaching strategies`,
        answer_4: `答え B) With open-plan spaces and integration of natural elements`,

        explanation_1: `
        解説:

        未来の学校の教室では、ARとVRシステムが採用され、インタラクティブなホワイトボードが従来の黒板を置き換えています。これによりA（従来の黒板の使用と講義への焦点）、C（全ての学習活動に教科書を排他的に使用する）、D（教師との最小限のやりとりに重点を置いた個別学習）は不適切です。
        `,
        explanation_2: `
        解説:

        未来の学校では、AIが各生徒の学習ニーズに合わせて宿題をカスタマイズします。これにより、A（宿題が完全に廃止される）、B（全生徒に対して標準化される）、D（暗記タスクにのみ焦点を当てる）は不正解となります。
        `,
        explanation_3: `
        解説:

        データに基づく洞察を用いた教育戦略により、教師と生徒のコミュニケーションが向上します。従って、A（メール通信にのみ依存する）、C（教師と生徒間の直接的なやり取りの制限）、D（伝統的な紙ベースの報告システムへの焦点）は適切でない選択肢です。
        `,
        explanation_4: `
        解説:

        未来の学校の物理的環境は、オープンプランのスペースと自然要素の統合を特徴として設計されています。これにより、A（厳格に従来の教室設定を模倣する）、C（快適さに最小限の注意を払い、技術に焦点を当てる）、D（学習エリアよりも競技スポーツ施設を優先する）は不適切な選択肢です。
        `,
      },

      {
        id: 2,

        text: `
        In the technologically advanced schools of the future, classrooms are equipped with interactive digital boards and augmented reality (AR) systems. These tools enable students to visualize complex scientific concepts and historical events in a three-dimensional space. Personalized learning is enhanced by AI tutors that adapt to each student's learning style, providing tailored guidance. This technology-rich environment fosters a deeper understanding and engagement in subjects, transforming the traditional learning experience into a dynamic and interactive one.

        Homework in future schools is designed to be more engaging and personalized. AI algorithms analyze each student's performance, customizing assignments to target individual learning needs and areas of improvement. This approach ensures that homework is not only relevant but also supports the overall learning objectives. Additionally, collaborative online platforms encourage students to work together on projects, promoting teamwork and enhancing problem-solving skills.

        Communication between teachers and students is greatly enhanced by technology. Teachers utilize data analytics to monitor each student's progress, allowing for tailored instruction and timely intervention. This data-driven approach ensures that every student's educational needs are met. Additionally, online communication platforms facilitate continuous interaction between teachers and students, further strengthening the learning process.

        The physical environment of future schools is designed with the well-being of students in mind. Classrooms are open and adaptable, promoting a collaborative and inclusive atmosphere. Natural elements, like plants and natural lighting, are integrated to create a calming and healthy learning environment. The combination of technology and nature in these spaces contributes to a holistic educational experience, balancing academic learning with emotional and physical well-being.
        `,

        question_1: `What characterizes the classrooms in future technologically advanced schools?`,
        question_2: `How is homework managed in future schools?`,
        question_3: `What has improved teacher-student communication in future schools?`,
        question_4: `How is the physical environment of future schools designed?`,

        choices_1:`
        A) Exclusive use of traditional blackboards and textbooks
        B) Interactive digital boards and AR systems with AI tutors
        C) Sole reliance on physical experimentation for learning
        D) Focus on lecture-based teaching without technological aids
        `,
        choices_2:`
        A) Through standardized, one-size-fits-all assignments
        B) Elimination of homework in favor of in-class activities only
        C) AI-customized assignments with collaborative online platforms
        D) Emphasis on individual projects without peer interaction
        `,
        choices_3:`
        A) Limiting teacher feedback to written reports only
        B) Utilizing data analytics for tailored instruction
        C) Restricting communication to in-person meetings
        D) Decreasing teacher involvement in student learning
        `,
        choices_4:`
        A) Traditional closed-off classrooms with minimal technology
        B) Open and adaptable spaces with integration of natural elements
        C) Complete focus on digital technology, excluding natural elements
        D) Individual study booths to promote solitary learning
        `,

        answer_id_1: '2',
        answer_id_2: '3',
        answer_id_3: '2',
        answer_id_4: '2',

        answer_1: `答え B) Interactive digital boards and AR systems with AI tutors`,
        answer_2: `答え C) AI-customized assignments with collaborative online platforms`,
        answer_3: `答え B) Utilizing data analytics for tailored instruction`,
        answer_4: `答え B) Open and adaptable spaces with integration of natural elements`,

        explanation_1: `
        解説:

        未来の学校の教室は、インタラクティブなデジタルボード、ARシステム、AIチューターが特徴です。A（伝統的な黒板と教科書のみを使用する）、C（学習のために実験にのみ依存する）、D（技術支援なしで講義ベースの教授法に焦点を当てる）はテキストの内容と矛盾します。
        `,
        explanation_2: `
        解説:

        未来の学校では、AIによってカスタマイズされた宿題と協力的なオンラインプラットフォームが使用されます。A（標準化された、全員に合う課題）、B（授業内の活動のみに宿題を置き換える）、D（ピアとの相互作用なしに個人プロジェクトに重点を置く）は文脈に合いません。
        `,
        explanation_3: `
        解説:

        教師と生徒間のコミュニケーションは、データ分析を活用した個別指導によって改善されます。A（書面による報告のみにフィードバックを限定する）、C（対面での会話にコミュニケーションを制限する）、D（生徒の学習における教師の関与を減らす）は適切ではありません。
        `,
        explanation_4: `
        解説:

        未来の学校の物理的環境は、オープンで柔軟なスペースと自然要素の統合によって設計されています。A（最小限の技術を備えた伝統的な閉じた教室）、C（自然要素を除外してデジタル技術に完全に焦点を当てる）、D（孤独な学習を促進するための個別学習ブース）は、テキストの内容から外れています。
        `,
      },

      {
        id: 3,

        text: `
        In the future, schools are equipped with advanced technology. Each classroom features interactive holograms for dynamic learning. Students use tablets instead of textbooks, accessing a vast digital library. Lessons are more engaging, with virtual simulations bringing historical events to life. This immersive technology makes learning both effective and enjoyable.

        Homework in these futuristic schools is personalized. AI algorithms analyze each student's learning style, tailoring homework to their needs. This approach ensures that each student is challenged appropriately, enhancing their understanding. Moreover, virtual tutors provide instant feedback, helping students to learn from their mistakes in real time.

        Communication between teachers and students has been revolutionized. Teachers use real-time data analytics to track student progress, enabling them to offer targeted support. This system allows for a more individualized teaching approach, addressing the specific needs of each student and enhancing the overall educational experience.

        The school's environment is designed to foster collaboration and creativity. Classrooms are flexible spaces, easily reconfigured for different activities. There are also areas for relaxation and social interaction, acknowledging the importance of mental well-being in education. The emphasis is on creating a holistic learning environment.
        `,

        question_1: `What is a key feature of classrooms in future schools?`,
        question_2: `How is homework managed in future schools?`,
        question_3: `What has improved teacher-student communication in future schools?`,
        question_4: `What aspect of the school environment is emphasized in future schools?`,

        choices_1:`
        A) Traditional teaching methods  
        B) Interactive holograms and digital resources  
        C) Mandatory physical education  
        D) Exclusively lecture-based learning
        `,
        choices_2:`
        A) It is completely eliminated  
        B) Standardized for all students  
        C) Personalized by AI algorithms  
        D) Focused only on science subjects
        `,
        choices_3:`
        A) Decreased use of technology  
        B) Real-time data analytics  
        C) Teachers no longer give direct feedback  
        D) Sole reliance on textbooks
        `,
        choices_4:`
        A) Strict discipline and structure  
        B) Flexibility and mental well-being  
        C) Isolation for focused study  
        D) Uniformity in classroom design
        `,

        answer_id_1: '2',
        answer_id_2: '3',
        answer_id_3: '2',
        answer_id_4: '2',

        answer_1: `答え B) Interactive holograms and digital resources`,
        answer_2: `答え C) Personalized by AI algorithms`,
        answer_3: `答え B) Real-time data analytics`,
        answer_4: `答え B) Flexibility and mental well-being`,

        explanation_1: `
        解説:

        未来の学校の教室の特徴として、インタラクティブなホログラムとデジタルリソースが挙げられています。これにより、A（従来の教授法）、C（義務的な体育）、D（講義ベースの学習のみ）は不正解です。
        `,
        explanation_2: `
        解説:

        未来の学校では、AIアルゴリズムによって宿題が個々の学生に合わせてカスタマイズされています。したがって、A（完全に廃止されている）、B（すべての生徒に標準化されている）、D（科学科目にのみ焦点を当てている）は不適切です。
        `,
        explanation_3: `
        解説:

        先生と生徒間のコミュニケーションは、リアルタイムデータ分析によって改善されています。これにより、A（技術の使用の減少）、C（先生からの直接的なフィードバックのないこと）、D（教科書にのみ依存すること）は不正解となります。
        `,
        explanation_4: `
        解説:

        未来の学校の環境では、柔軟性と精神的な健康が重視されています。従って、A（厳格な規律と構造）、C（集中的な学習のための隔離）、D（教室デザインの統一性）は文脈に合わないため、不正解です。
        `,
      },
    ],
  },
]