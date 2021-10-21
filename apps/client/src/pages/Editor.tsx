/**
 * Article Editing/Production Page
 *
 * @author ShadowCMS
 */

import * as Y from 'yjs';
import React from 'react';
import loadable from '@loadable/component';
import { useParams } from 'react-router-dom';
import { WebsocketProvider } from 'y-websocket';

const Layout = loadable(() => import('../ui/Layout'));
const Header = loadable(() => import('../components/common/Header'));
const Wrapper = loadable(() => import('../ui/Wrapper'));
const ShadowCompose = loadable(() => import('../components/ShadowCompose'));

const Editor: React.FC = () => {
  /* Get article document ID from URL */
  const { id }: any = useParams();
  console.log(`Editor activated for article: ${id}`);

  /**
   * Initialize new WebRTC provider with room name of the
   * new document ID.
   */
  const document: Y.Doc = new Y.Doc();
  const provider = new WebsocketProvider(
    'wss://shadow-websockets.herokuapp.com',
    id,
    document,
  );

  return (
    <Layout title={`Editing ${id} - Shadow`}>
      <Header isEditor />
      <Wrapper margin="40px auto">
        <ShadowCompose id={id} document={document} provider={provider} />
      </Wrapper>
    </Layout>
  );
};

export default Editor;
