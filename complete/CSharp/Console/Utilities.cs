// Create a static class named Utilities that has a GetRandom function.
// The class is to be on the exercise.CSharp.Console namespace.
// The function should return a random number between, and including, the minimum and maximum value.
// The function should have two parameters, the minimum and maximum number to choose from.

using System;

namespace exercise.CSharp.Console
{
    public static class Utilities
    {
        public static int GetRandom(int min, int max)
        {
            var random = new Random();
            return random.Next(min, max + 1);
        }
    }
}