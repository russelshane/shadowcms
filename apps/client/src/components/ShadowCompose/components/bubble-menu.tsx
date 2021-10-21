/**
 * @description Editor Bubble Menu
 * @author ShadowCMS
 */

import React from 'react';
import { BubbleMenu } from '@tiptap/react';
import { Editor } from '@tiptap/core';
import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  LinkOutlined,
  BackwardOutlined,
} from '@ant-design/icons';

type BubbleProps = {
  editor?: Editor;
};

const EditorBubbleMenu: React.FC<BubbleProps> = ({ editor }) => {
  /**
   * Function to set links to a specific sentence.
   * using .extendMarkRange from ProseMirror/TipTap
   */
  const setLink = () => {
    const url = window.prompt('URL');

    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url as string })
      .run();
  };

  return (
    <React.Fragment>
      {editor && (
        <BubbleMenu
          shouldShow={null}
          pluginKey="bubbleMenuOne"
          className="bubble-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            <BoldOutlined />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <ItalicOutlined />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <StrikethroughOutlined />
          </button>
          <button
            onClick={setLink}
            className={editor.isActive('link') ? 'is-active' : ''}
          >
            <LinkOutlined />
          </button>
          <button onClick={() => editor.chain().focus().unsetLink().run()}>
            <BackwardOutlined />
          </button>
        </BubbleMenu>
      )}
    </React.Fragment>
  );
};

export default EditorBubbleMenu;
