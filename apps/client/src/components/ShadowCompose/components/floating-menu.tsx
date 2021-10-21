/**
 * @description Editor Floating Menu (Add "+" button on the side)
 * @author ShadowCMS
 */

import React, { useState } from 'react';
import { EditorAdd, EditorMenu } from '../styles/interactive';
import { FloatingMenu } from '@tiptap/react';
import {
  PlusOutlined,
  FontSizeOutlined,
  OrderedListOutlined,
  TwitterOutlined,
  AreaChartOutlined,
  CodeOutlined,
} from '@ant-design/icons';

/**
 * TypeScript Properties: editor is the main editor component,
 * setEditorMenuActive and editorMenuActive are the state of the
 * component where the add "+" button is clicked.
 */
type FloatingProps = {
  editor?: any;
  setEditorMenuActive?: any;
  editorMenuActive?: any;
  allowEmbeds?: boolean;
};

const EditorFloatingMenu: React.FC<FloatingProps> = ({
  editor,
  editorMenuActive,
  setEditorMenuActive,
  allowEmbeds,
}) => {
  // const [newImageUrl, setNewImageUrl] = useState();
  // const [newMediaFile, setNewMediaFile] = useState<any>();
  // const [uploading, setUploading] = useState<boolean>(false);
  const [isShown, setIsShown] = useState(false);

  /**
   * Using Google Cloud Storage (through Firebase) to
   * store newly uploaded images. Add new paragraph after
   * the image node.
   */
  // const addImage = () => {
  //   const url = newImageUrl;
  //   setEditorMenuActive(false);

  //   if (url) {
  //     editor?.chain().focus().setImage({ src: url }).run();

  //     editor
  //       ?.chain()
  //       .command(({ tr, dispatch }: any) => {
  //         if (dispatch) {
  //           const { parent, pos } = tr.selection.$from;
  //           const posAfter = pos + 1;
  //           const nodeAfter = tr.doc.nodeAt(posAfter);

  //           if (!nodeAfter) {
  //             const node = parent.type.contentMatch.defaultType?.create();

  //             if (node) {
  //               tr.insert(posAfter, node);
  //               tr.setSelection(TextSelection.create(tr.doc, posAfter));
  //             }
  //           }

  //           tr.scrollIntoView();
  //         }

  //         return true;
  //       })
  //       .run();

  //     setIsShown(false);
  //   }
  // };

  // const uploadImage = async () => {
  //   setUploading(true);
  //   const file = newMediaFile[0];
  //   console.log(file);
  //   setEditorMenuActive(false);

  //   const fbStorageRef = storage.ref();
  //   const imagesRef = fbStorageRef.child('2021').child(file.name);

  //   // Type of file will be set to 'image' no need to set 'jpeg/png/etc.'
  //   const metadata = {
  //     contentType: 'image',
  //   };

  //   const uploadTask = await imagesRef.put(file, metadata);
  //   console.log('Uploaded successfully!', uploadTask);

  //   const url = await uploadTask.ref.getDownloadURL();

  //   console.log(url);

  //   if (url) {
  //     editor?.chain().focus().setImage({ src: url }).run();

  //     editor
  //       ?.chain()
  //       .command(({ tr, dispatch }: any) => {
  //         if (dispatch) {
  //           const { parent, pos } = tr.selection.$from;
  //           const posAfter = pos + 1;
  //           const nodeAfter = tr.doc.nodeAt(posAfter);

  //           if (!nodeAfter) {
  //             const node = parent.type.contentMatch.defaultType?.create();

  //             if (node) {
  //               tr.insert(posAfter, node);
  //               tr.setSelection(TextSelection.create(tr.doc, posAfter));
  //             }
  //           }

  //           tr.scrollIntoView();
  //         }

  //         return true;
  //       })
  //       .run();

  //     setIsShown(false);
  //     setUploading(false);
  //   }
  // };

  /**
   * Function to embed content in the article "setIframely"
   * is a prosemirror/tiptap plugin created by the ShadowCMS
   * team.
   */
  const setEmbed = () => {
    const url = window.prompt('URL');

    if (url) {
      editor
        ?.chain()
        .focus()
        .setEmbed({ href: url as string })
        .run();
    }

    setEditorMenuActive(false);
  };

  return (
    <React.Fragment>
      {editor && (
        <FloatingMenu
          className="floating-menu"
          pluginKey="floatingMenuOne"
          shouldShow={null}
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <EditorMenu className={`${editorMenuActive && 'show'}`}>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();

                setEditorMenuActive(false);
              }}
              className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
              <FontSizeOutlined />
              Subheading
            </button>
            <button
              onClick={() => {
                setIsShown(!isShown);
              }}
              className={editor.isActive('image') ? 'is-active' : ''}
            >
              <AreaChartOutlined />
              Image
            </button>
            {allowEmbeds && (
              <button onClick={setEmbed}>
                <TwitterOutlined />
                Embed
              </button>
            )}
            <span className="menuSeperator" />
            <button
              onClick={() => {
                editor.chain().focus().toggleBulletList().run();
                setEditorMenuActive(false);
              }}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
              <OrderedListOutlined />
              Bullet List
            </button>

            <button
              className={editor.isActive('codeBlock') ? 'is-active' : ''}
              onClick={async () => {
                editor.chain().focus().toggleCodeBlock().run();
                setEditorMenuActive(false);
                await editor?.chain().insertContent(`<p></p>`).run();
              }}
            >
              <CodeOutlined />
              HTML Code
            </button>
          </EditorMenu>
          <EditorAdd onClick={() => setEditorMenuActive(!editorMenuActive)}>
            <PlusOutlined size={24} />
          </EditorAdd>
        </FloatingMenu>
      )}
    </React.Fragment>
  );
};

export default EditorFloatingMenu;
