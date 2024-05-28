// Generate a class that converts a string into snake case.

namespace exercise.CSharp.Console
{
    /// <summary>
    /// This class is responsible for converting a string to snake case.
    /// </summary>
    public static class SnakeCaseConverter
    {
        /// <summary>
        /// Converts a string to snake case.
        /// </summary>
        /// <param name="input">The string to convert</param>
        /// <returns>The converted value</returns>
        public static string Convert(string input)
        {
            var converted = input.ToLower();
            converted = System.Text.RegularExpressions.Regex.Replace(converted, @"[^\w\s]", "");
            converted = System.Text.RegularExpressions.Regex.Replace(converted, @"\s+", " ").Replace(" ", "_");
            return converted;
        }
    }
}