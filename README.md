# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# react-complete-guide"

### 46. 컴포넌트 파일 구성하기

특정 기능을 가진 컴포넌트 별로 폴더 구성

- UI
- Expenses

### 47.대체 함수 문법(syntax)

**Arrow function expressions**

Function abc (props) {} ==> const abc = (props) => {}

간편해서 사용하는 문법 선호하지 않으면 사용 할 필요 없음

### 49. 모듈 소개

- Handleing Events
- Updating the UI & Working with "State"
- A Closer Look At Components & State

### 52. "State"와 함께 일하기

state 함수를 호출하는 것은 어떤 변수에 새로운 값을 할당하는 것이 아니라 메모리 어딘가에서 리액트로 관리한다.

실행 후 그 다음에서 바로 html 값이 변하는게 아님\
setTitle("Updated!");\
console.log(title);

### 53. "useState" 훅 자세히 살펴보기

1. State는 컴포넌트의 인스턴스별로 나뉘어져 있다.
2. State가 업데이트되면 재 실행 된다.
3. 동일한 컴포넌트를 여러개 만들었다고 모두가 한번에 변경되지 않는다.
4. State는 모두 개별로 존재한다.

### 54. State는 여러 가지 방법으로 업데이트 될 수 있습니다!

지금까지, 우리는 유저 이벤트 발생 시 상태를 업데이트 했습니다 (예: click)\
이는 매우 일반적이지만 상태 업데이트에 꼭 필요한 것은 아닙니다. 어떤 이유로든 상태를 업데이트할 수 있습니다.\
코스 후반부에서, 완료된 Http 요청을 볼 수 있지만(여기서 반환된 Http 응답을 기반으로 상태를 업데이트하려고 함) 타이머가 만료되어 상태를 업데이트할 수도 있습니다 ( setTimeout()으로 설정).
