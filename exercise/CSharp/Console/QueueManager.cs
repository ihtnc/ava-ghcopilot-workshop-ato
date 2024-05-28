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
        private readonly List<Tuple<T, int>> items;

        public QueueManager()
        {
            items = [];
        }

        public T[] Queue
        {
            get
            {
                return items
                    .OrderByDescending(i => i.Item2)
                    .Select(i => i.Item1).ToArray();
            }
        }

        public void AddToQueue(T data)
        {
            if (items.Any(i => i.Item1.Equals(data)))
            {
                var item = items.First(i => i.Item1.Equals(data));
                items.Remove(item);
                items.Add(new Tuple<T, int>(data, item.Item2 + 1));
            }
            else
            {
                items.Add(new Tuple<T, int>(data, 1));
            }
        }

        public T Process()
        {
            var item = items
                    .OrderByDescending(i => i.Item2).First();
            items.Remove(item);
            return item.Item1;
        }

        public void Clear()
        {
            items.Clear();
        }
    }
}