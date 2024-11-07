import express, { Request, Response } from 'express';
import fileUpload from '../config/fileUpload';
import { addAttachment, getAttachmentCountByTaskId, getAttachmentCountByTasks } from './attachments.service';

const router = express.Router();

router.post('/attachments', fileUpload.array('files'), async (req: Request, res: Response): Promise<void> => {
  const { taskId } = req.body;

  if (!taskId || !req.files || (req.files as Express.Multer.File[]).length === 0) {
    res.status(400).json({ error: 'taskId and files are required.' });
  }

  try {
    const files = req.files as Express.Multer.File[];  
    for (const file of files) {
      await addAttachment(taskId, file.filename);
    }

    const count = await getAttachmentCountByTaskId(taskId);
    
    res.status(201).json({
      count,
      message: `${files.length} attachments saved successfully`
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.get('/task/attachments', async (req: Request, res: Response): Promise<void> => {

  try {
    const data = await getAttachmentCountByTasks();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
