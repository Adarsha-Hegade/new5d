import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { modules, formats } from './QuillToolbar';
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export default function QuillEditor({ value, onChange, readOnly = false }: QuillEditorProps) {
  const editorRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      editor.enable(!readOnly);
    }
  }, [readOnly]);

  return (
    <div className="h-full flex flex-col">
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={value || ''}
        onChange={onChange}
        modules={readOnly ? { toolbar: false } : modules}
        formats={formats}
        readOnly={readOnly}
        className="h-full flex flex-col"
      />
      <style jsx global>{`
        .quill {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }
        .ql-container {
          flex: 1 1 auto;
          overflow-y: auto;
          min-height: 0;
        }
        .ql-editor {
          height: 100%;
          overflow-y: auto;
        }
        .ql-toolbar {
          flex: 0 0 auto;
          border-top: none !important;
          border-left: none !important;
          border-right: none !important;
          background: white;
        }
        .ql-container {
          border: none !important;
          font-size: 16px;
          background: white;
        }
      `}</style>
    </div>
  );
}
