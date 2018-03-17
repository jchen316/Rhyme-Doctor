import express from 'express';
import { getPostsCtrl, createPostCtrl, deletePostCtrl, commentCtrl, uncommentCtrl, reportCtrl } from './contentCtrl';

const router = express.Router();

router.route('/post') // be RESTful...
  .post(createPostCtrl);

router.route('/deletePost')
  .delete(deletePostCtrl);

router.route('/posts')
  .get(getPostsCtrl);

router.route('/comment')
  .post(commentCtrl);

router.route('/uncomment')
  .delete(uncommentCtrl);

router.route('/report')
  .post(reportCtrl);

export default router;
