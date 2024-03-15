using BindableComponents.Models.Northwind;

namespace BindableComponents.Northwind
{
    public class MockNorthwindService : INorthwindService
    {
        public Task<List<CategoriesType>> GetCategories()
        {
            return Task.FromResult<List<CategoriesType>>(new());
        }

        public Task<List<CustomersType>> GetCustomers()
        {
            return Task.FromResult<List<CustomersType>>(new());
        }
    }
}
