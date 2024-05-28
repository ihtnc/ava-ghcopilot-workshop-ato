namespace exercise.CSharp.Console
{
    [TestFixture]
    public class UtilitiesTests
    {
        [Test]
        public void GetRandom_Should_Return_Values_GreaterThanOrEqual_To_Min()
        {
            // Arrange
            int min = 1;
            int max = 10;

            for(int i = 0; i < 1000; i++)
            {
                // Act
                int result = Utilities.GetRandom(min, max);

                // Assert
                Assert.That(result, Is.GreaterThanOrEqualTo(min));
            }
        }

        [Test]
        public void GetRandom_Should_Return_Values_LessThanOrEqual_To_Max()
        {
            // Arrange
            int min = 1;
            int max = 10;

            for (int i = 0; i < 1000; i++)
            {
                // Act
                int result = Utilities.GetRandom(min, max);

                // Assert
                Assert.That(result, Is.LessThanOrEqualTo(max));
            }
        }
    }
}