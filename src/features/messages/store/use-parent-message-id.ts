import { useQueryState } from 'nuqs';

// nuqs <NuqsProvider> 필요
// const [parentMessageId,  setParentMessageId] = useState(null); <=> http://loaclhost:3000?parentMessageId=null

export const useParentMessageId = () => {
  return useQueryState('parentMessageId');
};
