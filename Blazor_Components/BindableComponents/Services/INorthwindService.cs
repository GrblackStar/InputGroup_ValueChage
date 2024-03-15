using BindableComponents.Models.Northwind;

namespace BindableComponents.Northwind
{
    public interface INorthwindService
    {
        Task<List<CategoriesType>> GetCategories();
        Task<List<CustomersType>> GetCustomers();
    }
}
