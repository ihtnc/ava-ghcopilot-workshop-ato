namespace exercise.CSharp.Console.Tests
{
    public class QueueManagerTests
    {
        [Test]
        public void AddToQueue_AddsItemToQueue()
        {
            // Arrange
            var queueManager = new QueueManager<string>();

            // Act
            queueManager.AddToQueue("Item 1");

            // Assert
            Assert.That(queueManager.Queue, Is.EquivalentTo(new[] { "Item 1" }));
        }

        [Test]
        public void AddToQueue_AddsItemToQueue_Multiple()
        {
            // Arrange
            var queueManager = new QueueManager<string>();

            // Act
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 2");
            queueManager.AddToQueue("Item 3");

            // Assert
            Assert.That(queueManager.Queue, Has.Length.EqualTo(3));
            Assert.That(queueManager.Queue, Has.Member("Item 1"));
            Assert.That(queueManager.Queue, Has.Member("Item 2"));
            Assert.That(queueManager.Queue, Has.Member("Item 3"));
        }

        [Test]
        public void AddToQueue_DoesNotAddExistingItemToQueue()
        {
            // Arrange
            var queueManager = new QueueManager<string>();

            // Act
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 2");
            queueManager.AddToQueue("Item 2");

            // Assert
            Assert.That(queueManager.Queue, Has.Length.EqualTo(2));
            Assert.That(queueManager.Queue, Has.Member("Item 1"));
            Assert.That(queueManager.Queue, Has.Member("Item 2"));
        }

        [Test]
        public void AddToQueue_MovesExistingItemHigherInTheQueue()
        {
            // Arrange
            var queueManager = new QueueManager<string>();

            // Act
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 2");
            queueManager.AddToQueue("Item 2");

            // Assert
            Assert.That(queueManager.Queue, Is.EquivalentTo(new [] { "Item 2", "Item 1" }));
        }

        [Test]
        public void AddToQueue_RecalculatesItemPositionEverytime()
        {
            // Arrange
            var queueManager = new QueueManager<string>();
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 2");
            queueManager.AddToQueue("Item 2");
            Assert.That(queueManager.Queue, Is.EquivalentTo(new [] { "Item 2", "Item 1" }));

            // Act
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 1");

            // Assert
            Assert.That(queueManager.Queue, Is.EquivalentTo(new [] { "Item 1", "Item 2" }));
        }

        [Test]
        public void Process_RemovesItem()
        {
            // Arrange
            var queueManager = new QueueManager<string>();
            queueManager.AddToQueue("Item 1");

            // Act
            var processedItem = queueManager.Process();

            // Assert
            Assert.That(processedItem, Is.EqualTo("Item 1"));
            Assert.That(queueManager.Queue, Is.Empty);
        }

        [Test]
        public void Process_RemovesItemAtTheStartOfTheQueue()
        {
            // Arrange
            var queueManager = new QueueManager<string>();
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 2");
            queueManager.AddToQueue("Item 2");

            // Act
            var processedItem = queueManager.Process();

            // Assert
            Assert.That(processedItem, Is.EqualTo("Item 2"));
            Assert.That(queueManager.Queue, Is.EquivalentTo(new [] { "Item 1" }));
        }

        [Test]
        public void Clear_RemovesAllItemsFromQueue()
        {
            // Arrange
            var queueManager = new QueueManager<string>();
            queueManager.AddToQueue("Item 1");
            queueManager.AddToQueue("Item 2");
            queueManager.AddToQueue("Item 3");

            // Act
            queueManager.Clear();

            // Assert
            Assert.That(queueManager.Queue, Is.Empty);
        }
    }
}