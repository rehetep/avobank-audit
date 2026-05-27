"use client"

import { motion } from "framer-motion"
import { Target, Globe, Megaphone, Smartphone, Users, MessageSquare } from "lucide-react"

const sections = [
  {
    id: "strategy",
    icon: Target,
    title: "Стратегия и коммуникация",
    rating: "Средне",
    observations: [
      "На сайте AVO говорит о простоте, честности и удобстве.",
      "В публичной коммуникации банк выглядит как современный цифровой игрок.",
      "Но в рекламе и на первых экранах сильнее всего звучит тема быстрого кредита и 0%, а не простого ежедневного банковского опыта."
    ],
    problems: [
      "Обещание банка шире, чем то, что клиент реально видит в первом касании.",
      "Основной акцент уходит в быстрый кредитный оффер, а не в понятную ценность банка в целом.",
      "Клиенту не всегда сразу ясно, чем AVO лучше конкурентов, кроме скорости и яркого обещания."
    ],
    impact: "Когда банк говорит про простоту и честность, а клиент сначала видит только яркий оффер, это создаёт риск разрыва между ожиданием и реальным опытом. Из-за этого часть людей может быстрее потерять доверие и начать сравнивать банк с другими."
  },
  {
    id: "website",
    icon: Globe,
    title: "Сайт и удобство",
    rating: "Средне",
    observations: [
      "Главная страница сразу показывает ключевые продукты: микрозайм, кредитную карту, вклад и виртуальную карту.",
      "Сайт больше работает как витрина и переводит человека в приложение.",
      "В признанном сервисе PageSpeed Insights — mobile-версия avobank.uz отрабатывает критично плохо.",
      "Часть важных условий видна не сразу: сначала клиент видит простое обещание, а детали узнаёт позже."
    ],
    problems: [
      "Сайт не всегда помогает человеку принять решение до установки приложения.",
      "Не везде ясно, что будет следующим шагом и сколько шагов вообще впереди.",
      "Важные условия раскрываются позже, чем продающее обещание."
    ],
    impact: "Если реклама приводит человека на не самый быстрый и не самый понятный путь, часть людей уходит после клика. Это неудобно для потенциального клиента и может снижать отдачу от рекламы."
  },
  {
    id: "advertising",
    icon: Megaphone,
    title: "Реклама",
    rating: "Средне",
    observations: [
      "В прошлой выгрузке Meta Ads видно много объявлений с одним и тем же действием: установить приложение.",
      "Тексты часто повторяют похожие обещания: до 100 млн, 0%, быстро, без залога и поручителей, 24/7.",
      "Google Ads показывают ту же логику: быстрый кредит, 0%, минимум усилий со стороны клиента.",
      "Креативы аккуратные и узнаваемые, но во многом очень похожи друг на друга."
    ],
    problems: [
      "Реклама однотипная, поэтому банку сложнее показать разницу между продуктами и сегментами клиентов.",
      "Человеку не всегда ясно, почему выбрать именно AVO, а не другой банк с похожим обещанием.",
      "Реклама обещает очень простой путь, но не готовит клиента к тому, что дальше будет установка приложения и другие шаги."
    ],
    impact: "Реклама может привлекать внимание, но если предложение выглядит слишком одинаковым и слишком общим, часть людей уходит. Ещё часть людей доходит до приложения, но дальше понимает, что путь длиннее и сложнее, чем ожидалось."
  },
  {
    id: "app",
    icon: Smartphone,
    title: "Приложение и отзывы",
    rating: "Средне",
    observations: [
      "Приложение AVO уже выглядит заметным игроком на рынке и собирает большую аудиторию.",
      "По открытым отзывам повторяются жалобы на ошибки, нестабильную работу, поддержку и непонимание условий.",
      "На витрине Google Play есть тревожный сигнал в блоке Data safety, который для банка выглядит чувствительно.",
      "Банк отвечает не на все сигналы одинаково заметно."
    ],
    problems: [
      "Если клиент скачал приложение после рекламы, но не смог быстро начать пользоваться продуктом, банк может терять новых клиентов.",
      "Повторяющиеся жалобы на вход, работу приложения или условия бьют по доверию сильнее, чем у многих других сервисов.",
      "Карточка приложения в сторах сама по себе уже влияет на решение клиента, ставить приложение или нет."
    ],
    impact: "Для AVO приложение уже стало почти главным входом в продукт. Поэтому любые жалобы на вход, регистрацию, работу или поддержку могут мешать банку доводить потенциальных клиентов до реального использования продукта."
  },
  {
    id: "social",
    icon: MessageSquare,
    title: "Соцсети",
    rating: "Средне",
    observations: [
      "AVO заметен через рекламу и часть публичных площадок, включая LinkedIn.",
      "В открытом поле полезного объясняющего контента видно меньше, чем сильных рекламных обещаний.",
      "Соцсети и публичная коммуникация не всегда работают как место, где банку проще снять сомнения клиента."
    ],
    problems: [
      "Публичные каналы банка выглядят скорее, как поддержка бренда, чем как помощь клиенту в принятии решения.",
      "Мало простого объяснения продуктов, условий и частых вопросов.",
      "Банк недополучает доверие там, где мог бы вселять уверенность в клиента ещё до установки приложения или заявки."
    ],
    impact: "Для банка соцсети важны не только как витрина. Они должны помогать клиенту понять продукт и почувствовать, что с банком будет спокойно и понятно. Если этого мало, часть сомнений остаётся до самого конца и клиент может выбрать более понятный бренд."
  }
]

export function DetailedAuditSections() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/30 mb-6">
            <span className="text-sm text-muted-foreground">Детальный анализ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Анализ по каналам
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подробный разбор каждого digital-канала на основе открытых данных
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              {/* Section Header */}
              <div className="p-6 lg:p-8 border-b border-border bg-muted/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E1A47] flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#FAFF00]/20 border border-[#FAFF00]/40">
                    <span className="text-sm font-semibold text-[#2E1A47]">
                      Оценка: {section.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-6 lg:p-8 space-y-6">
                {/* Observations */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Что видно по открытым данным
                  </h4>
                  <ul className="space-y-3">
                    {section.observations.map((obs, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E1A47] mt-2 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problems */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Главные проблемы
                  </h4>
                  <ol className="space-y-3">
                    {section.problems.map((problem, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-600 text-sm font-semibold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-foreground leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-xl bg-[#2E1A47]/5 border border-[#2E1A47]/10">
                  <h4 className="text-sm font-semibold text-[#2E1A47] mb-2">
                    Почему это проблема для банка
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
