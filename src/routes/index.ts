import { Router } from 'express';

import attachmentsController from '../attachments/attachments.controller';

const router = Router();

router.use(attachmentsController);

export default router;
