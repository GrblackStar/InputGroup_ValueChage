using UntitledApp1.Models.Financial;

namespace UntitledApp1.Financial
{
    public interface IFinancialService
    {
        Task<List<BoxOfficeRevenueType>> GetBoxOfficeRevenue();
    }
}
