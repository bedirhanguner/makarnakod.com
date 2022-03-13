import { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import getCodeTemplates from "../../../helpers/codeTemplates";

const languageList = [
  { value: "python", label: "python" },
  { value: "javascript", label: "javascript" },
  { value: "golang", label: "go" },
  { value: "ruby", label: "ruby" },
  { value: "c_cpp", label: "c++" },
  { value: "java", label: "java" },
  { value: "c_cpp", label: "c" },
  { value: "csharp", label: "c#" },
  { value: "swift", label: "swift" },
];

const languageTemplates = getCodeTemplates();

languageList.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang.value}`);
  require(`ace-builds/src-noconflict/snippets/${lang.value}`);
});

function Editor({ userInputReceiver, lang }) {
  const [code, setCode] = useState(languageTemplates[lang]);

  useEffect(() => {
    userInputReceiver(code, lang);
  }, [userInputReceiver,lang, code]);

  useEffect(() => {
    setCode(languageTemplates[lang]);
  }, [userInputReceiver, lang]);

  return (
    <AceEditor
      style={{
        height: "60vh",
        width: "100%",
      }}
      mode={lang}
      theme="monokai"
      name="basic-code-editor"
      onChange={(currentCode) => setCode(currentCode)}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 0,
      }}
    />
  );
}

export default Editor;
