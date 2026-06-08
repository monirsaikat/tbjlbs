import { ChatRemoteDataSource }    from '../../data/datasources/remote';
import { ChatLocalDataSource }     from '../../data/datasources/local';
import { ConversationRepository }  from '../../data/repositories/ConversationRepository';
import { MessageRepository }       from '../../data/repositories/MessageRepository';
import { ChatService }             from '../services';

const chatRemote              = new ChatRemoteDataSource();
const chatLocal               = new ChatLocalDataSource();
const conversationRepository  = new ConversationRepository(chatRemote);
const messageRepository       = new MessageRepository(chatRemote, chatLocal);

export const chatService = new ChatService(conversationRepository, messageRepository);
