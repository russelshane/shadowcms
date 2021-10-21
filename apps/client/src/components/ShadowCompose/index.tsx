/**
 * Shadow Compose v4.0.1
 *
 * @author D.R.S. for ShadowCMS
 */

import DayJS from 'dayjs';
import React from 'react';
import loadable from '@loadable/component';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import UTC from 'dayjs/plugin/utc';
import Timezone from 'dayjs/plugin/timezone';
import RandomColor from 'randomcolor';
import Document from '@tiptap/extension-document';
import DefaultExtensions from './extensions';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import LoadIframelyEmbeds from './handlers/load-embeds';
import EditorBubbleMenu from './components/bubble-menu';
import EditorFloatingMenu from './components/floating-menu';
import Placeholder from '@tiptap/extension-placeholder';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { useEffect, useState } from 'react';
import { ShadowComposeProps } from './types';
import { EditorContent, useEditor } from '@tiptap/react';
import { EditorProseMirror } from './styles/prosemirror';
import {
  EditorHeadline,
  EditorMain,
  EditorSummary,
  EditorTimestamp,
  EditorTop,
  EditorWrapper,
} from './styles/main';

/* Dynamic Components */
const Container = loadable(() => import('../../ui/Container'));

const ShadowCompose: React.FC<ShadowComposeProps> = ({ id, doc, provider, user }) => {
  /**
   * Initial Article and Interactive Document State
   */
  const [wordCount, setWordCount] = useState<any>(0);
  const [allowEmbeds, setAllowEmbeds] = useState(true);
  const [spellCheck, setSpellCheck] = useState(false);
  const [editorMenuActive, setEditorMenuActive] = useState<boolean>(false);
  const randomColor = RandomColor({
    luminosity: 'dark',
  });

  /**
   * Initialize advanced formats plugin for dayjs, "Do"
   * day type is needed for current editor timestamp
   */
  DayJS.extend(AdvancedFormat);
  DayJS.extend(Timezone);
  DayJS.extend(UTC);

  /**
   *  Initialize new prosemirror/tiptap instance with partial collaboration
   *  features. Default extensions comes from another file, as well as the
   *  configurations for it.
   */
  const ParagraphDocument = Document.extend({
    content: 'paragraph',
  });
  const editor = useEditor(
    {
      extensions: [
        ...(DefaultExtensions as any),
        /**
         * Using ShadowCMS' WebSockets server for the article's
         * body, headline and summary to be collaborative.
         */
        Collaboration.configure({
          document: doc,
        }),
        CollaborationCursor.configure({
          provider: provider,
          user: {
            name: user?.byline,
            color: randomColor,
          },
        }),
      ],
    },
    [],
  );

  /**
   * Tiptap editor component for the article's headline
   */
  const headlineEditor = useEditor({
    extensions: [
      ParagraphDocument,
      Paragraph,
      Text,
      Collaboration.configure({
        document: doc,
        field: 'headline',
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: user?.byline,
          color: randomColor,
        },
      }),
      Placeholder.configure({
        placeholder: 'Headline goes here...',
      }),
    ],
  });

  /**
   * TipTap editor component for the article's summary
   */
  const summaryEditor = useEditor({
    extensions: [
      ParagraphDocument,
      Paragraph,
      Text,
      Collaboration.configure({
        document: doc,
        field: 'summary',
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: user?.byline,
          color: randomColor,
        },
      }),
      Placeholder.configure({
        placeholder: 'Write a summary...',
      }),
    ],
  });

  /**
   * Load initial scripts for handling editor functions such as
   * embeds, images, interactive components, etc.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    /**
     * Using Iframely/Embedly for handling in-article embedded contents
     * API key is needed, can't be hidden as of 8/23/2021.
     */
    LoadIframelyEmbeds();

    /**
     * Always get current character count in article's body / contents
     */
    setWordCount(editor?.state.doc.textContent.split(' ').length);
  });

  return (
    <Container flexDirection="column">
      <EditorWrapper>
        <EditorMain>
          {/**
           * @description Article Headlines, Labels, Summary, Bylines & Timestamp
           */}
          <EditorTop>
            <EditorHeadline>
              <EditorContent
                editor={headlineEditor}
                autoComplete="false"
                autoCorrect="false"
                spellCheck={spellCheck}
                // onInput={() => {
                //   const cleanHeadline = headlineEditor?.getHTML().replace(/<\/?[^>]+(>|$)/g, "");
                //   dispatch({
                //     type: "SET_HEADLINE",
                //     payload: {
                //       text: `${cleanHeadline}`,
                //     },
                //   });
                // }}
                // onBlur={() => {
                //   SaveArticle({ dispatch, articleState, id, editor });
                // }}
              />
            </EditorHeadline>
            <EditorSummary>
              <EditorContent
                editor={summaryEditor}
                autoComplete="false"
                autoCorrect="false"
                spellCheck={spellCheck}
                // onInput={() => {
                //   const cleanSummary = summaryEditor?.getHTML().replace(/<\/?[^>]+(>|$)/g, "");
                //   dispatch({
                //     type: "SET_SUMMARY",
                //     payload: {
                //       text: `${cleanSummary}`,
                //     },
                //   });
                // }}
                // onBlur={() => {
                //   SaveArticle({ dispatch, articleState, id, editor });
                // }}
              />
            </EditorSummary>
            <EditorTimestamp>{DayJS().format('dddd, MMM Do')}</EditorTimestamp>
          </EditorTop>
          {/**
           * @description Article Body / Contents
           */}
          {editor && (
            <EditorProseMirror>
              <EditorContent editor={editor} autoCorrect="false" autoComplete="false" />
              <EditorBubbleMenu editor={editor} />
              <EditorFloatingMenu
                editor={editor}
                editorMenuActive={editorMenuActive}
                setEditorMenuActive={setEditorMenuActive}
                allowEmbeds={allowEmbeds}
              />
            </EditorProseMirror>
          )}
        </EditorMain>
      </EditorWrapper>
    </Container>
  );
};

export default ShadowCompose;
