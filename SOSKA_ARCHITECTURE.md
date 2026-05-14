# SOSKA_ARCHITECTURE.md

## FOUNDATION SOSKA — SOURCE OF TRUTH

This document is the main source of truth for the SOSKA project.

All future commands for Cursor, Rork, or any other executor must rely only on this document.

Old JNP SIGNAL logic is forbidden.

Forbidden:
- trading
- radar
- signal terminal
- terminal UI
- green neon style
- dark trading dashboard
- complex CRM/ERP interface
- old Rork / JNP SIGNAL logic
- rebuilding the old broken project

---

## 1. What SOSKA is

SOSKA is a clean mobile-first Avito-style application for the Sharjah laptop/electronics market.

Core logic:

Buyer searches product → selects model → selects configuration → sees seller offers → opens product card → chats inside SOSKA → requests check if needed → requests delivery if needed → deal completed.

SOSKA remains the intermediary.

Buyer stays inside the app.

Supplier may answer through WhatsApp later, but buyer-side deal logic stays inside SOSKA.

---

## 2. Required roles

The app must include all roles from the beginning:

1. Buyer
2. Supplier
3. Employee / SOSKA staff
4. Admin / Owner
5. Expert checker
6. Cargo

Important separation:

- Employee is NOT Expert.
- Employee registers suppliers, updates stock, checks data freshness, manages supplier information.
- Expert checks a specific product in a specific deal.
- Cargo handles pickup and delivery.
- Supplier manages their own offers and stock.
- Buyer sees only simple product/search/chat/check/delivery flow.
- Admin controls system roles, moderation, assignments and disputes.

---

## 3. Interface style

Required UI style:

- light
- simple
- mobile-first
- Avito-style browsing
- clean cards
- no visual noise
- no terminal look
- no trading dashboards
- no complex CRM screens for buyer

---

## 4. Languages

On entry, each user selects interface language:

- Russian
- Urdu
- Arabic
- English

Language affects interface buttons, menus, statuses and system messages.

---

## 5. AI translator

AI translator is not a separate role.

AI translator works only inside chats/messages.

It translates messages between buyer, supplier, employee, expert, cargo and admin.

---

## 6. Data logic

Main product structure:

Model → Configuration → Offer → Seller

Do not build offers only by model.

Every offer must belong to a configuration.

Example:

Model: Lenovo ThinkPad T14 Gen 5  
Configuration: i5 / 16GB RAM / 512GB SSD / 14 inch  
Offer: price, condition, stock, seller  
Seller: specific supplier / shop / location

---

## 7. Main data entities

Required entities:

- Users
- Suppliers
- Supplier Locations
- Model Library
- Configurations
- Offers
- Chats
- Messages
- Deals
- Check Requests
- Delivery Requests
- Internal Notes
- Audit Log

---

## 8. Users

User fields:

- user_id
- name
- phone
- email
- role
- language
- status
- created_at
- last_active_at

Roles:

- buyer
- supplier
- employee
- admin
- expert
- cargo

---

## 9. Suppliers

Supplier fields:

- supplier_id
- supplier_name
- contact_person
- phone
- whatsapp
- language
- location_area
- google_maps_link
- status
- managed_by
- stock_managed_by
- notes_internal
- created_by
- created_at
- updated_at

Important fields:

- managed_by = employee_id or admin_id
- stock_managed_by = supplier / employee / admin

---

## 10. Model Library

Model Library fields:

- model_id
- brand
- model_name
- generation
- category
- short_description
- full_description
- hero_photo_url
- specs_summary
- status
- created_at
- updated_at

Photos must be:

- white background
- no ads
- no text
- no watermarks

---

## 11. Configurations

Configuration fields:

- configuration_id
- model_id
- cpu
- ram
- ssd
- screen_size
- screen_type
- gpu
- grade
- extra_specs
- status

Offers must be linked to configuration_id, not only model_id.

---

## 12. Offers

Offer fields:

- offer_id
- supplier_id
- location_id
- model_id
- configuration_id
- price
- currency
- stock_status
- quantity
- condition_status
- source
- updated_by_user_id
- updated_by_role
- last_updated_at
- visibility_status
- internal_note

Stock statuses:

- Active
- Needs update
- Out of stock
- Hidden
- Rejected

Sources:

- supplier_added
- supplier_updated
- employee_added
- employee_updated
- admin_added
- imported

---

## 13. Buyer screens

Required Buyer screens:

- Buyer Home / Search
- Model Results
- Configuration Selection
- Seller Offers
- Product Card
- Buyer Chat
- Check Request
- Delivery Request
- Buyer Deals / Orders

Buyer can:

- search product
- choose model
- choose configuration
- compare seller offers
- open product card
- chat inside app
- request check
- request delivery
- open Google Maps route
- contact SOSKA support

Buyer cannot:

- edit supplier stock
- change prices
- see internal notes
- see internal supplier database
- assign expert or cargo
- moderate suppliers

---

## 14. Supplier screens

Required Supplier screens:

- Supplier Dashboard
- Supplier Products
- Add / Edit Offer
- Supplier Requests / Chats
- Stock Update
- Supplier Profile

Supplier can:

- add product
- choose model from Model Library
- choose/create configuration
- set price
- update stock
- update condition
- reply to requests
- use WhatsApp later if enabled

Supplier cannot:

- edit other suppliers
- assign expert
- assign cargo
- see admin analytics
- change system-level deal statuses without permission

---

## 15. Employee screens

Employee is a separate mandatory role.

Employee is NOT Expert.

Required Employee screens:

- Employee Dashboard
- Supplier Registration
- Supplier List
- Supplier Detail
- Employee Stock Entry
- Data Freshness
- Employee Notes

Employee can:

- register new suppliers
- present SOSKA to suppliers
- create supplier profile
- add supplier contacts
- add supplier locations
- enter stock for supplier
- update supplier stock
- mark data as employee updated
- check data freshness
- mark offer Active / Needs update / Out of stock / Hidden
- escalate issue to admin

Employee cannot:

- act as Expert checker
- confirm technical condition as expert
- close expert inspection
- change expert result
- manage user permissions
- delete critical data without admin

---

## 16. Expert checker screens

Expert checker works only on a specific inspection request.

Required Expert screens:

- Expert Dashboard
- Check Request Detail
- Inspection Checklist
- Upload Check Result
- Expert Chat

Expert can:

- accept inspection request
- inspect product
- upload photos
- upload video if supported
- leave comments
- set result: Approved / Rejected / Issue found
- close inspection

Expert cannot:

- register suppliers
- manage supplier stock
- change supplier price
- assign cargo
- moderate users
- see full supplier database unless needed

---

## 17. Cargo screens

Cargo handles only pickup/delivery.

Required Cargo screens:

- Cargo Dashboard
- Delivery Detail
- Google Maps route button
- Delivery Status Update
- Cargo Chat

Cargo statuses:

- Requested
- Assigned
- Accepted
- Pickup started
- Picked up
- In transit
- Delivered
- Issue
- Cancelled

Cargo cannot:

- change product price
- update supplier stock
- inspect technical condition as expert
- register suppliers
- access admin panel

---

## 18. Admin screens

Required Admin screens:

- Admin Dashboard
- User Management
- Supplier Management
- Model Library Management
- Offers Moderation
- Chats Monitoring
- Checks Management
- Delivery Management
- Disputes / Issues

Admin can:

- manage users
- assign roles
- moderate suppliers
- moderate offers
- assign employee
- assign expert
- assign cargo
- resolve disputes
- hide bad offers
- view audit log

Admin is control and management, not replacement for all roles.

---

## 19. Deal flow

Main deal flow:

1. Buyer opens app.
2. Buyer selects language.
3. Buyer searches model or category.
4. Buyer selects model.
5. Buyer selects configuration.
6. Buyer sees seller offers.
7. Buyer opens product card.
8. Buyer starts chat inside SOSKA.
9. Supplier confirms availability.
10. Employee may update data freshness if needed.
11. Buyer requests check if needed.
12. Expert checks product and uploads result.
13. Buyer decides to continue or cancel.
14. Buyer requests delivery if needed.
15. Cargo handles pickup/delivery.
16. Deal becomes Completed.

Deal statuses:

- Searching
- Chat started
- Supplier replied
- Availability confirmed
- Check requested
- Check in progress
- Check approved
- Check rejected
- Delivery requested
- Delivery in progress
- Delivered
- Completed
- Cancelled
- Issue

---

## 20. Chats

Chat is the central working area of the deal.

Chat types:

- product_chat
- check_chat
- delivery_chat
- support_chat

Chat supports:

- text
- photos
- system statuses
- translated messages
- admin connection
- employee connection
- expert connection
- cargo connection

AI translator works only inside chat messages.

---

## 21. Check request

Check flow:

1. Buyer presses Request Check.
2. Check Request is created.
3. Admin or system assigns Expert checker.
4. Expert receives request.
5. Expert inspects product.
6. Expert uploads result.
7. Buyer sees result.
8. Buyer continues or cancels.

Check statuses:

- Requested
- Assigned
- In progress
- Approved
- Rejected
- Issue found
- Cancelled

---

## 22. Delivery request

Delivery flow:

1. Buyer presses Request Delivery.
2. Delivery Request is created.
3. Admin or system assigns Cargo.
4. Cargo receives request.
5. Cargo opens Google Maps route.
6. Cargo updates delivery status.
7. Buyer sees status.
8. Delivery completes.

---

## 23. WhatsApp support

Support button must be in the top-right area of the app.

Current placeholder:

SOSKA_SUPPORT_WHATSAPP = TO_BE_DEFINED

Do not use phone numbers from old projects unless explicitly confirmed.

---

## 24. Google Maps

For supplier locations, check requests and delivery requests, app should have button:

Open route in Google Maps

Do not build complex in-app map in the first version.

---

## 25. First implementation task for Cursor

Create a clean mobile-first SOSKA app skeleton with all roles, role-based dashboards, navigation, mock data and visible flows.

Do not build backend first unless required by the framework.

Start with a working visual prototype that can be opened and inspected.

Mock data examples:

- Lenovo ThinkPad T14 Gen 5
- Dell Latitude 5440
- Panasonic FZ55

Separate:

- mock data
- components
- screens
- navigation
- types/models

Deliverable:

A working mobile-first SOSKA app skeleton showing all required roles and flows.

---

## 26. MASTER PROMPT FOR CURSOR

PROJECT: SOSKA

You are building a new application from zero.

Use SOSKA_ARCHITECTURE.md as the only source of truth.

Do not reuse old JNP SIGNAL logic, UI, terminology, data structure, or code.

Strictly forbidden:
- trading
- radar
- signal terminal
- terminal UI
- green neon style
- dark trading dashboard
- complex CRM/ERP interface
- old Rork/JNP SIGNAL logic
- rebuilding the old broken project

Goal:
Build a clean mobile-first Avito-style application for the Sharjah laptop/electronics market.

Core product logic:
Buyer searches product → selects model → selects configuration → sees seller offers → opens product card → chats inside SOSKA → requests check if needed → requests delivery if needed → deal completed.

Required roles from the beginning:
1. Buyer
2. Supplier
3. Employee / SOSKA staff
4. Admin / Owner
5. Expert checker
6. Cargo

Important:
Employee is NOT Expert.
Expert checks products in specific deals.
Cargo handles delivery.
Supplier manages own offers.
SOSKA remains the intermediary.

First implementation task:
Create the clean application skeleton with all role screens, navigation, mock data and role-based dashboards.

Before coding:
Summarize the planned file structure and confirm that no old JNP SIGNAL logic is being used.
