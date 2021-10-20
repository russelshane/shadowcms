/**
 * Global Client Routes
 *
 * @author ShadowCMS
 */

const ROUTES = {
  /* Common */
  LANDING: '/',
  DASHBOARD: '/dash',
  LOGOUT: '/eject',

  /* Misc */
  MEDIA_LIBRARY: '/multimedia',
  NEWSROOM: '/newsroom',

  /* User Private */
  PLANNER: '/planner/:username',
  MESSAGES: '/messages/:username',
  PROFILE: '/by/:username',

  /* Production */
  ARTICLE_EDIT: '/doc/:id/editing',
  ARTICLE_PREVIEW: '/doc/:id/preview',

  /* System Admin */
  HELP: '/help',
};

export default ROUTES;
