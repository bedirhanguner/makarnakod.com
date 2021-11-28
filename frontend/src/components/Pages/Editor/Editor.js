import { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

const languageList = [
  { value: "c_cpp", label: "c++" },
  { value: "java", label: "java" },
  { value: "python", label: "python" },
  { value: "c_cpp", label: "c" },
  { value: "csharp", label: "c#" },
  { value: "javascript", label: "javascript" },
  { value: "ruby", label: "ruby" },
  { value: "golang", label: "go" },
  { value: "swift", label: "swift" },
];

const languageTemplates = {
  python: `def uc_bes(n):
	output = []
	# kodunuzu buraya yazabilirsiniz.
	return output`,
  javascript: ``,
  golang: `package main

import "strconv"

func UcBes(n int) []string {
  var results = make([]string, n)
  // kodunuzu buraya yazabilirsiniz.
  return results
}`,
};

languageList.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang.value}`);
  require(`ace-builds/src-noconflict/snippets/${lang.value}`);
});

function Editor({ userInputReceiver, lang }) {
  const [code, setCode] = useState(languageTemplates[lang]);

  useEffect(() => {
    userInputReceiver(code, lang);
  }, [lang, code]);

  useEffect(() => {
    setCode(languageTemplates[lang]);
  }, [lang]);

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
