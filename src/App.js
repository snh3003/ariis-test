import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";
import HeaderNav from './assets/components/header-nav';
import Photo from './assets/components/photo';

const unityContext = new UnityContext({
  loaderUrl: "Build1/Build/UnityLoader.js",
  dataUrl: "Build1/Build/Builds.json",
  frameworkUrl: "Build1/Build/Builds.wasm.framework.unityweb",
  codeUrl: "Build1/Build/Builds.wasm.code.unityweb",
});

function App() {
  return (
    <div className="App">
      <header>
        <HeaderNav />
        <Photo />
      </header>
      <p>Hello</p>
      <Unity unityContext = {unityContext} />
    </div>
  );
}

export default App;
