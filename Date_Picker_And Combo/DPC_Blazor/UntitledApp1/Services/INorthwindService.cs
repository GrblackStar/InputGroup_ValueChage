using UntitledApp1.Models.Northwind;

namespace UntitledApp1.Northwind
{
    public interface INorthwindService
    {
        Task<List<CustomersType>> GetCustomers();
    }
}
