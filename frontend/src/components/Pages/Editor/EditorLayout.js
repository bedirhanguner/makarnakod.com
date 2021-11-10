import React from 'react';
import Select from 'react-select'

import Editor from './Editor';
import './EditorLayout.css';

const options = [
    { value: 'c++', label: 'c++' },
    { value: 'java', label: 'java' },
    { value: 'python', label: 'python' },
    { value: 'c', label: 'c' },
    { value: 'c#', label: 'c#' },
    { value: 'javascript', label: 'javascript' }, 
    { value: 'ruby', label: 'ruby' },
    { value: 'go', label: 'go' },
    { value: 'swift', label: 'swift' }
  ]

function EditorLayout() {
    return (
        <>
            <div className='editor'>
                <div className='editor__info'>
                    <div className='editor__selectbox'>
                        <Select options={options} />
                    </div>
                    <div className='editor__logos'>
                        <i class="fas fa-expand"></i>
                    </div>
                    <div className='editor__logos'>
                        <i class="fas fa-undo"></i>
                    </div>
                </div>
                <Editor/>
                <div className='editor__output'>
                    <div className='editor__output__header'>
                        sonuç:
                    </div>
                    <div className='editor__output__content'>
                        falan böyle sonuç
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditorLayout;