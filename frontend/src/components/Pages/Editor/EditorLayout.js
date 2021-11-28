import { React, useState } from "react";
import Select from "react-select";

import Editor from "./Editor";
import { Button } from "../../Button/Button";
import submitCode from "../../../helpers/submitCode";

import "./EditorLayout.css";

const options = [
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

function EditorLayout() {
  const [data, setData] = useState({
    problemId: "fizzbuzz",
    code: "",
    language: "python",
  });

  const editorToLayout = (code, lang) => {
    setData({
      problemId: "fizzbuzz",
      code: code,
      language: lang,
    });
  };

  return (
    <>
      <div className="editor">
        <div className="editor__info">
          <div className="editor__selectbox">
            <Select
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              menuPortalTarget={document.body}
              options={options}
              defaultValue={{
                label: options.find((lang) => lang.value === data.language)
                  .label,
                value: data.language,
              }}
              onChange={(lang) => setData({ ...data, language: lang.value })}
            />
          </div>
          <div className="editor__logos">
            <i class="fas fa-expand"></i>
          </div>
          <div className="editor__logos">
            <i class="fas fa-undo"></i>
          </div>
        </div>
        <div className="editor__container">
          <Editor userInputReceiver={editorToLayout} lang={data.language} />
        </div>
        <div className="editor__submit">
          <Button buttonStyle="btn--outline" onClick={() => submitCode(data)}>
            Çalıştır
          </Button>
        </div>
        <div className="editor__output">
          <div className="editor__output__header">sonuç:</div>
          <div className="editor__output__content">falan böyle sonuç</div>
        </div>
      </div>
    </>
  );
}

export default EditorLayout;
