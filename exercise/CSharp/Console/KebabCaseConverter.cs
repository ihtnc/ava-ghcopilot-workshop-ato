namespace exercise.CSharp.Console
{
    /// <summary>
    /// This class is responsible for converting a string to kebab case.
    /// </summary>
    public static class KebabCaseConverter
    {
        /// <summary>
        /// Converts a string to kebab case.
        /// </summary>
        /// <param name="input">The string to convert</param>
        /// <returns>The converted value</returns>
        public static string Convert(string input)
        {
            var converted = input.ToLower();
            System.Text.RegularExpressions.Regex.Replace(converted, @"[^\w\s]", "");
            System.Text.RegularExpressions.Regex.Replace(converted, @"\s+", " ").Replace(" ", "-");
            return converted;
        }
    }
}