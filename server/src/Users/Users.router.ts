import express from 'express';
import {
  deleteUserById,
  getUsersInfoWithProject,
  getUsersByOrganization,
  handleGet,
  logInUser,
  signUpUser,
  updateUserAdminById,
} from './Users.controller';
import * as multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer.default({ storage: storage }).single('file');

const router = express.Router();
router.get('/', handleGet);
router.get('/organization', getUsersByOrganization);
router.get('/:orgId', getUsersInfoWithProject);

router.get('/image', upload);

router.put('/admin/:id', updateUserAdminById);
router.delete('/:id', deleteUserById);

router.post('/login', [logInUser, handleGet]);

router.post('/signup', [signUpUser, handleGet]);
export default router;
