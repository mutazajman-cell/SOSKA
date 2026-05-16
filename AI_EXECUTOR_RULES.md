# AI EXECUTOR RULES — SOSKA

Use SOSKA_ARCHITECTURE.md and SOSKA_FOUNDATION.md as the source of truth.

Do not create a new architecture.
Do not create a new repository.
Do not delete existing project files.
Do not replace the project with unrelated code.

Work only inside the existing SOSKA repository.

Forbidden:
- no trading UI
- no radar UI
- no signal UI
- no terminal UI
- no green neon
- no dark trading dashboard
- no complex CRM/ERP
- no old JNP SIGNAL logic

Main product format:
Mobile-first web app by link first.
Android and iOS can come later.

Locked buyer flow:
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

Role separation:
Supplier ≠ Employee
Employee ≠ Expert Checker
Expert Checker ≠ Cargo
Cargo ≠ Supplier
AI Translator ≠ separate user

Employee:
Registers suppliers, manages supplier data, adds stock, updates stock, checks data freshness.

Expert Checker:
Checks one specific product in one specific deal, uses checklist, uploads inspection result.

Cargo:
Handles pickup, delivery, delivery statuses, Google Maps route.

Supplier:
Manages own products, prices, stock, chats, requests.

Admin:
Controls users, roles, suppliers, offers, checks, deliveries, chats, disputes.

UI requirement:
Light mobile-first interface.
White background.
White cards.
Simple Avito-style logic.
Large buttons.
Fixed bottom navigation like a mobile app.

Buyer bottom tabs:
Главная / Поиск / Избранное / Чаты / Профиль

Bottom navigation must stay visible at the bottom of the mobile screen and must not cover content.

Do not redesign the whole app unless directly asked.
Fix only the requested screen or bug.
