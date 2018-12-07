# react-native-SI-deviceinfo
get equipment infomation

# react-native-sidevice-info

## Getting started

`$ npm install react-native-sidevice-info --save`

### Mostly automatic installation

`$ react-native link react-native-sidevice-info`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-sidevice-info` and add `RNSideviceInfo.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSideviceInfo.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNSideviceInfoPackage;` to the imports at the top of the file
  - Add `new RNSideviceInfoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-sidevice-info'
  	project(':react-native-sidevice-info').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-sidevice-info/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-sidevice-info')
  	```


## Usage
```javascript
import RNSideviceInfo from 'react-native-sidevice-info';

// TODO: What to do with the module?
RNSideviceInfo;
```
