//generate a Person class with functions that say Hello and Goodbye.

using System;

public class Person
{
    public string Name { get; set; }

    public Person(string name)
    {
        Name = name;
    }

    public void SayHello()
    {
        Console.WriteLine("Hello, my name is " + Name);
    }

    public void SayGoodbye()
    {
        Console.WriteLine("Goodbye, my name is " + Name);
    }
}