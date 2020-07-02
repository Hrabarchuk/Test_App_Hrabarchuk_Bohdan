using System.Collections.Generic;
using System.Threading.Tasks;
using Test_App.Data.Models;
using Test_App.Repo.Dto;
using Test_App.Repo.Models;

namespace Test_App.Core.Interfaces
{
    public interface ICarService
    {
        Task<Car> CreateCar(CarDto model);
        Task DeleteCar(int id);
        Task<int> UpdateCar(CarDto model);
        Task<Car> GetCarById(int id);
        Task<List<Car>> GetAllCars();
        Task<GetManyResponse<List<Car>>> CarFiltering(GetCarModuleDto model);
    }
}
