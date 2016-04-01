Pod::Spec.new do |s|
  s.name         = "react-native-file-picker"
  s.version      = "0.0.1"
  s.license      = "MIT"
  s.homepage     = "https://github.com/Lichwa/react-native-file-picker"
  s.summary      = "A React Native module that allows you to use the native UIFilePickerController UI to select a file from the device library"
  s.source       = { :git => "https://github.com/Lichwa/react-native-file-picker" }
  s.source_files  = "ios/*.{h,m}"
  
  s.platform     = :ios, "7.0"
  s.dependency 'React'
end
