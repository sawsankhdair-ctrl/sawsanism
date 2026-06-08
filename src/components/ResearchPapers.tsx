"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Paper {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  date: string;
  category: string;
  content: string;
}

const papers: Paper[] = [
  {
    id: "product-impact-baking",
    title: "The Impact of Product Types on Baked Goods",
    titleAr: "تأثير أنواع المنتجات على المخبوزات",
    date: "2025",
    category: "Press & Media",
    description:
      "An article exploring how ingredient quality fundamentally affects the taste, texture, and overall experience of baked goods — from vanilla and chocolate to flour and butter.",
    content: `Sawsan Abukhudair
Press and Media
Dr. Tayseer Al Masharqa

تأثير أنواع المنتجات على المخبوزات

تلعب المنتجات المستخدمة في الوصفات دورا كبيرا في جودة المنتج. اذ ان مكون واحدا كفيل بأن يغير في الطعم والملمس وحتى في الاستمتاع بتذوقه. يعد الخبيز علم وفن في نفس الوقت. التقنية، الحرارة، والوقت تلعب دورا مهما، ولكن المفتاح السحري في عمل أي وصفة هي المكونات المستخدمة. على سبيل المثال، استخدام مكونات ذات قيمة عالية عند عمل بسكويت شوكولاتة يزيد من جودة الطعم والملمس. ولكن السؤال هو لماذا استخدام هذه المنتجات يجعل النتيجة أفضل من استخدام المكونات التجارية؟

المكونات ذات القيمة العالية مثل الفانيلا والشوكولاتة توفر لنا نكهات عميقة واصلية غير البدائل الصناعية. أيضا نوعية الطحين والزبدة تحدد لنا بنية المخبوزات ومدى طراوة الكيك او قرمشة البسكويت، فالدقيق الفاخر يضمن لنا توزيعا أفضل للغلوتين، مما يمنحنا مخبوزات هشة ومنتظمة القوام.

علاوة على ذلك، تلعب جودة الدهون والسكريات دوراً حاسماً في التفاعلات الكيميائية أثناء الخبز. فالزبدة الطبيعية، على سبيل المثال، لا تمنح المخبوزات طعماً غنياً فحسب، بل تساهم في خلق طبقات هشة وقوام يذوب في الفم بفضل درجة انصهارها المثالية. كما أن اختيار نوع السكر، سواء كان سكر القصب الخام أو السكر البني الغني بالدبس، يؤثر مباشرة على عملية "الكرملة" وتفاعل "مايار"، مما يعطي المخبوزات عمقاً في النكهة ولوناً دافئاً وجذاباً. إن هذه التفاصيل الدقيقة في اختيار جودة المحليات والدهون هي ما يحول الوصفة العادية إلى تجربة فاخرة تداعب الحواس.

الخبيز هو علم دقيق لذا جودة المواد الرافعة مثل البيكينج باودر وطزاجة البيض تلعب دورا أساسيا في نضج العجين وارتفاعه بشكل سليم داخل الفرن. المكونات الجيدة تمنح المخبوزات لونا ذهبيا طبيعيا ورائحة لا تقاوم، كما انها تساعد في إبقاء المنتج طازجا لفترة أطول دون ان يفقد طراوته.

في الختام، يمكن القول إن الخبيز هو استثمار في الجودة قبل كل شيء. إن اختيار المكونات الفاخرة ليس مجرد رفاهية، بل هو الأساس لضمان نجاح العملية العلمية والحسية التي تحدث داخل الفرن. فالمخبوزات الرائعة تبدأ من الرفوف التي نختار منها موادنا، حيث تشكل المكونات الأصيلة "الروح" التي تمنح المنتج نهائي طابعه الخاص وهويته الفريدة. ففي عالم المخبوزات، الجودة هي دائماً المكون السري الذي لا يمكن تزييفه.`,
  },
  {
    id: "jerusalem-kaak",
    title: "Jerusalem Kaak — Salah al-Din Street",
    titleAr: "كعك القدس. شارع صلاح الدين",
    date: "June 15, 2025",
    category: "Journalistic Writing",
    description:
      "A journalistic piece covering Jerusalem's iconic sesame bread (kaak), told through multiple news writing formats — from simple news to narrative storytelling.",
    content: `سوسن ابوخضير (24044951)
Journalistic Writing final
الاحد15/06/2025

كعك القدس. شارع صلاح الدين

الخبر البسيط
في ساعات الصباح الباكر، في شوارع القدس القديمة، يبيع خبازون فلسطينيون كعك القدس الطازج، الذي يتميز بشكله البيضاوي المغطى بالسمسم، لأنه يعد جزءا أساسيا من العادات الصباحية لدى الكثير من الأهالي في المدينة.

الخبر الموسع
في اصباح القدس الباكرة، يصطف باعة الكعك على ارصفة المدينة القديمة، حاملين كعك القدس الشهير المغطى بالسمسم على عربات خشبية تقليدية. يقبل المواطنون والزوار على شرائه، لما يتميز به من طعم لذيذ وشكل بيضاوي فريد. يصنع الكعك من طحين القمح والخميرة ويخبز في افران بلدية قديمة. يعد هذا الكعك أحد رموز التراث الفلسطيني، حيث يرتبط بالذاكرة الجمعية للقدس واجوائها الشعبية، ويعد رمزا للصمود والهوية.

الخبر المركب
انتشرت رائحة الكعك المقدسي في ازقة البلدة القديمة، حيث يعرضه الخبازون الفلسطينيون على عرباتهم الخشبية المعتادة. كعك القدس، الذي يحضر من الطحين ويغطى بالسمسم، لا يزال يحظى بإقبال واسع من الأهالي والزوار، لما يمثله من رمز غذائي وتراثي يعكس هوية المدينة وتقاليدها القديمة.

خبر بين بين
في الآونة الأخيرة، لاحظ سكان القدس تغيرا طفيفا في طعم كعك القدس الشهير، الذي يباع يوميا على عربات الباعة قرب باب العمود، ورغم ان شكله البيضاوي ورائحته ما زالت كما هي، إلا ان بعض الزبائن تحدثوا عن نكهة مختلفة لم يعهدوها من قبل، مما اثار تساؤلات حول ما إذا كانت هناك تغييرات غير معلنة في مكونات الكعك او طريقة اعداده.

قصة خبرية قصيرة
في أحد ازقة البلدة القديمة في القدس، ومع بزوغ الفجر، يزين أبو يوسف عربته الخشبية بأرغفة الكعك المغطاة بالسمسم. يعلو صوته بندائه الشعبي: "صبح على حالك بكعكة من بلادك". يتوقف المارة، يبتسم الأطفال، ويختار الزبائن ارغفتهم بعناية. البعض يتناول الكعك مع الجبنة، وآخرون يفضلونه مع الزيت و الزعتر.

ورغم بساطة المشهد، إلا ان في طعمه شيئا من الذاكرة، وفي رائحته دفئ الانتماء. كعك القدس ليس مجرد خبز، انه طقس صباحي، ونكهة من صمود مدينة لا تنحني.

قصة خبرية قصيرة
في وسط سوق شعبي، جلس بائع البطيخ على طرف عربته الخشبية، يدخن سيجارته، وامامه جندي يصوب نحوه البندقية. الرجل لم يتحرك، ولم يخف، كأنه معتاد على هذا الموقف. كأن السلاح أصبح جزءا من يومه، مثل السيجارة، ومثل البطيخ. في هذه الصورة كرامة، صبر، وقوة لا تحتاج الى كلمات. مشهد يقول الكثير، بصمت شديد. مهما اشتد الخطر، يبقى الانسان واقفا، يكمل طريقه بهدوء و ثبات.`,
  },
  {
    id: "comparative-research-quotes",
    title: "Comparative Scientific Research Quotes — Journalism Concepts",
    titleAr: "اقتباسات لبحوث علمية مقارنة",
    date: "2025",
    category: "Academic Research",
    description:
      "A comprehensive comparative study on journalistic genres — news vs. articles, reportage vs. investigations, reports vs. articles, and reflections vs. essays — with scholarly citations.",
    content: `Sawsan Abukhudair
Dr. Tayseer Almasharqa
Press and Media

الخبر والمقال الصحفي

تعريف الخبر الصحفي
يُعدّ الخبر الصحفي العنصر الأساسي في العملية الإعلامية، وقد تعددت تعريفاته بحسب الباحثين:

"الخبر الصحفي هو وصف دقيق لحدث له أهمية من قبل شريحة من المجتمع، ويشترط فيه: الجدة، والأهمية، والتوقيت، والاهتمام الإنساني، والقرب"
المصدر: كلية العلوم الإنسانية والاجتماعية جامعة الملك سعود

"الخبر الصحفي — وفق وليام مولسبي هو وصف أو تقرير دقيق غير متحيز للحقائق الهامة حول واقعة جديدة تهم القراء"
المصدر: سطور - تعريف الخبر الصحفي

تعريف المقال الصحفي
"المقال الصحفي وسط بين المقال الأدبي والمقال العلمي؛ يأخذ من المقال الأدبي ذاتية الكاتب ونظرته الشخصية، ومن المقال العلمي الموضوعية والمنطقية وعرض النتائج بناءً على معطيات وبراهين"
المصدر: شبكة محرري الشرق الأوسط

"المقال الصحفي ليس موضوعاً إنشائياً، بل هو فكرة يتلقفها الكاتب من البيئة المحيطة به ويتأثر بها، يعبّر عنها بأسلوب يجمع بين الحديث العادي والنص المُحكم"
المصدر: المرجع الالكتروني للمعلوماتية

الربورتاج والتحقيق الصحفي

تعريف الربورتاج
"يقوم الربورتاج بتصوير الواقع ونقله إلى الجمهور، وهو — كما يقول الدكتور سامي ذبيان — تصوير بالكلمات تتحول معه الكلمة والجملة إلى الكاميرا"
المصدر: جامعة عبد الحميد ابن باديس مستغانم

تعريف التحقيق الصحفي
"التحقيق الصحفي فن يقوم على خبر، أو فكرة، أو مشكلة، أو قضية يلتقطها الصحفي من المجتمع، ثم يقوم بجمع البيانات والمعلومات والآراء المتعلقة بالموضوع"
المصدر: Ontrainers

التقرير والمقال الصحفي

تعريف التقرير الصحفي
"التقرير وصف تسجيلي ودقيق تقدم الصحيفة من خلاله في لغة سهلة واضحة جميع التفاصيل التي تهم القراء"
المصدر: المرجع الالكتروني للمعلوماتية

الفرق بين الخاطرة والمقال

تعريف الخاطرة
"الخاطرة إحدى الفنون النثرية المنتشرة في العصر الحديث، تُصنَّف في الأدب بين الشعر الحر والقصة القصيرة، فهي لا تلتزم بوزن ولا قافية، تجري بعفوية وتبتعد عن الإسهاب والتفصيلات"
المصدر: سطور`,
  },
  {
    id: "narrative-storytelling",
    title: "Narrative Storytelling — A Silent Scream",
    titleAr: "سرد قصصي",
    date: "2025",
    category: "Creative Writing",
    description:
      "A poignant narrative about Majed, a boy who screams in silence — exploring the hidden pain behind smiles and the importance of asking those we love how they truly feel.",
    content: `في بعض الاحيان، لا يكون الالم صاخباً كما نظن. هناك اشخاص يبتسمون وهم يتألمون من الداخل. مُخفين خلف هذه الابتسامة صراعاً لا يُرى ولا يُسمع. بعض هذه الصرخات تعيش في اعماق النفس، لا صوت لها ولا كلمات.

قصة ماجد، الفتى الذي كان يصرخ... ولكن في صمت.

في البداية لم يلاحظ أحد غياب ضحكة ماجد. كان ماجد لايزال يذهب إلى المدرسة، ويهز رأسه عندما يتحدث الناس، ويجيب بكلمات قليلة توحي انه بخير. لكن عينيه، اللتين كانتا مليئتان بالحياة، اصبحتا ساكنتين. كان يسير في يومه كأنه ليس موجوداً، وابتسامته كانت مثل قناع قديم.

كل صباح كان يقف امام المرآة ويصرخ. لكنه لم يصرخ بصوت، بل بعيونه، وبفكه المشدود، ويديه المرتجفتين. كان ينظر الى نفسه، ويتمنى لو ان احداً يشعر بتلك الصرخة التي لا يستطيع ان ينطق بها. لكن الناس كانوا يرون فتى عاديا.

كان يضحك عندما يطلب منه، ويقول "انا بخير"، مع ان صدره كان ثقيلا، وانفاسه متعبة. كل يوم كان ثقيلاً، وكل ليلة كانت حزينة. كان يستلقي على سريره، ينظر إلى السقف، ويعض شفتيه لكيلا يخرج الالم بصوت. كان يريد ان يبكي لكن الدموع لا تأتي. وكان يريد ان يتكلم، لكن الكلمات كانت محبوسة بالخوف، الخوف من ألا يفهمه أحد، فكان يصرخ في صمت.

ليس كل من يبتسم سعيد. بعض الناس يتألمون وهم صامتون. لذلك يجب ان نسأل عمن نحب، ونستمع إليهم. احياناً كلمة طيبة او سؤال بسيط يمكن ان ينقذ شخصاً يتألم بصمت، مثل ماجد...`,
  },
];

export default function ResearchPapers() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="research" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
            Academic & Creative Work
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Research Papers
          </h2>
          <div className="w-16 h-[2px] bg-[var(--accent)] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {papers.map((paper, i) => (
            <motion.article
              key={paper.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                  {paper.category}
                </span>
                <span className="text-xs text-[var(--muted)]">
                  {paper.date}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {paper.title}
              </h3>

              {paper.titleAr && (
                <p
                  className="text-base text-[var(--muted)] mb-4"
                  dir="rtl"
                  lang="ar"
                >
                  {paper.titleAr}
                </p>
              )}

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                {paper.description}
              </p>

              <button
                onClick={() =>
                  setExpandedId(expandedId === paper.id ? null : paper.id)
                }
                className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--foreground)] transition-colors font-medium"
              >
                {expandedId === paper.id ? "Close" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedId === paper.id ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {expandedId === paper.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 pt-6 border-t border-[var(--card-border)]"
                >
                  <div
                    className="prose prose-sm max-w-none text-[var(--muted)] leading-relaxed whitespace-pre-wrap"
                    dir="auto"
                  >
                    {paper.content}
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
