using UntitledApp1.Models.Northwind;

namespace UntitledApp1.Northwind
{
    public class MockNorthwindService : INorthwindService
    {
        public Task<List<CustomersType>> GetCustomers()
        {
            return Task.FromResult<List<CustomersType>>(new());
        }
    }
}
