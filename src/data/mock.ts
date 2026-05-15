import type {
  ChatThread,
  CheckRequest,
  Configuration,
  Deal,
  DeliveryRequest,
  ModelLibraryItem,
  Offer,
  Supplier,
  SupplierLocation,
  User,
} from '../types';

export const mockUsers: User[] = [
  {
    user_id: 'u_buyer',
    name: 'Amina K.',
    phone: '+971500000001',
    email: 'buyer@example.com',
    role: 'buyer',
    language: 'en',
    status: 'active',
    created_at: '2026-04-01',
    last_active_at: '2026-05-14',
  },
  {
    user_id: 'u_supplier',
    name: 'Sharjah Tech Hub',
    phone: '+971500000002',
    email: 'shop@example.com',
    role: 'supplier',
    language: 'en',
    status: 'active',
    created_at: '2026-03-10',
    last_active_at: '2026-05-13',
  },
];

export const mockSuppliers: Supplier[] = [
  {
    supplier_id: 's1',
    supplier_name: 'Al Nahda Laptops',
    contact_person: 'Rashid',
    phone: '+971501111111',
    whatsapp: '+971501111111',
    language: 'en',
    location_area: 'Al Nahda, Sharjah',
    google_maps_link: 'https://www.google.com/maps/search/?api=1&query=Al+Nahda+Sharjah',
    status: 'active',
    managed_by: 'u_emp',
    stock_managed_by: 'employee',
    notes_internal: 'Preferred partner for ThinkPad stock checks.',
    created_by: 'u_emp',
    created_at: '2026-02-01',
    updated_at: '2026-05-10',
  },
  {
    supplier_id: 's2',
    supplier_name: 'Industrial Area Electronics',
    contact_person: 'Priya',
    phone: '+971502222222',
    whatsapp: '+971502222222',
    language: 'en',
    location_area: 'Industrial Area 10',
    google_maps_link: 'https://www.google.com/maps/search/?api=1&query=Sharjah+Industrial+Area+10',
    status: 'active',
    managed_by: 'u_emp',
    stock_managed_by: 'supplier',
    notes_internal: '',
    created_by: 'u_emp',
    created_at: '2026-01-15',
    updated_at: '2026-05-12',
  },
];

export const mockLocations: SupplierLocation[] = [
  {
    location_id: 'l1',
    supplier_id: 's1',
    label: 'Showroom A',
    area: 'Al Nahda',
    google_maps_link: mockSuppliers[0].google_maps_link,
  },
  {
    location_id: 'l2',
    supplier_id: 's2',
    label: 'Warehouse B',
    area: 'Industrial 10',
    google_maps_link: mockSuppliers[1].google_maps_link,
  },
];

export const mockModels: ModelLibraryItem[] = [
  {
    model_id: 'm_t14',
    brand: 'Lenovo',
    model_name: 'ThinkPad T14 Gen 5',
    generation: 'Gen 5',
    category: 'laptop',
    short_description: '14" business laptop, latest gen Intel/AMD options.',
    full_description: 'Premium business line with strong keyboard and serviceability.',
    hero_photo_url: 'https://dummyimage.com/800x600/f4f5f7/5c6570.png&text=T14+Gen5',
    specs_summary: '14" · DDR5 · NVMe · MIL-SPEC chassis',
    status: 'active',
    created_at: '2026-01-01',
    updated_at: '2026-05-01',
  },
  {
    model_id: 'm_lat5440',
    brand: 'Dell',
    model_name: 'Latitude 5440',
    generation: '2023',
    category: 'laptop',
    short_description: '14" corporate workhorse with long battery options.',
    full_description: 'Latitude 5000 series focused on fleet manageability.',
    hero_photo_url: 'https://dummyimage.com/800x600/f4f5f7/5c6570.png&text=Latitude+5440',
    specs_summary: '14" · FHD/IPS · Thunderbolt',
    status: 'active',
    created_at: '2026-01-02',
    updated_at: '2026-05-02',
  },
  {
    model_id: 'm_fz55',
    brand: 'Panasonic',
    model_name: 'Toughbook FZ-55',
    generation: 'Mk2',
    category: 'laptop',
    short_description: 'Semi-rugged modular 14" field laptop.',
    full_description: 'Hot-swappable batteries, optional GPU and barcode modules.',
    hero_photo_url: 'https://dummyimage.com/800x600/f4f5f7/5c6570.png&text=FZ-55',
    specs_summary: '14" · Modular · Rugged',
    status: 'active',
    created_at: '2026-01-03',
    updated_at: '2026-05-03',
  },
];

export const mockConfigurations: Configuration[] = [
  {
    configuration_id: 'c_t14_1',
    model_id: 'm_t14',
    cpu: 'Intel Core Ultra 7',
    ram: '16GB',
    ssd: '512GB',
    screen_size: '14"',
    screen_type: 'IPS WUXGA',
    gpu: 'Integrated',
    grade: 'A',
    extra_specs: 'Backlit keyboard · IR camera',
    status: 'active',
  },
  {
    configuration_id: 'c_lat_1',
    model_id: 'm_lat5440',
    cpu: 'Intel i7-1365U',
    ram: '16GB',
    ssd: '512GB',
    screen_size: '14"',
    screen_type: 'FHD IPS',
    gpu: 'Integrated',
    grade: 'A-',
    extra_specs: 'Smartcard reader',
    status: 'active',
  },
  {
    configuration_id: 'c_fz_1',
    model_id: 'm_fz55',
    cpu: 'Intel i5-1345U',
    ram: '16GB',
    ssd: '512GB',
    screen_size: '14"',
    screen_type: 'FHD touchscreen',
    gpu: 'Optional AMD dGPU',
    grade: 'B+',
    extra_specs: 'Barcode module placeholder',
    status: 'active',
  },
];

export const mockOffers: Offer[] = [
  {
    offer_id: 'o1',
    supplier_id: 's1',
    location_id: 'l1',
    model_id: 'm_t14',
    configuration_id: 'c_t14_1',
    price: 3450,
    currency: 'AED',
    stock_status: 'Active',
    quantity: 3,
    condition_status: 'Open box, full warranty',
    source: 'supplier_added',
    updated_by_user_id: 'u_supplier',
    updated_by_role: 'supplier',
    last_updated_at: '2026-05-12',
    visibility_status: 'visible',
    internal_note: 'Verify serial with supplier.',
  },
  {
    offer_id: 'o2',
    supplier_id: 's2',
    location_id: 'l2',
    model_id: 'm_t14',
    configuration_id: 'c_t14_1',
    price: 3299,
    currency: 'AED',
    stock_status: 'Needs update',
    quantity: 1,
    condition_status: 'Used, excellent',
    source: 'employee_updated',
    updated_by_user_id: 'u_emp',
    updated_by_role: 'employee',
    last_updated_at: '2026-05-11',
    visibility_status: 'visible',
    internal_note: 'Price may change after restock.',
  },
  {
    offer_id: 'o3',
    supplier_id: 's1',
    location_id: 'l1',
    model_id: 'm_lat5440',
    configuration_id: 'c_lat_1',
    price: 2890,
    currency: 'AED',
    stock_status: 'Active',
    quantity: 5,
    condition_status: 'Refurbished, 1-year shop warranty',
    source: 'employee_added',
    updated_by_user_id: 'u_emp',
    updated_by_role: 'employee',
    last_updated_at: '2026-05-10',
    visibility_status: 'visible',
    internal_note: '',
  },
];

export const mockDeals: Deal[] = [
  {
    deal_id: 'd1',
    buyer_user_id: 'u_buyer',
    offer_id: 'o1',
    status: 'Chat started',
    updated_at: '2026-05-14',
  },
];

export const mockChecks: CheckRequest[] = [
  {
    check_id: 'chk1',
    deal_id: 'd1',
    status: 'Assigned',
    expert_user_id: 'u_expert',
    created_at: '2026-05-14',
  },
];

export const mockDeliveries: DeliveryRequest[] = [
  {
    delivery_id: 'del1',
    deal_id: 'd1',
    status: 'Requested',
    maps_hint: 'Pickup: Al Nahda showroom → Buyer: Muwailih',
    created_at: '2026-05-14',
  },
];

export const mockChats: ChatThread[] = [
  {
    chat_id: 'ch1',
    type: 'product_chat',
    deal_id: 'd1',
    title: 'ThinkPad T14 · Offer o1',
    last_message_preview: 'Supplier: We can hold unit #2 until tomorrow.',
    updated_at: '2026-05-14T10:20:00Z',
  },
  {
    chat_id: 'ch2',
    type: 'check_chat',
    deal_id: 'd1',
    title: 'Expert inspection thread',
    last_message_preview: 'Expert: ETA 45 minutes at location.',
    updated_at: '2026-05-14T09:55:00Z',
  },
  {
    chat_id: 'ch3',
    type: 'delivery_chat',
    deal_id: 'd1',
    title: 'Delivery coordination',
    last_message_preview: 'Cargo: Please confirm building access code.',
    updated_at: '2026-05-14T08:10:00Z',
  },
  {
    chat_id: 'ch4',
    type: 'support_chat',
    title: 'SOSKA support',
    last_message_preview: 'How can we help with your order?',
    updated_at: '2026-05-13T18:00:00Z',
  },
];

export function getModel(id: string): ModelLibraryItem | undefined {
  return mockModels.find((m) => m.model_id === id);
}

export function getConfiguration(id: string): Configuration | undefined {
  return mockConfigurations.find((c) => c.configuration_id === id);
}

export function getSupplier(id: string): Supplier | undefined {
  return mockSuppliers.find((s) => s.supplier_id === id);
}

export function offersForConfiguration(configurationId: string): Offer[] {
  return mockOffers.filter((o) => o.configuration_id === configurationId);
}
