/**
 * @providesModule react-native-device-info
 */
import { Platform, NativeModules, Dimensions } from 'react-native';

var SIRNDeviceInfo = NativeModules.SIRNDeviceInfo;

if (!SIRNDeviceInfo && Platform.OS === 'web') {
        SIRNDeviceInfo = require('./web');
}

const devicesWithNotch = [
  {
    brand: 'Apple',
    model: 'iPhone X',
  },
  {
    brand: 'Apple',
    model: 'iPhone XS',
  },
  {
    brand: 'Apple',
    model: 'iPhone XS Max',
  },
  {
    brand: 'Apple',
    model: 'iPhone XR',
  },
  {
    brand: 'Asus',
    model: 'ZenFone 5',
  }, 
  {
    brand: 'Asus',
    model: 'ZenFone 5z',
  },
  {
    brand: 'Huawei',
    model: 'P20',
  },
  {
    brand: 'Huawei',
    model: 'P20 Plus',
  },
  {
    brand: 'Huawei',
    model: 'P20 Lite',
  },
  {
    brand: 'Huawei',
    model: 'Honor 10',
  },
  {
    brand: 'Huawei',
    model: 'Nova 3',
  },
  {
    brand: 'Huawei',
    model: 'Nova 3i',
  },
  {
    brand: 'Oppo',
    model: 'R15',
  },
  {
    brand: 'Oppo',
    model: 'R15 Pro',
  },
  {
    brand: 'Oppo',
    model: 'F7',
  },
  {
    brand: 'Vivo',
    model: 'V9',
  },
  {
    brand: 'Vivo',
    model: 'X21',
  },
  {
    brand: 'Vivo',
    model: 'X21 UD',
  },
  {
    brand: 'OnePlus',
    model: '6',
  },
  {
    brand: 'OnePlus',
    model: 'A6003',
  },
  {
    brand: 'OnePlus',
    model: 'OnePlus A6003',
  },
  {
    brand: 'LG',
    model: 'G7',
  },
  {
    brand: 'LG',
    model: 'G7 ThinQ',
  },
  {
    brand: 'LG',
    model: 'G7+ ThinQ',
  },
  {
    brand: 'Leagoo',
    model: 'S9',
  },
  {
    brand: 'Oukitel',
    model: 'U18',
  },
  {
    brand: 'Sharp',
    model: 'Aquos S3',
  },
  {
    brand: 'Nokia',
    model: '6.1 Plus',
  },
];

export default {
  getUniqueID: function() {
    return SIRNDeviceInfo.uniqueId;
  },
  getInstanceID: function() {
    return SIRNDeviceInfo.instanceId;
  },
  getSerialNumber: function() {
    return SIRNDeviceInfo.serialNumber;
  },
  getIPAddress: function() {
    return SIRNDeviceInfo.getIpAddress();
  },
  getMACAddress: function() {
    return SIRNDeviceInfo.getMacAddress();
  },
  getDeviceId: function() {
    return SIRNDeviceInfo.deviceId;
  },
  getManufacturer: function() {
    return SIRNDeviceInfo.systemManufacturer;
  },
  getModel: function() {
    return SIRNDeviceInfo.model;
  },
  getBrand: function() {
    return SIRNDeviceInfo.brand;
  },
  getSystemName: function() {
    return SIRNDeviceInfo.systemName;
  },
  getSystemVersion: function() {
    return SIRNDeviceInfo.systemVersion;
  },
  getAPILevel: function() {
    return SIRNDeviceInfo.apiLevel;
  },
  getBundleId: function() {
    return SIRNDeviceInfo.bundleId;
  },
  getApplicationName: function() {
    return SIRNDeviceInfo.appName;
  },
  getBuildNumber: function() {
    return SIRNDeviceInfo.buildNumber;
  },
  getVersion: function() {
    return SIRNDeviceInfo.appVersion;
  },
  getReadableVersion: function() {
    return SIRNDeviceInfo.appVersion + '.' + SIRNDeviceInfo.buildNumber;
  },
  getDeviceName: function() {
    return SIRNDeviceInfo.deviceName;
  },
  getUserAgent: function() {
    return SIRNDeviceInfo.userAgent;
  },
  getDeviceLocale: function() {
    return SIRNDeviceInfo.deviceLocale;
  },
  getDeviceCountry: function() {
    return SIRNDeviceInfo.deviceCountry;
  },
  getTimezone: function() {
    return SIRNDeviceInfo.timezone;
  },
  getFontScale: function() {
    return SIRNDeviceInfo.fontScale;
  },
  isEmulator: function() {
    return SIRNDeviceInfo.isEmulator;
  },
  isTablet: function() {
    return SIRNDeviceInfo.isTablet;
  },
  is24Hour: function() {
    return SIRNDeviceInfo.is24Hour;
  },
  isPinOrFingerprintSet: function() {
    return SIRNDeviceInfo.isPinOrFingerprintSet;
  },
  hasNotch: function() {
    return devicesWithNotch.findIndex(item => item.brand === SIRNDeviceInfo.brand && item.model === SIRNDeviceInfo.model) !== -1;
  },
  getFirstInstallTime: function() {
    return SIRNDeviceInfo.firstInstallTime;
  },
  getInstallReferrer: function() {
    return SIRNDeviceInfo.installReferrer;
  },
  getLastUpdateTime: function() {
    return SIRNDeviceInfo.lastUpdateTime;
  },
  getPhoneNumber: function() {
    return SIRNDeviceInfo.phoneNumber;
  },
  getCarrier: function() {
    return SIRNDeviceInfo.carrier;
  },
  getTotalMemory: function() {
    return SIRNDeviceInfo.totalMemory;
  },
  getMaxMemory: function() {
    return SIRNDeviceInfo.maxMemory;
  },
  getTotalDiskCapacity: function() {
    return SIRNDeviceInfo.totalDiskCapacity;
  },
  getFreeDiskStorage: function() {
    return SIRNDeviceInfo.freeDiskStorage;
  },
  getBatteryLevel: function() {
    return SIRNDeviceInfo.getBatteryLevel();
  },
  isLandscape: function() {
    const { height, width } = Dimensions.get('window');
    return width >= height;
  },
  isAirPlaneMode: function() {
    return SIRNDeviceInfo.isAirPlaneMode();
  }
};