import { Attachment } from './attachments.model';
import path from 'path';

const addAttachment = async (taskId: string ,filename: string) => {
  await Attachment.create({
    taskId,
    filename,
    url: path.join('uploads', filename),
  });
}

const getAttachmentCountByTaskId = async (taskId: string) => {
  return await Attachment.countDocuments({
    taskId,
  });
}

export {
  addAttachment,
  getAttachmentCountByTaskId
};