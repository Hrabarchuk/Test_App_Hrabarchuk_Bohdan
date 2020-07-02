using System.Collections.Generic;
using System.Threading.Tasks;
using Test_App.Data.Models;
using Test_App.Repo.Models;

namespace Test_App.Repo.Interfaces.Repositories
{
    public interface ICarRepository : IAsyncRepository<Car>, IRepository<Car>
    {
        Task<GetManyResponse<List<Car>>> GetManyAsync(GetCarsModule carsModule);
    }
}
