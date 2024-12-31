import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AssignmentHeader from './AssignmentHeader';
import AssignmentContent from './AssignmentContent';
import { useAssignment } from '../../../hooks/useAssignment';
import LoadingSpinner from '../../shared/LoadingSpinner';
import ErrorBoundary from '../../shared/ErrorBoundary';

export default function AssignmentViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    assignment,
    content,
    setContent,
    loading,
    error,
    saveContent,
    submitAssignment,
    lastSaved,
  } = useAssignment(id!);

  console.log('AssignmentViewer render:', { loading, error, assignment });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !assignment) {
    console.error('Assignment error:', error);
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="h-full flex flex-col">
      <AssignmentHeader
        assignment={assignment}
        lastSaved={lastSaved}
        onSave={saveContent}
        onSubmit={submitAssignment}
      />
      <ErrorBoundary>
        <AssignmentContent
          assignment={assignment}
          content={content}
          onChange={setContent}
        />
      </ErrorBoundary>
    </div>
  );
}
