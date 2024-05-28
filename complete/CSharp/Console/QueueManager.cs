namespace exercise.CSharp.Console
{
    public interface IQueueManager<T>
    {
        void AddToQueue(T data);
        T[] Queue { get; }
        T Process();
        void Clear();
    }

    public class QueueManager<T> : IQueueManager<T> where T : notnull
    {
        private readonly Dictionary<T, int> items;
        private T[] queue;

        public QueueManager()
        {
            items = new Dictionary<T, int>();
            queue = new T[0];
        }

        public T[] Queue => queue;

        public void AddToQueue(T data)
        {
            if (items.ContainsKey(data))
            {
                items[data]++;
            }
            else
            {
                items[data] = 1;
            }
            UpdateQueue();
        }

        public T Process()
        {
            var item = queue[0];
            items.Remove(item);
            UpdateQueue();
            return item;
        }

        public void Clear()
        {
            items.Clear();
            UpdateQueue();
        }

        private void UpdateQueue()
        {
            queue = items.OrderByDescending(i => i.Value).Select(i => i.Key).ToArray();
        }
    }
}