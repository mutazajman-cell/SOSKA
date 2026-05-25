/** Domain types — SOSKA_ARCHITECTURE.md */

export type Role = 'buyer' | 'supplier' | 'employee' | 'admin' | 'expert' | 'cargo';

export type Language = 'ru' | 'ur' | 'ar' | 'en';

export type UserStatus = 'active' | 'blocked' | 'pending';

export interface User {
  user_id: string;
  name: string;
  phone: string;
  email: string;
  role: Role;
  language: Language;
  status: UserStatus;
  created_at: string;
  last_active_at: string;
}

export type SupplierStatus = 'active' | 'pending' | 'suspended';

export interface Supplier {
  supplier_id: string;
  supplier_name: string;
  contact_person: string;
  phone: string;
  whatsapp: string;
  language: Language;
  location_area: string;
  google_maps_link: string;
  status: SupplierStatus;
  managed_by: string;
  stock_managed_by: 'supplier' | 'employee' | 'admin';
  notes_internal: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface SupplierLocation {
  location_id: string;
  supplier_id: string;
  label: string;
  area: string;
  google_maps_link: string;
}

export type ModelCategory = 'laptop' | 'tablet' | 'workstation';

export interface ModelLibraryItem {
  model_id: string;
  brand: string;
  model_name: string;
  generation: string;
  category: ModelCategory;
  short_description: string;
  full_description: string;
  hero_photo_url: string;
  specs_summary: string;
  status: 'active' | 'draft';
  created_at: string;
  updated_at: string;
}

export interface Configuration {
  configuration_id: string;
  model_id: string;
  cpu: string;
  ram: string;
  ssd: string;
  screen_size: string;
  screen_type: string;
  gpu: string;
  grade: string;
  extra_specs: string;
  status: 'active' | 'draft';
}

export type StockStatus = 'Active' | 'Needs update' | 'Out of stock' | 'Hidden' | 'Rejected';

export type OfferSource =
  | 'supplier_added'
  | 'supplier_updated'
  | 'employee_added'
  | 'employee_updated'
  | 'admin_added'
  | 'imported';

export interface Offer {
  offer_id: string;
  supplier_id: string;
  location_id: string;
  model_id: string;
  configuration_id: string;
  price: number;
  currency: string;
  stock_status: StockStatus;
  quantity: number;
  condition_status: string;
  source: OfferSource;
  updated_by_user_id: string;
  updated_by_role: Role;
  last_updated_at: string;
  visibility_status: 'visible' | 'hidden';
  internal_note: string;
}

export type ChatType = 'product_chat' | 'check_chat' | 'delivery_chat' | 'support_chat';

export interface ChatThread {
  chat_id: string;
  type: ChatType;
  deal_id?: string;
  offer_id?: string;
  buyer_user_id?: string;
  supplier_id?: string;
  title: string;
  last_message_preview: string;
  updated_at: string;
}

export interface ChatMessage {
  message_id: string;
  chat_id: string;
  sender_role: Role | 'system';
  originalText: string;
  translatedText: string;
  created_at: string;
}

export type DealStatus =
  | 'Searching'
  | 'Chat started'
  | 'Supplier replied'
  | 'Availability confirmed'
  | 'Check requested'
  | 'Check in progress'
  | 'Check approved'
  | 'Check rejected'
  | 'Delivery requested'
  | 'Delivery in progress'
  | 'Delivered'
  | 'Completed'
  | 'Cancelled'
  | 'Issue';

export interface Deal {
  deal_id: string;
  buyer_user_id: string;
  offer_id: string;
  status: DealStatus;
  updated_at: string;
}

export type CheckStatus =
  | 'Requested'
  | 'Assigned'
  | 'In progress'
  | 'Approved'
  | 'Rejected'
  | 'Issue found'
  | 'Cancelled';

export interface CheckRequest {
  check_id: string;
  deal_id: string;
  status: CheckStatus;
  expert_user_id?: string;
  created_at: string;
}

export type DeliveryStatus =
  | 'Requested'
  | 'Assigned'
  | 'Accepted'
  | 'Pickup started'
  | 'Picked up'
  | 'In transit'
  | 'Delivered'
  | 'Issue'
  | 'Cancelled';

export interface DeliveryRequest {
  delivery_id: string;
  deal_id: string;
  status: DeliveryStatus;
  cargo_user_id?: string;
  maps_hint: string;
  created_at: string;
}

export interface InternalNote {
  note_id: string;
  entity_type: string;
  entity_id: string;
  author_user_id: string;
  body: string;
  created_at: string;
}

export interface AuditLogEntry {
  log_id: string;
  actor_user_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  created_at: string;
}
