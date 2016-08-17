# Integrate LinkedIn SignIn with React-Native / Android ver.
##Reference
Inspired by https://github.com/jodybrewster/react-native-linkedin-login
You check all of complete source code diff at [here](https://github.com/ifndefdeadmau5/react-native-practice/commit/56a211ff741710e642742312f4acf99d9aef23f8)
##Instruction
1. First, make sure your initial react-native app installed properly and running on device.

2. install package via npm
  > ```npm install react-native-linkedin-login --save```

3. Modify **RNLinkedinLoginModule.java** at Android Studio
  > ```Just replace whole code with this [gist](https://gist.github.com/ifndefdeadmau5/c4ff4ee8014b18730aaa5f262102d152)```

4. Modify **android/settings.gradle**
  > ```You can basically follow a above(react-native-linkedin-login) github link, but you have to modify a path to set actual react-native-linkedin-login module’s path```

5. Add **onActivityResult()** on MainActivity.java
  > ```See diff```

6. Modify **getPackages()** on MainApplication.java
  > ```See diff```

7. Import **LinkedinLogin.js** 
  > Copy **node_modules/react-native-linkedin-login/src/LinkedinLogin.js** and create new folder under the root path name with ‘component’ and past it into  a new file.( component/LinkedinLogin.js )

8. Use LinkedinLogin.js on index.android.js to integrate with LinkedIn
  > ```See diff```

9. You’re done!


