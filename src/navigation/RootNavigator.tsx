import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HeaderActions } from '../components/HeaderActions';
import { colors } from '../theme';
import type { RootStackParamList } from './types';

import GateScreen from '../screens/GateScreen';

import BuyerHomeSearchScreen from '../screens/buyer/BuyerHomeSearchScreen';
import BuyerModelResultsScreen from '../screens/buyer/BuyerModelResultsScreen';
import BuyerConfigurationSelectScreen from '../screens/buyer/BuyerConfigurationSelectScreen';
import BuyerSellerOffersScreen from '../screens/buyer/BuyerSellerOffersScreen';
import BuyerProductCardScreen from '../screens/buyer/BuyerProductCardScreen';
import BuyerChatScreen from '../screens/buyer/BuyerChatScreen';
import BuyerCheckRequestScreen from '../screens/buyer/BuyerCheckRequestScreen';
import BuyerDeliveryRequestScreen from '../screens/buyer/BuyerDeliveryRequestScreen';
import BuyerDealsScreen from '../screens/buyer/BuyerDealsScreen';

import SupplierDashboardScreen from '../screens/supplier/SupplierDashboardScreen';
import SupplierProductsScreen from '../screens/supplier/SupplierProductsScreen';
import SupplierOfferEditorScreen from '../screens/supplier/SupplierOfferEditorScreen';
import SupplierChatsScreen from '../screens/supplier/SupplierChatsScreen';
import SupplierStockScreen from '../screens/supplier/SupplierStockScreen';
import SupplierProfileScreen from '../screens/supplier/SupplierProfileScreen';

import EmployeeDashboardScreen from '../screens/employee/EmployeeDashboardScreen';
import EmployeeSupplierRegisterScreen from '../screens/employee/EmployeeSupplierRegisterScreen';
import EmployeeSupplierListScreen from '../screens/employee/EmployeeSupplierListScreen';
import EmployeeSupplierDetailScreen from '../screens/employee/EmployeeSupplierDetailScreen';
import EmployeeStockEntryScreen from '../screens/employee/EmployeeStockEntryScreen';
import EmployeeDataFreshnessScreen from '../screens/employee/EmployeeDataFreshnessScreen';
import EmployeeNotesScreen from '../screens/employee/EmployeeNotesScreen';

import ExpertDashboardScreen from '../screens/expert/ExpertDashboardScreen';
import ExpertCheckDetailScreen from '../screens/expert/ExpertCheckDetailScreen';
import ExpertInspectionChecklistScreen from '../screens/expert/ExpertInspectionChecklistScreen';
import ExpertUploadResultScreen from '../screens/expert/ExpertUploadResultScreen';
import ExpertChatScreen from '../screens/expert/ExpertChatScreen';

import CargoDashboardScreen from '../screens/cargo/CargoDashboardScreen';
import CargoDeliveryDetailScreen from '../screens/cargo/CargoDeliveryDetailScreen';
import CargoStatusUpdateScreen from '../screens/cargo/CargoStatusUpdateScreen';
import CargoChatScreen from '../screens/cargo/CargoChatScreen';

import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import AdminUsersScreen from '../screens/admin/AdminUsersScreen';
import AdminSuppliersScreen from '../screens/admin/AdminSuppliersScreen';
import AdminModelLibraryScreen from '../screens/admin/AdminModelLibraryScreen';
import AdminOffersModerationScreen from '../screens/admin/AdminOffersModerationScreen';
import AdminChatsMonitoringScreen from '../screens/admin/AdminChatsMonitoringScreen';
import AdminChecksScreen from '../screens/admin/AdminChecksScreen';
import AdminDeliveryScreen from '../screens/admin/AdminDeliveryScreen';
import AdminDisputesScreen from '../screens/admin/AdminDisputesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.bg,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    primary: colors.primary,
  },
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Gate"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.bg },
          headerRight: () => <HeaderActions />,
        }}
      >
        <Stack.Screen name="Gate" component={GateScreen} options={{ headerShown: false }} />

        <Stack.Screen name="BuyerHomeSearch" component={BuyerHomeSearchScreen} options={{ title: 'SOSKA · Buyer' }} />
        <Stack.Screen name="BuyerModelResults" component={BuyerModelResultsScreen} options={{ title: 'Models' }} />
        <Stack.Screen name="BuyerConfigurationSelect" component={BuyerConfigurationSelectScreen} options={{ title: 'Configurations' }} />
        <Stack.Screen name="BuyerSellerOffers" component={BuyerSellerOffersScreen} options={{ title: 'Offers' }} />
        <Stack.Screen name="BuyerProductCard" component={BuyerProductCardScreen} options={{ title: 'Product' }} />
        <Stack.Screen name="BuyerChat" component={BuyerChatScreen} options={{ title: 'Chats' }} />
        <Stack.Screen name="BuyerCheckRequest" component={BuyerCheckRequestScreen} options={{ title: 'Check' }} />
        <Stack.Screen name="BuyerDeliveryRequest" component={BuyerDeliveryRequestScreen} options={{ title: 'Delivery' }} />
        <Stack.Screen name="BuyerDeals" component={BuyerDealsScreen} options={{ title: 'Deals' }} />

        <Stack.Screen name="SupplierDashboard" component={SupplierDashboardScreen} options={{ title: 'SOSKA · Supplier' }} />
        <Stack.Screen name="SupplierProducts" component={SupplierProductsScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="SupplierOfferEditor" component={SupplierOfferEditorScreen} options={{ title: 'Offer' }} />
        <Stack.Screen name="SupplierChats" component={SupplierChatsScreen} options={{ title: 'Chats' }} />
        <Stack.Screen name="SupplierStock" component={SupplierStockScreen} options={{ title: 'Stock' }} />
        <Stack.Screen name="SupplierProfile" component={SupplierProfileScreen} options={{ title: 'Profile' }} />

        <Stack.Screen name="EmployeeDashboard" component={EmployeeDashboardScreen} options={{ title: 'SOSKA · Employee' }} />
        <Stack.Screen name="EmployeeSupplierRegister" component={EmployeeSupplierRegisterScreen} options={{ title: 'Register supplier' }} />
        <Stack.Screen name="EmployeeSupplierList" component={EmployeeSupplierListScreen} options={{ title: 'Suppliers' }} />
        <Stack.Screen name="EmployeeSupplierDetail" component={EmployeeSupplierDetailScreen} options={{ title: 'Supplier' }} />
        <Stack.Screen name="EmployeeStockEntry" component={EmployeeStockEntryScreen} options={{ title: 'Stock entry' }} />
        <Stack.Screen name="EmployeeDataFreshness" component={EmployeeDataFreshnessScreen} options={{ title: 'Freshness' }} />
        <Stack.Screen name="EmployeeNotes" component={EmployeeNotesScreen} options={{ title: 'Notes' }} />

        <Stack.Screen name="ExpertDashboard" component={ExpertDashboardScreen} options={{ title: 'SOSKA · Expert' }} />
        <Stack.Screen name="ExpertCheckDetail" component={ExpertCheckDetailScreen} options={{ title: 'Check detail' }} />
        <Stack.Screen name="ExpertInspectionChecklist" component={ExpertInspectionChecklistScreen} options={{ title: 'Checklist' }} />
        <Stack.Screen name="ExpertUploadResult" component={ExpertUploadResultScreen} options={{ title: 'Result' }} />
        <Stack.Screen name="ExpertChat" component={ExpertChatScreen} options={{ title: 'Expert chat' }} />

        <Stack.Screen name="CargoDashboard" component={CargoDashboardScreen} options={{ title: 'SOSKA · Cargo' }} />
        <Stack.Screen name="CargoDeliveryDetail" component={CargoDeliveryDetailScreen} options={{ title: 'Delivery' }} />
        <Stack.Screen name="CargoStatusUpdate" component={CargoStatusUpdateScreen} options={{ title: 'Status' }} />
        <Stack.Screen name="CargoChat" component={CargoChatScreen} options={{ title: 'Cargo chat' }} />

        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} options={{ title: 'SOSKA · Admin' }} />
        <Stack.Screen name="AdminUsers" component={AdminUsersScreen} options={{ title: 'Users' }} />
        <Stack.Screen name="AdminSuppliers" component={AdminSuppliersScreen} options={{ title: 'Suppliers' }} />
        <Stack.Screen name="AdminModelLibrary" component={AdminModelLibraryScreen} options={{ title: 'Model library' }} />
        <Stack.Screen name="AdminOffersModeration" component={AdminOffersModerationScreen} options={{ title: 'Offers' }} />
        <Stack.Screen name="AdminChatsMonitoring" component={AdminChatsMonitoringScreen} options={{ title: 'Chats' }} />
        <Stack.Screen name="AdminChecks" component={AdminChecksScreen} options={{ title: 'Checks' }} />
        <Stack.Screen name="AdminDelivery" component={AdminDeliveryScreen} options={{ title: 'Deliveries' }} />
        <Stack.Screen name="AdminDisputes" component={AdminDisputesScreen} options={{ title: 'Disputes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
