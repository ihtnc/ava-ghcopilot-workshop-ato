using System.Text.Json.Nodes;

namespace exercise.CSharp.Console
{
    public class StarwarsApi
    {
        private readonly HttpClient _client;

        public StarwarsApi(HttpClient client)
        {
            _client = client;
        }

        public async Task<JsonNode> GetCharacter(string name)
        {
            var response = await _client.GetAsync($"https://swapi.dev/api/people/?search={name}");
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            var json = JsonNode.Parse(content);
            return json["results"][0];
        }
    }
}