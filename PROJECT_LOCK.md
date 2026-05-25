# PROJECT_LOCK

1. dealcore.me — рабочий web-site в интернете.

2. Цель сайта:
покупатель ищет модель, видит офферы поставщиков, открывает оффер, общается с поставщиком через внутренний чат с AI-переводчиком.

3. Это не мобильное приложение, не CRM, не dashboard.

4. В будущем приложение возможно, но сейчас продукт = сайт.

5. Supabase уже существует и является backend/data layer.

6. Supabase project:
- wafrjwwkdpokzfbpjgoo
- https://wafrjwwkdpokzfbpjgoo.supabase.co

7. Подтверждённые таблицы:
- profiles
- suppliers
- models
- model_configurations
- offers
- check_requests
- delivery_requests
- app_messages
- audit_log

8. Для будущего чата нужны:
- chat_threads
- chat_messages

Migration сейчас не применять.

9. MVP данные:
- 3 suppliers
- 10 offers per supplier
- 1 buyer

10. Масштаб:
- 1000 suppliers
- 30000–50000 offers
- 3000 buyers

11. Buyer flow:
dealcore.me → search model → offers → offer detail → chat with supplier → AI translation → Проверка / Оплата

12. Offer card fields:
- model
- configuration
- price
- quantity
- supplier

13. Chat message fields:
- id
- thread_id / chatId
- offerId
- supplierId
- buyerId
- senderRole
- originalText
- originalLanguage
- translatedText
- translatedLanguage
- translationStatus
- createdAt

14. AI translator is mandatory.

Mock allowed:
- translatedText = "[AI translation] " + originalText
- translationStatus = "translated"

15. Code layering rule:
- DATA LAYER
- SERVICE LAYER
- UI LAYER

16. Forbidden:
- do not remove AI translator
- do not create random demo mess
- do not build CRM/dashboard/trading/radar
- do not add unnecessary flows
- do not ask owner to do technical work that executor can do

17. Executor rule:
- read PROJECT_LOCK.md before work
- show diff before commit
- do not commit without approval
