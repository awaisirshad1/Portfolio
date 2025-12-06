import { ParentComponent } from "solid-js";
import "./codesection.css"

interface CodeSectionProps {
  code: string;
}

const highlightJSON = (json: string): string => {
  var formattedJson;
  try {
    formattedJson = JSON.stringify(
      JSON.parse(json), null, 2
    );
  }
  catch {
    formattedJson = json;
  }

  return formattedJson.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|(\b\d+\.?\d*\b))/g,
    (match) => {
      if (/^"/.test(match)) {
        return /:$/.test(match)
          ? `<span class="key">${match}</span>`
          : `<span class="string">${match}</span>`;
      }
      if (/true|false/.test(match)) return `<span class="boolean">${match}</span>`;
      if (/null/.test(match)) return `<span class="null">${match}</span>`;
      return `<span class="number">${match}</span>`;
    }
  );
}

const CodeSection: ParentComponent<CodeSectionProps> = (props) => {
  return(
    <div class="codesection-wrapper">
      <pre class="codeblock">
        <code innerHTML={highlightJSON(props.code)}/>
      </pre>
    </div>
  );
}

export default CodeSection;