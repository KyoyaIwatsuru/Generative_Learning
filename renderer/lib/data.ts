export const links = [
  { title: 'Home', href: '/' },
  { title: 'Text', href: '/text' },
  { title: 'Question', href: '/question' },
  { title: 'Explanation', href: '/explanation' },
  { title: 'Finish', href: '/finish' },
];

export const page = [
  //Pre Test1
  { work: '1', id: '1' },//A story about a fictional town: 1
  { work: '1', id: '2' },//Daily life at a small local food store: 3
  { work: '1', id: '3' },//Life in a rural town depending on the season: 2
  { work: '1', id: '4' },//A story of a family with different cultures: 4
  { work: '1', id: '5' },//Opening of a new library in a small town: 2
  //Pre Test2
  { work: '2', id: '1' },//Life in a rural town depending on the season: 3
  { work: '2', id: '2' },//Daily life at a small local food store: 4
  { work: '2', id: '3' },//A story about a fictional town: 2
  { work: '2', id: '4' },//Opening of a new library in a small town: 3
  { work: '2', id: '5' },//A story of a family with different cultures: 1
  //Pre Test3
  { work: '3', id: '1' },
  { work: '3', id: '2' },
  { work: '3', id: '3' },
  { work: '3', id: '4' },
  { work: '3', id: '5' },
  //Pre Test4
  { work: '4', id: '1' },
  { work: '4', id: '2' },
  { work: '4', id: '3' },
  { work: '4', id: '4' },
  { work: '4', id: '5' },
  //Pre Test5
  { work: '5', id: '1' },
  { work: '5', id: '2' },
  { work: '5', id: '3' },
  { work: '5', id: '4' },
  { work: '5', id: '5' },
  //Pre Test6
  { work: '6', id: '1' },
  { work: '6', id: '2' },
  { work: '6', id: '3' },
  { work: '6', id: '4' },
  { work: '6', id: '5' },
]

export const works = [
  {
    work_id: 1,

    title: 'Pre Test1',

    work: [
      {
        id: 1,

        text: `
        In the heart of the quiet town of Green Meadows, there was a lovely park known to everyone as the town's jewel. It wasn't a large park, but it had a playground where the laughter of children was a sweet melody, and a field where families gathered to enjoy the sun. In the middle of the park stood an old oak tree, whose branches were home to chirping birds. Around the tree, there were benches where elderly folks would sit and reminisce about days gone by. The park also featured a small pond where ducks swam gracefully, often followed by a trail of fluffy ducklings. The people of Green Meadows were proud of their park and took great care to keep it clean and beautiful. However, one spring, a company planned to build a shopping mall right on the land of the park. The community was faced with the threat of losing their beloved green space. In response, the townspeople united, signing petitions and holding meetings to discuss the issue. Their efforts paid off when the company agreed to find a different location for the mall. The park was saved, and the residents of Green Meadows continued to enjoy the peace and beauty it provided, knowing that their collective action had preserved it for future generations.
        `,

        question: `What is the primary theme of the story set in Green Meadows?`,

        choices:`
        A) The collective action of a community to protect a cherished local park. 
        B) The development of a shopping mall in a small, peaceful town. 
        C) The importance of childhood memories associated with a local park. 
        D) The role of nature in providing a sanctuary for townspeople and wildlife.
        `,

        answer_id: '1',

        answer: `答え A) The collective action of a community to protect a cherished local park.`,

        explanation: `
        解説:

        この話の主要なテーマは、愛されている地元の公園を守るためのコミュニティの共同行動です。選択肢Aは正解です。選択肢Bは、ショッピングモールの開発が主要なテーマではなく、計画が中止されたため不正解です。選択肢Cは、地元の公園に関連する子供時代の思い出の重要性がテーマではないため不正解です。選択肢Dは、自然が町の人々や野生動物にとっての避難所としての役割について述べていますが、これは物語の中心的なテーマではないため不正解です。
        `,
      },

      {
        id: 2,

        text: `
        Upon entering the modest local food store, one is immediately enveloped by the aroma of fresh herbs and the sight of vibrant produce. The shopkeeper, a convivial soul with a knack for remembering names, orchestrates the daily operations with a blend of efficiency and personal touch. In the morning, the store is abuzz with early birds, who flock to the bakery section for sourdough loaves still warm from the oven. By midday, the focus shifts to the deli, where succulent meats and an array of cheeses become the protagonists, and the shopkeeper is often seen recommending wine pairings with a charismatic flourish. Afternoons are reserved for restocking and the quiet hum of regulars who pop in for specialty items, their conversations with the staff adding a layer of intimacy to the store's ambiance. The evening witnesses a surge of energy as office workers dart in to procure ingredients for a no-fuss dinner, or perhaps to indulge in the week's featured confectionery—a testament to the store's reputation for culinary surprises. Throughout the day, the shopkeeper ensures that each patron leaves with not just their groceries but also a sense of community, woven through shared stories and the store's persistent charm. As the last customer exits and the 'Open' sign flips to 'Closed', the store stands as a testament to the enduring allure of local, personalized shopping experiences, a day marked by the ebb and flow of patrons and the steady rhythm of neighborhood life.
        `,

        question: `What aspect of the food store's daily life is highlighted by the text?`,

        choices:`
        A) The store's busiest time is in the morning when baked goods are freshly available. 
        B) The store is renowned for its afternoon quietness and specialty item selection. 
        C) The store maintains a consistent sense of community throughout the day. 
        D) The store primarily caters to evening shoppers with its quick dinner options.
        `,

        answer_id: '3',

        answer: `答え C) The store maintains a consistent sense of community throughout the day.`,

        explanation: `
        解説:

        この長文は、小さな地元の食料品店の日常生活を詳しく描写しており、朝から晩までの異なる時間帯での様子が書かれています。選択肢A（店は焼きたてのパンが利用できる朝が最も忙しい）は、文章が朝の描写に限定されていると誤解させる可能性がありますが、文章は一日中の様子を描いています。選択肢B（店は午後の静けさと特製品の選択で有名）も、文章の一部分のみを取り上げており、全体の文脈からは外れます。選択肢C（店は一日を通じてコミュニティの感覚を維持している）は、文章全体を通じて強調されているテーマを反映しており、正解です。選択肢D（店は夕方の買い物客に主に対応しており、手軽な夕食のオプションを提供している）も、文章の一部の情景を表しているに過ぎず、全体像ではありません。
        `,
      },

      {
        id: 3,

        text: `
        In a small rural town, the rhythm of life ebbs and flows with the seasons. Spring breathes new life into the community as farmers till the soil and prepare for planting, their tractors a common sight in the fields. The town park becomes a canvas of color with tulips and daffodils pushing through the earth. Summer brings warmth and a buzz of energy. Children chase ice cream trucks and families flock to community picnics. The sound of fireworks punctuates the night sky on the Fourth of July. As autumn arrives, the landscape transforms into a palette of oranges and reds. Locals gather at the annual harvest fair, sipping apple cider and navigating corn mazes. With winter's arrival, a blanket of snow muffles the town. Holiday lights twinkle, and the scent of woodsmoke is in the air. Residents bundle up for the tree lighting ceremony, and the local ice rink becomes a gathering place. Throughout the year, the town's natural beauty and the changing seasons shape the lives and activities of its inhabitants.
        `,

        question: `What is the focus of the long text regarding the rural town?`,

        choices:`
        A) The town's changing weather patterns and their effects on daily life. 
        B) The specific types of seasonal work done by the town's farmers. 
        C) The town's social events and how they bring the community together. 
        D) The town's shifting landscape and seasonal traditions that influence local life.
        `,

        answer_id: '4',

        answer: `答え D) The town's shifting landscape and seasonal traditions that influence local life.`,

        explanation: `
        解説:

        長文では、田舎町の変化する風景と季節の伝統が地元の生活にどのように影響を与えているかに焦点を当てています。春の植物の成長、夏のコミュニティピクニック、秋の収穫祭、冬のホリデーライトとアイスリンクなど、季節ごとの自然の美しさと活動が描かれています。
        Aの選択肢は「天候の変化とそれが日常生活に与える影響」について述べていますが、天候の変化よりも風景と伝統に重点を置いています。
        Bの選択肢は「農家による季節ごとの特定の作業」について述べていますが、これは文中で具体的に詳しく述べられているわけではありません。
        Cの選択肢は「社会的イベントとコミュニティを結びつける方法」について述べていますが、イベントは季節の伝統の一部として触れられているものの、風景と同じくらいの重要性はありません。
        正解はDで、「町の変化する風景と季節の伝統が地元の生活に影響を与えること」が長文の焦点です。
        `,
      },

      {
        id: 4,

        text: `
        Amidst the cosmopolitan tapestry of New York City, the Hamiltons, a family of rich cultural confluence, navigated the complexities of a blended heritage with aplomb. James, the father, an aficionado of ancient Greek philosophy, and his wife, Mei Ling, a Chinese calligraphy master, had woven a life together that celebrated the synthesis of Eastern and Western paradigms. Their abode, nestled in the heart of Brooklyn, was a microcosm of their worldviews, adorned with Ionic columns and hanging scrolls, a testament to their intellectual and aesthetic fusion. Their children, Sophia and Tao, were the quintessence of this cultural melange, embodying the fusion of their parents' legacies while forging their own individual identities. Sophia, a fervent advocate for environmental justice, often engaged in eloquent discourses on sustainability, her rhetoric steeped in the wisdom of Socrates and Confucius alike. Tao, an emerging avant-garde filmmaker, explored the human condition through the lens of his dual heritage, weaving narratives that transcended linguistic barriers. The Hamiltons' dinners were symposiums of cultural exchange, where dim sum was served alongside moussaka, and conversations oscillated between the philosophies of Laozi and Plato. Despite their disparate interests and pursuits, the family's shared commitment to embracing their multifaceted identities cultivated a cohesive bond, an emblem of the beauty inherent in cultural diversity.
        `,

        question: `Which of the following best captures the essence of the Hamilton family's story?`,

        choices:`
        A) The Hamilton family is primarily concerned with preserving traditional aspects of their Greek and Chinese heritages. 
        B) The Hamilton family finds it challenging to reconcile their individual pursuits with their collective cultural identities. 
        C) The Hamilton family is depicted as having a preference for their respective intellectual interests over their shared cultural background. 
        D) The Hamilton family, while pursuing individual interests, is united in their celebration of cultural diversity.
        `,

        answer_id: '4',

        answer: `答え D) The Hamilton family, while pursuing individual interests, is united in their celebration of cultural diversity.`,

        explanation: `
        解説:

        長文では、ハミルトン家がニューヨーク市の多文化的な背景の中で、東西の文化の融合を巧みに生きている様子が描かれています。彼らは各々の個別の興味を持ちながらも、文化的多様性を祝うことで結束しています。選択肢Aは「ハミルトン家が彼らのギリシャと中国の遺産の伝統的な側面を保持することに主に関心を持っている」と述べていますが、彼らは伝統を保つことだけに焦点を当てているわけではないので不正解です。選択肢Bは「ハミルトン家が個々の追求と集団的な文化的アイデンティティを調和させることに苦労している」と述べていますが、長文にはそのような苦労が描かれていないため不正解です。選択肢Cは「ハミルトン家が共有する文化的背景よりもそれぞれの知的な興味を優先している」と述べていますが、長文は家族が個々の興味を持ちつつも文化的多様性を祝う結束を強調しているため不正解です。正解は選択肢Dで、「ハミルトン家は個々の興味を追求しながらも、文化的多様性の祝賀で団結している」という要約が長文の内容に最も適しています。選択肢は排除法では解決できないように設定されており、正確な要約を選ぶ必要があります。
        `,
      },

      {
        id: 5,

        text: `
        In the serene town of Meadowvale, the opening of a new library marked a dawn of intellectual awakening. This library, a modest yet state-of-the-art facility, was designed to be the cornerstone of the community's educational growth. As the ribbon was cut, people from every corner of the town gathered, reflecting the library's potential to unite individuals from diverse backgrounds. The collection within the library was carefully curated to cater to a wide range of interests, featuring an array of genres and subjects. Not only did it house thousands of books, but it also provided access to digital media, local archives, and a suite of technological tools to aid in research and learning. The children's area was a vibrant space, animated with storytelling sessions that sparked imagination and curiosity. Study rooms and quiet corners offered sanctuaries for learners and thinkers to delve into their studies uninterrupted. Furthermore, the library planned to host a variety of programs, including literacy workshops, cultural events, and educational talks, all aimed at enriching the community's knowledge and fostering a love for lifelong learning. As Meadowvale's new library stood ready to serve, it promised to be more than just a repository of books; it was to be a dynamic center for discovery and connection, welcoming everyone to partake in the joy of reading and the pursuit of knowledge.
        `,

        question: `What is the primary focus of the long text regarding the new library in Meadowvale?`,

        choices:`
        A) The architectural design and technological advancements of the library. 
        B) The variety of books and digital resources available to the public. 
        C) The library's offerings for children and dedicated study spaces. 
        D) The library's commitment to serving as a dynamic center for learning and community engagement.
        `,

        answer_id: '4',

        answer: `答え D) The library's commitment to serving as a dynamic center for learning and community engagement.`,

        explanation: `
        解説:

        長文は、メドウベイルの新しい図書館が学習とコミュニティ参加のための活動的な中心地として機能するというコミットメントについて主に説明しています。図書館は、読書の喜びと知識の追求に参加することをすべての人に歓迎する、発見とつながりのためのダイナミックなセンターであることを約束しています。
        Aの選択肢は「図書館の建築デザインと技術的進歩」について述べていますが、これは図書館の特徴の一部として触れられていますが、長文の主な焦点ではありません。
        Bの選択肢は「一般に利用可能な書籍とデジタルリソースの多様性」について述べていますが、これも図書館の資源の一部として含まれていますが、長文の中心的なテーマではありません。
        Cの選択肢は「子供向けの図書館の提供物と専用の勉強スペース」について述べていますが、これも図書館のサービスの一部として触れられていますが、長文の主なポイントではないです。
        正解はDで、「図書館が学習とコミュニティ参加のための活動的な中心地として機能することへのコミットメント」が長文の主な内容です。
        `,
      },
    ],
  },

  {
    work_id: 2,

    title: 'Pre Test2',

    work: [
      {
        id: 1,

        text: `
        In the small tapestry of a rural town, the ebb and flow of life are intimately tied to the seasonal cycles. As winter's frost recedes, spring heralds its arrival with a delicate palette of wildflowers dotting the meadows, inspiring the residents to emerge from their homes and tend to their gardens with tender care. The town's verdure becomes a canvas for nature's artistry, with every blossom and new leaf contributing to the collective anticipation of summer's abundance. With the advent of summer, the sun bathes the town in a golden glow, ripening the fruits and summoning people to the fields for harvest. Festivals celebrating the season's yield punctuate the long, balmy days. As autumn's chill whispers through the town, the foliage adorns itself in vibrant hues, and the townspeople prepare preserves and pies, savoring the last vestiges of warmth. Winter, though harsh, has its own muted beauty; it ushers in a time of introspection and close-knit gatherings, where the community's resilience is fortified by shared stories and the comfort of traditions that have withstood the test of time. Despite the changing seasons, the town's tempo remains steadfast, with each period of transition reinforcing the enduring spirit of the community and the continuity of life that flows beneath the surface of these seasonal shifts.
        `,

        question: `What does the text imply about the rural town's response to the changing seasons?`,

        choices:`
        A) The town's activities and moods are dramatically altered with each season, leading to a lack of continuity. 
        B) The town's residents feel disconnected from each other as each season brings its own set of challenges. 
        C) The town's community spirit and traditions provide a consistent rhythm to life despite the seasonal changes. 
        D) The town becomes isolated in winter, leading to a breakdown in community spirit until spring arrives.
        `,

        answer_id: '3',

        answer: `答え C) The town's community spirit and traditions provide a consistent rhythm to life despite the seasonal changes.`,

        explanation: `
        解説:

        テキストでは、季節の変化にもかかわらず、田舎町のコミュニティの精神と伝統が一貫したリズムを生活に提供していることが示唆されています。春、夏、秋、冬とそれぞれの季節が変わるにつれて、町の活動や気分が変わるものの、コミュニティの精神と伝統が継続しているという点が強調されています。
        A) は季節ごとに活動や気分が大きく変わると述べていますが、テキストでは季節の変化にもかかわらずコミュニティの精神が一貫していると述べているため、不正解です。B) は季節の変化によって住民がお互いに疎外感を感じると述べていますが、テキストでは共有された物語や伝統によってコミュニティの強さが強化されていると述べています。D) は冬に町が孤立し、春が来るまでコミュニティの精神が崩壊すると述べていますが、テキストでは冬もその独自の美しさがあり、コミュニティの精神が続いていると述べています。したがって、正しい答えはC) で、季節の変化にもかかわらず、町のコミュニティの精神と伝統が生活に一貫したリズムを提供していると要約しています。
        `,
      },

      {
        id: 2,

        text: `
        Within the confines of a diminutive alimentary boutique, Mrs. Llewellyn's daily life unfurls with the precision of a time-honored ballet. Her mornings are consumed by the meticulous curation of her provisions, each apple polished to a gleam, each loaf of bread ensconced with care. As the town awakens, a cavalcade of patrons parades through the door, exchanging pleasantries and currency with equal fervor. The professor, with his proclivity for obscure culinary herbs, debates the merits of thyme versus tarragon, while children, their eyes agleam with the promise of confectionery treasures, barter their pocket change for sugared delights. Afternoons are quieter, a time for inventory and reflection, as Mrs. Llewellyn ponders the ebb and flow of her enterprise. Yet, it is the personal routine and activities of Mrs. Llewellyn herself, the store's perennial matriarch, that truly animates the store's ambiance. Her anecdotes, often steeped in the town's history, her sage advice dispensed with a motherly touch, and her unwavering commitment to her patrons, transform the mundane into the extraordinary. As dusk descends and she turns the key in the lock, the store's ledger, brimming with the day's accounts, is also a testament to the life she has woven into the fabric of the community.
        `,

        question: `Which aspect of Mrs. Llewellyn's food store is predominantly highlighted in the long text?`,

        choices:`
        A) The economic importance of the food store to the local community. 
        B) The interactions between customers and the variety of goods they purchase. 
        C) The role of the food store in maintaining local traditions and history. 
        D) The personal routine and activities of Mrs. Llewellyn as the store owner.
        `,

        answer_id: '4',

        answer: `答え D) The personal routine and activities of Mrs. Llewellyn as the store owner.`,

        explanation: `
        解説:

        長文では、ミセス・ルーウェリンが食料品店を経営する日々の生活と、彼女がコミュニティに織り込む生活が強調されています。彼女の個人的な日課、顧客へのアドバイス、歴史に関する逸話などが、店の雰囲気を決定づけていると描かれています。
        Aの選択肢は「地元コミュニティに対する食料品店の経済的重要性」について述べていますが、テキストは経済的側面よりもミセス・ルーウェリンの個人的な側面に焦点を当てています。
        Bの選択肢は「顧客間の交流と彼らが購入する商品の多様性」について述べていますが、これはテキストの主要なテーマではありません。
        Cの選択肢は「食料品店が地元の伝統と歴史を維持する役割」と述べていますが、これもテキストの中心的な主題ではありません。
        正解はDで、「店主であるミセス・ルーウェリンの個人的な日課と活動」がテキストで主に強調されています。
        `,
      },

      {
        id: 3,

        text: `
        In the small town of Cloverville, life moved at a gentle pace. The town was a patchwork of green fields and cozy homes. Main Street was lined with family-owned shops where everyone greeted you by name. The townspeople of Cloverville valued their time together. They often gathered in the town square, a peaceful place with a fountain and a few old benches. Children would play tag around the square, while their parents chatted nearby. The local school was small, but the teachers were dedicated to giving each child the attention they needed. In Cloverville, people took care of each other. If someone was sick, neighbors would bring them food. When the winter snows came, they shoveled each other's walkways. Life wasn't always perfect, but the people of Cloverville knew they could rely on one another. They shared joys and sorrows, and through it all, the sense of community was their greatest strength. Cloverville wasn't just a place; it was a feeling of belonging and a shared commitment to the common good.
        `,

        question: `What does the story of Cloverville primarily convey?`,

        choices:`
        A) The significance of personal relationships and community in a small town. 
        B) The daily activities of the children and their education in Cloverville. 
        C) The mutual assistance and seasonal traditions of the townspeople. 
        D) The charm of the town square and the local businesses.
        `,

        answer_id: '1',

        answer: `答え A) The significance of personal relationships and community in a small town.`,

        explanation: `
        解説:

        クローバーヴィルの話は、主に小さな町における個人的な関係とコミュニティの重要性を伝えています。
        A) 正解はAです。この話は、クローバーヴィルの町の人々の間に築かれた個人的な関係とコミュニティの結束がどのように重要であるかを中心に描いています。
        B) 「子供たちの日常活動とクローバーヴィルでの教育」については言及されていますが、それが主な内容ではありません。不正解です。
        C) 「町の人々の相互支援と季節の伝統」も話の要素ですが、それが主な内容ではありません。不正解です。
        D) 「町の広場と地元のビジネスの魅力」についても触れられていますが、それが主な内容ではありません。不正解です。
        `,
      },

      {
        id: 4,

        text: `
        In the quaint town of Willowdale, a new chapter was being written with the grand opening of the Elmwood Library. This beacon of knowledge, nestled between the old oak trees, stood as a testament to the town's commitment to literacy and community growth. The library's architecture, a seamless blend of classic design and modern functionality, housed an expansive collection of literature that spanned genres and eras. It featured state-of-the-art technology, including high-speed internet access, digital catalogs, and self-checkout systems, catering to the needs of a diverse patronage. The children's section was a vibrant hub, adorned with colorful murals depicting scenes from beloved fairy tales, while the quiet study areas provided a sanctuary for those seeking solace in their academic pursuits. The library also offered a variety of programs, from local history lectures to creative writing workshops, all aimed at enriching the cultural fabric of Willowdale. As the ribbon was cut and the doors swung open, the residents streamed in, eager to explore the treasures within, signaling a renaissance of learning and a newfound sense of unity in this small but spirited community.
        `,

        question: `What is the main purpose of the Elmwood Library in Willowdale?`,

        choices:`
        A) To serve as a historical monument for the town. 
        B) To provide a modern space for technology and study. 
        C) To foster a sense of community and promote literacy. 
        D) To function solely as a children's educational center.
        `,

        answer_id: '3',

        answer: `答え C) To foster a sense of community and promote literacy.`,

        explanation: `
        解説:

        長文では、ウィローデールのエルムウッド図書館がコミュニティの成長とリテラシー（読み書き能力）の向上に対する町の取り組みを象徴していることが説明されています。選択肢A（町の歴史的記念物として機能する）は、図書館が歴史的なものとして言及されているわけではないため、正解ではありません。選択肢B（技術と勉強のための現代的な空間を提供する）は、図書館が提供するサービスの一部を表していますが、主な目的を捉えていません。選択肢C（コミュニティの感覚を育み、リテラシーを促進する）は、長文の中で図書館が果たしている役割を正確に表しており、正解です。選択肢D（子供の教育センターとしてのみ機能する）も、図書館が子供向けのセクションを持っているとはいえ、それが図書館の唯一の機能ではないため、不正解です。したがって、選択肢Cが最も長文の要旨を捉えています。
        `,
      },

      {
        id: 5,

        text: `
        In a small town nestled between rolling hills and vast fields, the Clark family stands out for embracing their diverse cultural heritage. John, the father, has roots in Italy, and his wife, Keiko, was born in Japan. Together, they have two children: Sophia and Hiro. Their home is a harmonious mix of both worlds. Italian paintings hang on the walls, and Japanese calligraphy adorns the entryway. The family celebrates Christmas with a large feast including pasta and pizza, and they honor the Japanese Obon festival with traditional dances and lanterns. The children are bilingual, effortlessly switching between Italian and Japanese, and they also speak English fluently. At school, Sophia and Hiro share stories about their unique traditions with classmates, enriching the cultural tapestry of their community. The Clarks often host dinners where they serve dishes like spaghetti and sushi, and their friends eagerly anticipate these gatherings. This family exemplifies how love and respect for different cultures can weave a rich and vibrant family tapestry.
        `,

        question: `What does the text primarily convey about the Clark family?`,

        choices:`
        A) The Clark family exclusively follows Italian traditions and language. 
        B) The Clark family's lifestyle is a fusion of Italian and Japanese cultures. 
        C) The Clark family has completely adopted the local culture, abandoning their own. 
        D) The Clark family only celebrates traditional Japanese festivals.
        `,

        answer_id: '2',

        answer: `答え B) The Clark family's lifestyle is a fusion of Italian and Japanese cultures.`,

        explanation: `
        解説:

        この長文はクラーク家という家族について述べています。父のジョンはイタリア系で、母のケイコは日本生まれです。彼らは二人の子供、ソフィアとヒロを持っています。家庭内ではイタリアと日本の文化が融合しており、両方の祝日を祝い、二つの言語を話し、友人を招いては両国の料理を提供しています。
        選択肢B「クラーク家のライフスタイルはイタリアと日本の文化の融合である」というのがこのテキストの主要なメッセージです。
        選択肢A「クラーク家はイタリアの伝統と言語だけに従っている」というのは誤りです。テキストには、日本の伝統も尊重していると書かれています。
        選択肢C「クラーク家は地元の文化を完全に採用し、自分たちの文化を捨てている」というのも誤りです。彼らは自分たちの文化を大切にしているとテキストで述べられています。
        選択肢D「クラーク家は伝統的な日本の祭りだけを祝っている」というのも誤りです。テキストではクリスマスを含むイタリアの伝統も祝っていると述べられています。
        `,
      },
    ],
  },

  {
    work_id: 3,
  
    title: 'Pre Test3',
  
    work: [
      {
        id: 1,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },
  
      {
        id: 2,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },
  
      {
        id: 3,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },

      {
        id: 4,

        text: `
        Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
        `,

        question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

        choices:`
        A) To provide entertainment with music and dance.
        B) To display the year's agricultural achievements and support community projects.
        C) To promote local tourism and enhance the town's economy.
        D) To honor the oldest residents for their lifelong contributions.
        `,

        answer_id: '2',

        answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

        explanation: `
        解説:

        この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
        `,
      },

      {
        id: 5,

        text: `
        Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
        `,

        question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

        choices:`
        A) To provide entertainment with music and dance.
        B) To display the year's agricultural achievements and support community projects.
        C) To promote local tourism and enhance the town's economy.
        D) To honor the oldest residents for their lifelong contributions.
        `,

        answer_id: '2',

        answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

        explanation: `
        解説:

        この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
        `,
      },
    ],
  },

  {
    work_id: 4,
  
    title: 'Pre Test4',
  
    work: [
      {
        id: 1,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },
  
      {
        id: 2,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },
  
      {
        id: 3,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },

      {
        id: 4,

        text: `
        Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
        `,

        question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

        choices:`
        A) To provide entertainment with music and dance.
        B) To display the year's agricultural achievements and support community projects.
        C) To promote local tourism and enhance the town's economy.
        D) To honor the oldest residents for their lifelong contributions.
        `,

        answer_id: '2',

        answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

        explanation: `
        解説:

        この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
        `,
      },

      {
        id: 5,

        text: `
        Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
        `,

        question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

        choices:`
        A) To provide entertainment with music and dance.
        B) To display the year's agricultural achievements and support community projects.
        C) To promote local tourism and enhance the town's economy.
        D) To honor the oldest residents for their lifelong contributions.
        `,

        answer_id: '2',

        answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

        explanation: `
        解説:

        この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
        `,
      },
    ],
  },

  {
    work_id: 5,
  
    title: 'Pre Test5',
  
    work: [
      {
        id: 1,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },
  
      {
        id: 2,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },
  
      {
        id: 3,
  
        text: `
        Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
        `,
  
        question: 'What did Sarah enjoy doing in her village?',
  
        choices:`
        A) Disliking people around her.
        B) Reading books and dreaming about exploring the world.
        C) Ignoring her studies and friends.
        D) Feeling sad about living in a village.
        `,

        answer_id: '2',

        answer: '答え B) Reading books and dreaming about exploring the world.',
  
        explanation: `
        Paragraph 解説:

        「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


        Question 解説:

        「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
        この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
        選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
        選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
        選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
        `,
      },

      {
        id: 4,

        text: `
        Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
        `,

        question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

        choices:`
        A) To provide entertainment with music and dance.
        B) To display the year's agricultural achievements and support community projects.
        C) To promote local tourism and enhance the town's economy.
        D) To honor the oldest residents for their lifelong contributions.
        `,

        answer_id: '2',

        answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

        explanation: `
        解説:

        この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
        `,
      },

      {
        id: 5,

        text: `
        Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
        `,

        question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

        choices:`
        A) To provide entertainment with music and dance.
        B) To display the year's agricultural achievements and support community projects.
        C) To promote local tourism and enhance the town's economy.
        D) To honor the oldest residents for their lifelong contributions.
        `,

        answer_id: '2',

        answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

        explanation: `
        解説:

        この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
        `,
      },
    ],
  },

  // {
  //   work_id: 6,
  
  //   title: 'Pre Test6',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 7,
  
  //   title: 'Pre Test7',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 8,
  
  //   title: 'Pre Test8',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 9,
  
  //   title: 'Pre Test9',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 10,
  
  //   title: 'Pre Test10',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 11,

  //   title: 'Main Test1',

  //   work: [
  //     {
  //       id: 1,

  //       text: `
  //       Nestled in the verdant embrace of the Elderwood Forest, the fictional town of Thornfield was a tapestry of historical architecture and modern sensibilities, where the annual Thornfield Arts Festival sparked a convergence of culture, creativity, and community spirit. The festival, a culmination of the town's year-long anticipation, showcased an eclectic mix of visual art exhibitions, theatrical performances, and classical music concerts, attracting aficionados and curious tourists alike. The cobblestone streets came alive with the vibrant energy of artisans and performers, while the central plaza hosted the revered sculpture competition, a testament to the town's artistic legacy. Thornfield's denizens, who held their heritage in high regard, reveled in this opportunity to celebrate their collective identity and to foster a dialogue between the old and the new, ensuring that their traditions would be carried forward with fresh perspectives for future generations.
  //       `,

  //       question: 'What does the Thornfield Arts Festival primarily represent in the story?',

  //       choices:`
  //       A) The town's transformation from historical to modern.
  //       B) The town's dedication to preserving its cultural heritage.
  //       C) The economic impact of tourism on Thornfield.
  //       D) The natural beauty of the Elderwood Forest.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) The town\'s dedication to preserving its cultural heritage.',

  //       explanation: `
  //       解説:

  //       この文章は、架空の町ソーンフィールドとその年間アートフェスティバルが町の文化遺産を保存することに対する町の取り組みをどのように表しているかについて述べています。選択肢A「歴史的から現代的への町の変化」は、町が歴史的な建築と現代の感性を織り交ぜていることを示していますが、フェスティバルの主要な表現ではありません。選択肢B「文化遺産を保存することへの町の専念」は、フェスティバルが町の芸術的な遺産を祝い、その伝統を次世代に持続させるための対話を促進する機会として描かれており、このストーリーの主題です。選択肢C「ソーンフィールドへの観光の経済的影響」は、観光客がフェスティバルに惹かれることが言及されていますが、フェスティバルの主な意味合いではありません。選択肢D「エルダーウッドフォレストの自然の美しさ」は、町の設定に関連していますが、フェスティバルが代表する主なテーマではありません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 2,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 3,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 12,

  //   title: 'Main Test2',

  //   work: [
  //     {
  //       id: 1,

  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,

  //       question: 'What did Sarah enjoy doing in her village?',

  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',

  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 2,

  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,

  //       question: 'What did Sarah enjoy doing in her village?',

  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',

  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 3,

  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,

  //       question: 'What did Sarah enjoy doing in her village?',

  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',

  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 13,
  
  //   title: 'Main Test3',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 14,
  
  //   title: 'Main Test4',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 15,
  
  //   title: 'Main Test5',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 16,
  
  //   title: 'Main Test6',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 17,
  
  //   title: 'Main Test7',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 18,
  
  //   title: 'Main Test8',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 19,
  
  //   title: 'Main Test9',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },

  // {
  //   work_id: 20,
  
  //   title: 'Main Test10',
  
  //   work: [
  //     {
  //       id: 1,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 2,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },
  
  //     {
  //       id: 3,
  
  //       text: `
  //       Sarah Johnson lived in a quiet village where she loved to read books and dream about exploring the world. She had many friends and enjoyed school, where she was a very good student. Sarah was kind and always helped people in the village, which made everyone like her. She had a big dream: she wanted to travel and learn about different countries and cultures.Embarking on a transformative journey through realms of diverse cultures and multifarious geographies, Sarah meticulously amalgamated academic perspicacity with experiential learning. Her odyssey, punctuated by stints in places redolent of historical sagas and contemporary dynamisms, was a symphony of enriched insights and nuanced understandings. She cultivated a repository of knowledge, characterized by an in-depth comprehension of societal intricacies and global phenomena, reflecting a harmonization of traditional lore and modern perspectives, which bestowed upon her a panoramic vista of the world's vibrant tapestry.
  //       `,
  
  //       question: 'What did Sarah enjoy doing in her village?',
  
  //       choices:`
  //       A) Disliking people around her.
  //       B) Reading books and dreaming about exploring the world.
  //       C) Ignoring her studies and friends.
  //       D) Feeling sad about living in a village.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) Reading books and dreaming about exploring the world.',
  
  //       explanation: `
  //       Paragraph 解説:

  //       「多様な文化とさまざまな地理における変革的な旅に乗り出し、サラは学問の洞察と体験的な学びを綿密に融合させました。彼女のオデッセイは、歴史的な物語と現代のダイナミズムに満ちた場所での滞在によって特徴付けられ、豊かな洞察と繊細な理解の交響曲でした。彼女は知識の貯蔵庫を育て、社会の複雑さと全球的な現象に対する深い理解を特徴とし、伝統的な知識と現代的な視点の調和を反映して、世界の鮮やかなタペストリーの全体的な眺めを彼女に授けました。」


  //       Question 解説:

  //       「サラの多様な文化と場所を通じた旅は何に貢献しましたか？」
  //       この質問は、サラの旅が彼女の知識や理解にどのように影響したかを尋ねています。
  //       選択肢C「社会の複雑さと全球的な現象に対する詳細な理解」は正解です。これは段落2で説明されている内容と一致しています。サラは、様々な文化や場所から学び、社会の複雑さと全球的な現象に対する詳細な理解を持つようになりました。
  //       選択肢AとBは、段落2の内容とは逆であり、サラの旅が彼女の理解や学びを制限または嫌いにさせたわけではありません。
  //       選択肢D「さまざまな文化についての混乱を生み出す」も不正解です。段落2は、サラが混乱ではなく、さまざまな文化についての豊かな洞察と理解を得たことを示しています。
  //       `,
  //     },

  //     {
  //       id: 4,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },

  //     {
  //       id: 5,

  //       text: `
  //       Amidst the rolling hills and sweeping meadows of the Harrowsmith Valley, lies the quaint town of Eldenbridge. Renowned for its annual Harvest Moon Gala, Eldenbridge has long been a bastion of agrarian tradition and innovation. The Gala, a sophisticated soiree under the autumn moonlight, celebrates the culmination of the year's agricultural endeavors with an exhibition of locally sourced produce and a silent auction of exquisite crafts. The event not only serves as a showcase for regional farmers but also as a crucible for fostering community cohesion and philanthropy, with proceeds going towards local education and conservation efforts. Eldenbridge's inhabitants, a blend of seasoned agriculturists and young entrepreneurs, unite in their respect for the land and their commitment to sustainable practices, ensuring the town's legacy thrives in an era of rapid change.
  //       `,

  //       question: 'What is the central focus of the Harvest Moon Gala in Eldenbridge?',

  //       choices:`
  //       A) To provide entertainment with music and dance.
  //       B) To display the year's agricultural achievements and support community projects.
  //       C) To promote local tourism and enhance the town's economy.
  //       D) To honor the oldest residents for their lifelong contributions.
  //       `,

  //       answer_id: '2',

  //       answer: '答え B) To display the year\'s agricultural achievements and support community projects.',

  //       explanation: `
  //       解説:

  //       この文章は、エルデンブリッジのハーベストムーンガラが、その年の農業の成果を展示し、コミュニティプロジェクトを支援することに焦点を当てていることを述べています。選択肢A「音楽とダンスでエンターテイメントを提供する」は、ガラが洗練された夜会であることを示唆していますが、中心的な焦点ではありません。選択肢B「その年の農業の成果を展示し、コミュニティプロジェクトを支援する」は、地元の農産物の展示とサイレントオークションが行われ、収益が地元の教育と保全活動に向けられることを述べており、ガラの主要な目的です。選択肢C「地元の観光を促進し、町の経済を向上させる」は、ガラが地域の農家をショーケースとしていることから間接的な影響があるかもしれませんが、中心的な焦点ではありません。選択肢D「最も古い住民を生涯の貢献で称える」は、文章中には言及されていません。したがって、正しい答えはBです。
  //       `,
  //     },
  //   ],
  // },
];
