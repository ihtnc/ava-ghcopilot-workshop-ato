using System.Security.Cryptography;

public class DataV2
{
    public string StringValue { get; set; } = Guid.NewGuid().ToString();
    public int IntValue { get; set; } = RandomNumberGenerator.GetInt32(0, 100);
    public DateTime DateValue { get; set; } = DateTime.Now;
}