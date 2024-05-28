using System.Security.Cryptography;

public class Data
{
    public string StringValue { get; set; } = Guid.NewGuid().ToString();
    public int IntValue { get; set; } = RandomNumberGenerator.GetInt32(0, 100);
}