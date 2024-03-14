using System.Text.Json;
using BindableComponents.Models.Northwind;

namespace BindableComponents.Northwind
{
    public class NorthwindService: INorthwindService
    {
        private readonly IWebHostEnvironment _env;

        public NorthwindService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public async Task<List<CategoriesType>> GetCategories()
        {
            var options = new JsonSerializerOptions(new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            var path = _env.WebRootPath + "/static-data/northwind-categories-type.json";
            if (!File.Exists(path))
            {
                return new List<CategoriesType>();
            }
            var data = File.ReadAllText(path);
            return await Task.FromResult(JsonSerializer.Deserialize<List<CategoriesType>>(data, options));
        }

        public async Task<List<CustomersType>> GetCustomers()
        {
            var options = new JsonSerializerOptions(new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            var path = _env.WebRootPath + "/static-data/northwind-customers-type.json";
            if (!File.Exists(path))
            {
                return new List<CustomersType>();
            }
            var data = File.ReadAllText(path);
            return await Task.FromResult(JsonSerializer.Deserialize<List<CustomersType>>(data, options));
        }
    }
}
