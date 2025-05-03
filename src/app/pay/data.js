// Sample product data
export const sampleProducts = [
  { id: 1, name: 'Premium T-shirt', price: 29.99, quantity: 2 },
  { id: 2, name: 'Athletic Shoes', price: 89.99, quantity: 1 },
];

// Payment methods data
export const paymentMethods = [
  {
    id: 'card',
    name: 'Card',
    icon: 'card',
    isCustomIcon: false,
  },
  {
    id: 'yape',
    name: 'Yape',
    icon: 'Y',
    isCustomIcon: true,
    bgColor: 'bg-purple-600',
    qrCode: true,
    phoneNumber: '999 888 777',
  },
  {
    id: 'plin',
    name: 'Plin',
    icon: 'P',
    isCustomIcon: true,
    bgColor: 'bg-green-500',
    qrCode: true,
    phoneNumber: '999 111 222',
  },
  {
    id: 'tunki',
    name: 'Tunki',
    icon: 'T',
    isCustomIcon: true,
    bgColor: 'bg-blue-500',
    qrCode: true,
    phoneNumber: '999 333 444',
  },
  {
    id: 'mobileBanking',
    name: 'Mobile Banking',
    icon: 'mobile',
    isCustomIcon: false,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: 'P',
    isCustomIcon: true,
    bgColor: 'bg-blue-600',
    redirectMessage: true,
  },
];

// Bank accounts data for mobile banking
export const bankAccounts = [
  {
    id: 'bcp',
    name: 'Bank of Credit',
    shortName: 'BCP',
    accountNumber: '193-2548268-0-48',
    bgColor: 'bg-red-600',
  },
  {
    id: 'bbva',
    name: 'BBVA Continental',
    shortName: 'BBVA',
    accountNumber: '0011-0457-02-00178956',
    bgColor: 'bg-blue-900',
  },
  {
    id: 'interbank',
    name: 'Interbank',
    shortName: 'IB',
    accountNumber: '200-3072345678-14',
    bgColor: 'bg-orange-600',
  },
];

// Countries for shipping address
export const countries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'ES', name: 'Spain' },
  { code: 'MX', name: 'Mexico' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CO', name: 'Colombia' },
  { code: 'CL', name: 'Chile' },
];

// Shipping cost and tax rate
export const shippingCost = 4.99;
export const taxRate = 0.16; // 16%
