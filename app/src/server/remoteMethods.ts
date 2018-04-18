import Engine from '../core/engine';

export default function getRemoteMethods(engine: Engine) {
  return {
    getFiles() {
      return JSON.stringify(engine.testFiles.read(engine.root));
    },
    run(watch: boolean, testFile: string = '', testName: string = '') {
      engine.testRunner.start(watch, testFile, testName);
      return JSON.stringify({});
    },
    stop() {
      engine.testRunner.kill();
      return JSON.stringify({});
    },
    filterFileInWatch(fileName: string) {
      engine.testRunner.runTestByFileInteractive(fileName);
      return JSON.stringify({});
    },
    filterTestInWatch(fileName: string, testName: string) {
      engine.testRunner.runTestByTestNameInteractive(fileName, testName);
      return JSON.stringify({});
    },
    updateSnapshot(fileName: string, testName: string) {
      return engine.testRunner.updateSnapshot(fileName, testName);
    },
    launchInEditor(fileName: string, lineNumber: number) {
      engine.launchEditor(fileName, lineNumber);
      return JSON.stringify({});
    },
    startDebugging(fileName: string, testName: string) {
      return engine.testRunner.startInspect(fileName, testName);
    }
  };
}
