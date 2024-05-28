using System.Text.Json;
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
            try
            {
                var response = await _client.GetAsync($"https://swapi.dev/api/people/?search={name}");
                response.EnsureSuccessStatusCode();
                var content = await response.Content.ReadAsStringAsync();
                var json = JsonNode.Parse(content);
                return json["results"][0];
            }
            catch (HttpRequestException ex)
            {
                // Handle HTTP request exception
                return CreateErrorMessage("An error occurred while making the HTTP request.");
            }
            catch (JsonException ex)
            {
                // Handle JSON parsing exception
                return CreateErrorMessage("An error occurred while parsing the JSON response.");
            }
            catch (Exception ex)
            {
                // Handle any other exception
                return CreateErrorMessage("An error occurred.");
            }
        }

        private JsonNode CreateErrorMessage(string message)
        {
            var errorJson = new JsonObject
            {
                ["error"] = message
            };
            return errorJson;
        }
    }
}