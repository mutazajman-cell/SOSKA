# IMPLEMENTATION PROMPT — INDEX.HTML

Use `SOSKA_ARCHITECTURE.md` as the main source of truth.

Use `AI_EXECUTOR_RULES.md` as mandatory anti-drift rules.

Task:
Create or fix a simple mobile-first web version of SOSKA in the existing repository.

Work only in the current repository:
`aljihazdirector-web/SOSKA`

Main target file:
`index.html`

Use only:
- HTML
- CSS
- vanilla JavaScript
- mock data inside `index.html`

Do not use:
- backend
- npm
- Expo
- React Native
- Rork
- Cursor Agent
- Android/iOS app
- new repository

Forbidden:
- no trading UI
- no radar UI
- no signal UI
- no terminal UI
- no green neon
- no dark trading dashboard
- no complex CRM/ERP
- no old JNP SIGNAL logic

Main Buyer flow:
Buyer Home
→ vertical model list
→ selected model
→ configurations ONLY for selected model
→ selected configuration
→ seller offers ONLY for selected configuration
→ product card
→ chat / request check / request delivery / Google Maps

Data structure:
Model → Configuration → Offer → Seller

Do not show configurations from other models.
Do not show offers from other configurations.

Use models:
1. Lenovo ThinkPad T14 Gen 5
2. Dell Latitude 5440
3. Panasonic Toughbook FZ-55

Use suppliers:
1. Al Noor Computers — Industrial Area, Sharjah
2. Gulf Tech Laptops — Rolla, Sharjah
3. Desert Devices — Al Majaz, Sharjah

Use AED prices only.
Do not add RUB.

Required screens:
1. Entry screen
2. Buyer flow
3. Supplier dashboard
4. Employee dashboard
5. Expert dashboard
6. Cargo dashboard
7. Admin dashboard

Entry screen:
- SOSKA name
- language selection: Russian / Urdu / Arabic / English
- role selection: Buyer / Supplier / Employee / Admin / Expert / Cargo
- clear warning: Employee ≠ Expert

Buyer screen:
- model search
- vertical model list
- model cards
- View configurations button
- configurations only for selected model
- seller offers only for selected configuration
- product card
- actions: Chat, Request Check, Request Delivery, Open Google Maps

Supplier dashboard:
- Products
- Add/edit offer
- Requests/chats
- Stock update
- Profile

Employee dashboard:
- Supplier registration
- Supplier list
- Supplier detail
- Stock entry
- Data freshness
- Employee notes

Expert dashboard:
- Check request detail
- Inspection checklist
- Upload check result
- Expert chat

Cargo dashboard:
- Delivery detail
- Cargo chat
- Status update
- Open Google Maps route

Admin dashboard:
- User management
- Supplier management
- Model library
- Offers moderation
- Chats monitoring
- Checks management
- Delivery management
- Disputes/issues

Role separation:
Employee registers suppliers, manages supplier data, adds stock, updates stock and checks data freshness.

Expert checks one specific product in one specific deal, uses inspection checklist and uploads check result.

Cargo handles pickup, delivery, delivery statuses and Google Maps route.

Supplier manages own products, prices, stock, chats and requests.

Admin controls users, roles, suppliers, offers, checks, deliveries, chats and disputes.

Design:
- light
- mobile-first
- white background
- white cards
- simple Avito-style logic
- vertical model cards
- large clear buttons
- no overloaded dashboard
- no horizontal featured carousel as main logic

Required bottom navigation:
The app must have fixed bottom navigation like a real mobile app.

Buyer bottom tabs:
- Главная
- Поиск
- Избранное
- Чаты
- Профиль

Supplier bottom tabs:
- Товары
- Добавить
- Заявки
- Чаты
- Профиль

Employee bottom tabs:
- Поставщики
- Добавить
- Проверка данных
- Задачи
- Профиль

Expert bottom tabs:
- Запросы
- В работе
- Завершено
- Чат
- Профиль

Cargo bottom tabs:
- Доставки
- В пути
- Завершено
- Чат
- Профиль

Admin bottom tabs:
- Пользователи
- Товары
- Проверки
- Доставки
- Чаты

Bottom navigation must:
- stay fixed at the bottom of the mobile screen
- use simple icons and labels
- highlight active tab
- not cover content
- add bottom padding to main content
- work in mobile browser
- not be replaced by desktop top menu

Product card sticky actions:
- Chat
- Request Check
- Request Delivery
- Open Google Maps

Manual checks after implementation:
1. Entry → Buyer
2. Buyer Home shows vertical models
3. Lenovo → only Lenovo configurations
4. Dell → only Dell configurations
5. Panasonic → only Panasonic configurations
6. Configuration → sellers only for selected configuration
7. Product card → Chat / Check / Delivery / Maps
8. Bottom buttons visible on mobile screen
9. Bottom buttons do not cover cards
10. Employee and Expert are not mixed

If there is an error, fix only the specific bug.
Do not redesign the whole app.
Do not change roles.
Do not change buyer flow.
Do not add backend.
Do not add npm.
Do not add new features.

Commit message:
`Add simple SOSKA web app implementation prompt`
