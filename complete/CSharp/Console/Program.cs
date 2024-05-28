// See https://aka.ms/new-console-template for more information
using exercise.CSharp.Console;

var random = Utilities.GetRandom(1, 10);
Console.WriteLine(random);

var kebabcase = KebabCaseConverter.Convert("Hello,    World123!");
Console.WriteLine(kebabcase);

var starwarsApi = new StarwarsApi(new HttpClient());
var character = await starwarsApi.GetCharacter("Picard");
Console.WriteLine(character);

var snakecase = SnakeCaseConverter.Convert("Hello,    World123!");
Console.WriteLine(snakecase);