import React from 'react';
import PDFViewer from '../../shared/PDFViewer';
import QuillEditor from '../../shared/QuillEditor';
import { UserAssignment } from '../../../types/assignment';
import ErrorBoundary from '../../shared/ErrorBoundary';

interface AssignmentContentProps {
  assignment: UserAssignment;
  content: string;
  onChange: (value: string) => void;
}

export default function AssignmentContent({ 
  assignment, 
  content, 
  onChange 
}: AssignmentContentProps) {
  const isCompleted = assignment.status === 'completed';

  console.log('AssignmentContent render:', { 
    pdfPath: assignment.assignment.pdf_path,
    content: content?.substring(0, 100),
    isCompleted 
  });

  return (
    <div className="flex-1 grid grid-cols-2 gap-4 min-h-0 max-h-full overflow-hidden">
      <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
        <ErrorBoundary>
          <PDFViewer pdfUrl={assignment.assignment.pdf_path} />
        </ErrorBoundary>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
        <ErrorBoundary>
          <QuillEditor
            value={content}
            onChange={onChange}
            readOnly={isCompleted}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}
